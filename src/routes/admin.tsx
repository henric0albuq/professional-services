import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import type { Session } from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";
import { changeAdminAccount } from "@/lib/admin-account";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { portfolioCategories } from "@/lib/portfolio-categories";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({ meta: [
    { title: "Área administrativa | TRIA+ Soluções Digitais" },
    { name: "description", content: "Gerenciamento das fotos do portfólio TRIA+." },
    { property: "og:title", content: "Área administrativa | TRIA+" },
    { property: "og:description", content: "Gerenciamento das fotos do portfólio TRIA+." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "robots", content: "noindex" },
  ] }),
  component: AdminPage,
});

type Photo = { id: string; category: string; title: string; description: string; image_url: string; storage_path: string | null; sort_order: number };

function AdminPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setReady(true); });
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) { setIsAdmin(false); return; }
    supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" }).then(({ data }) => setIsAdmin(!!data));
  }, [session]);

  if (!ready) return <main className="min-h-screen p-8">Carregando…</main>;
  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <header className="grid min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <h1 className="min-w-0 break-words text-2xl font-bold">Área administrativa — Portfólio</h1>
          <div className="flex shrink-0 gap-2">
            <Button asChild variant="outline"><Link to="/portfolio">Ver portfólio</Link></Button>
            {session && <Button variant="ghost" onClick={() => supabase.auth.signOut()}>Sair</Button>}
          </div>
        </header>
        {!session ? <LoginForm /> : !isAdmin ? <p>Esta conta não tem acesso administrativo.</p> : <><AccountSettings session={session} /><Manager /></>}
      </div>
    </main>
  );
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminExists, setAdminExists] = useState(true);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [msg, setMsg] = useState("");
  useEffect(() => { supabase.rpc("admin_exists").then(({ data }) => setAdminExists(!!data)); }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setMsg("");
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMsg("E-mail ou senha incorretos.");
    } else {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/admin` } });
      if (error) setMsg(error.message);
      else if (!data.session) setMsg("Conta criada! Confirme pelo link enviado ao seu e-mail e depois entre.");
    }
  }
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader><CardTitle>{mode === "login" ? "Entrar" : "Criar conta de administrador"}</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div>
          <div className="space-y-2"><Label htmlFor="password">Senha</Label><Input id="password" type="password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)} /></div>
          {msg && <p className="text-sm text-muted-foreground">{msg}</p>}
          <Button type="submit" className="w-full">{mode === "login" ? "Entrar" : "Criar conta"}</Button>
          {!adminExists && (
            <Button type="button" variant="link" className="h-auto min-h-10 w-full whitespace-normal" onClick={() => setMode(mode === "login" ? "signup" : "login")}>
              {mode === "login" ? "Primeiro acesso? Criar conta de administrador" : "Já tenho conta"}
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

function AccountSettings({ session }: { session: Session }) {
  const [kind, setKind] = useState<"email" | "password">("email");
  const [value, setValue] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [failed, setFailed] = useState(false);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy || !session.user.email) return;
    setBusy(true); setMessage(""); setFailed(false);
    const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    });
    try {
      await changeAdminAccount(client, {
        userId: session.user.id, currentEmail: session.user.email, currentPassword,
        kind, value, confirmation, redirectTo: `${window.location.origin}/admin`,
      });
      setValue(""); setConfirmation("");
      if (kind === "password") {
        await supabase.auth.signOut();
        return;
      }
      setMessage("Solicitação enviada. Confirme a alteração pelos links recebidos no e-mail atual e no novo e-mail, conforme solicitado. Até a confirmação, continue usando o e-mail atual.");
    } catch (error) {
      setFailed(true);
      setMessage(error instanceof Error ? error.message : "Não foi possível alterar o acesso.");
    } finally {
      setCurrentPassword("");
      await client.auth.signOut({ scope: "local" }).catch(() => undefined);
      setBusy(false);
    }
  }

  return (
    <section className="space-y-4 border-b pb-6" aria-labelledby="account-title">
      <h2 id="account-title" className="text-xl font-semibold">Segurança da conta</h2>
      <p className="break-all text-sm text-muted-foreground">E-mail atual: {session.user.email}</p>
      <div className="flex gap-2" role="group" aria-label="Dados de acesso">
        <Button type="button" variant={kind === "email" ? "default" : "outline"} disabled={busy} aria-pressed={kind === "email"} onClick={() => { setKind("email"); setValue(""); setConfirmation(""); setCurrentPassword(""); setMessage(""); }}>Trocar e-mail</Button>
        <Button type="button" variant={kind === "password" ? "default" : "outline"} disabled={busy} aria-pressed={kind === "password"} onClick={() => { setKind("password"); setValue(""); setConfirmation(""); setCurrentPassword(""); setMessage(""); }}>Trocar senha</Button>
      </div>
      <form onSubmit={submit} className="max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="account-current-password">Senha atual</Label>
          <Input id="account-current-password" type="password" autoComplete="current-password" required disabled={busy} value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="account-new-value">{kind === "email" ? "Novo e-mail" : "Nova senha"}</Label>
          <Input key={kind} id="account-new-value" type={kind === "email" ? "email" : "password"} autoComplete={kind === "email" ? "email" : "new-password"} minLength={kind === "password" ? 8 : undefined} required disabled={busy} value={value} onChange={e => setValue(e.target.value)} />
        </div>
        {kind === "password" && <div className="space-y-2">
          <Label htmlFor="account-confirm-password">Confirmar nova senha</Label>
          <Input id="account-confirm-password" type="password" autoComplete="new-password" minLength={8} required disabled={busy} value={confirmation} onChange={e => setConfirmation(e.target.value)} />
        </div>}
        {message && <p role={failed ? "alert" : "status"} className={failed ? "text-sm text-destructive" : "text-sm text-muted-foreground"}>{message}</p>}
        <Button type="submit" disabled={busy} className="h-auto min-h-10 whitespace-normal">{busy ? "Confirmando…" : kind === "email" ? "Solicitar troca de e-mail" : "Salvar senha e sair"}</Button>
      </form>
    </section>
  );
}

function Manager() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const load = useCallback(async () => {
    const { data } = await supabase.from("portfolio_photos").select("*").order("sort_order").order("created_at");
    setPhotos((data as Photo[]) ?? []);
  }, []);
  useEffect(() => { load(); }, [load]);
  return (
    <div className="space-y-8">
      {portfolioCategories.map(cat => (
        <section key={cat.id} className="space-y-3">
          <h2 className="text-xl font-semibold">{cat.title}</h2>
          <AddPhoto category={cat.id} nextOrder={photos.filter(p => p.category === cat.id).length + 1} onDone={load} />
          <div className="grid gap-4 md:grid-cols-2">
            {photos.filter(p => p.category === cat.id).map(p => <PhotoEditor key={p.id} photo={p} onDone={load} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

async function uploadImage(file: File) {
  const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
  const { error } = await supabase.storage.from("portfolio").upload(path, file, { contentType: file.type });
  if (error) throw error;
  const { data, error: e2 } = await supabase.storage.from("portfolio").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
  if (e2 || !data) throw e2;
  return { path, url: data.signedUrl };
}

function AddPhoto({ category, nextOrder, onDone }: { category: string; nextOrder: number; onDone: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault(); if (!file) return; setBusy(true); setErr("");
    try {
      const { path, url } = await uploadImage(file);
      const { error } = await supabase.from("portfolio_photos").insert({ category, title, description, image_url: url, storage_path: path, sort_order: nextOrder });
      if (error) throw error;
      setFile(null); setTitle(""); setDescription(""); (e.target as HTMLFormElement).reset(); onDone();
    } catch { setErr("Não foi possível enviar a foto."); }
    setBusy(false);
  }
  return (
    <form onSubmit={submit} className="grid gap-2 rounded-lg border p-3 md:grid-cols-[1fr_1fr_2fr_auto] md:items-end">
      <Input type="file" accept="image/*" required onChange={e => setFile(e.target.files?.[0] ?? null)} aria-label="Foto" />
      <Input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <Input placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
      <Button type="submit" disabled={busy}>{busy ? "Enviando…" : "Adicionar foto"}</Button>
      {err && <p className="text-sm text-destructive md:col-span-4">{err}</p>}
    </form>
  );
}

function PhotoEditor({ photo, onDone }: { photo: Photo; onDone: () => void }) {
  const [title, setTitle] = useState(photo.title);
  const [description, setDescription] = useState(photo.description);
  const [busy, setBusy] = useState(false);
  async function save() {
    setBusy(true);
    await supabase.from("portfolio_photos").update({ title, description }).eq("id", photo.id);
    setBusy(false); onDone();
  }
  async function replace(file: File) {
    setBusy(true);
    try {
      const { path, url } = await uploadImage(file);
      await supabase.from("portfolio_photos").update({ image_url: url, storage_path: path }).eq("id", photo.id);
      if (photo.storage_path) await supabase.storage.from("portfolio").remove([photo.storage_path]);
    } finally { setBusy(false); onDone(); }
  }
  async function remove() {
    if (!confirm("Remover esta foto do portfólio?")) return;
    setBusy(true);
    await supabase.from("portfolio_photos").delete().eq("id", photo.id);
    if (photo.storage_path) await supabase.storage.from("portfolio").remove([photo.storage_path]);
    setBusy(false); onDone();
  }
  return (
    <Card>
      <CardContent className="space-y-2 p-3">
        <img src={photo.image_url} alt={photo.title} className="aspect-video w-full rounded object-cover" />
        <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título" aria-label="Título" />
        <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" aria-label="Descrição" />
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={save} disabled={busy}>Salvar</Button>
          <Button size="sm" variant="outline" asChild><label className="cursor-pointer">Trocar foto<input type="file" accept="image/*" className="hidden" onChange={e => e.target.files?.[0] && replace(e.target.files[0])} /></label></Button>
          <Button size="sm" variant="destructive" onClick={remove} disabled={busy}>Remover</Button>
        </div>
      </CardContent>
    </Card>
  );
}
