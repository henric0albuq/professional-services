import type { SupabaseClient } from "@supabase/supabase-js";

export function validateAccountChange(kind: "email" | "password", value: string, confirmation: string, currentPassword: string, currentEmail: string) {
  if (!currentPassword) throw new Error("Informe sua senha atual.");
  if (kind === "email") {
    const email = value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Informe um e-mail válido.");
    if (email === currentEmail.toLowerCase()) throw new Error("Informe um e-mail diferente do atual.");
    return email;
  }
  if (value.length < 8) throw new Error("A nova senha deve ter pelo menos 8 caracteres.");
  if (value !== confirmation) throw new Error("As novas senhas não coincidem.");
  if (value === currentPassword) throw new Error("A nova senha deve ser diferente da atual.");
  return value;
}

// The isolated client never replaces the active browser session during reauthentication.
export async function changeAdminAccount(client: SupabaseClient, input: {
  userId: string; currentEmail: string; currentPassword: string;
  kind: "email" | "password"; value: string; confirmation: string; redirectTo: string;
}) {
  const value = validateAccountChange(input.kind, input.value, input.confirmation, input.currentPassword, input.currentEmail);
  const { data, error } = await client.auth.signInWithPassword({ email: input.currentEmail, password: input.currentPassword });
  if (error || data.user?.id !== input.userId) throw new Error("Não foi possível confirmar sua senha atual.");
  const role = await client.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
  if (role.error || role.data !== true) throw new Error("Esta conta não tem acesso administrativo.");
  const result = input.kind === "email"
    ? await client.auth.updateUser({ email: value }, { emailRedirectTo: input.redirectTo })
    : await client.auth.updateUser({ password: value, current_password: input.currentPassword });
  if (result.error) throw new Error("Não foi possível alterar o acesso. Verifique os requisitos da senha ou tente novamente mais tarde.");
}