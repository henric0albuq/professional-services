import { useState, type CSSProperties, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import repairCSS from "../styles/import-repairs.css?inline";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?inline";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Criação de Sites, Marketing e Planilhas para Empresas | TRIA+ Soluções Digitais" },
    { name: "description", content: "Criação de sites, marketing, Instagram e planilhas financeiras para lojas, empresas, profissionais e pequenos negócios. Soluções acessíveis e personalizadas." },
    { property: "og:title", content: "Criação de Sites, Marketing e Planilhas para Empresas | TRIA+ Soluções Digitais" },
    { property: "og:description", content: "Landing pages, marketing, Instagram e planilhas financeiras para pequenos negócios que querem dar o próximo passo sem complicação." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [projectType, setProjectType] = useState("");
  const [fields, setFields] = useState<Record<string, string>>({});
  const entries = [["NOME", fields["name"]], ["TIPO DE PROJETO", projectType], ["E-MAIL", fields["email"]], ["TELEFONE", fields["phone"]], ["INVESTIMENTO", fields["budget"]], ["SOBRE O MEU NEGÓCIO", fields["business"]], ["O QUE PRECISO", fields["needs"]]].filter((entry) => entry[1]?.trim());
  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!projectType) { form.querySelector<HTMLElement>('[role="radio"]')?.focus(); return; }
    const message = "Olá! Tenho interesse nas soluções digitais.\n\n" + entries.map(([label, value]) => `${label}: ${value}`).join("\n\n");
    window.open(`https://wa.me/5561992316112?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  return (<><style>{repairCSS}</style><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
    <>
      <div className="bg-[hsl(var(--background))]! text-[hsl(var(--foreground))]" data-site-import-document-lang="pt-BR">
        <div className="min-h-full w-full [scroll-margin-top:6rem]" id="root">
          <div className="pointer-events-none" role="region" aria-label="Notifications (F8)" tabIndex={-1}>
            <ol className="flex list-none m-0 max-h-screen p-4 fixed top-0 w-full z-100 flex-col-reverse md:max-w-[420px] md:flex-col sm:bottom-0 sm:right-0 sm:top-auto" tabIndex={-1} />
          </div>
          <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false" />
          <div className="flex flex-col min-h-screen overflow-x-clip bg-white">
            <header className="backdrop-blur-sm border-b border-transparent! sticky top-0 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-full z-50 bg-[#ffffffb3] [animation-duration:300ms] [backdrop-filter:var(--tw-backdrop-blur)]">
              <div className="items-center flex gap-4 h-16 justify-between ml-auto mr-auto pl-5 pr-5 w-full md:h-20 xl:max-w-7xl">
                <a className="shrink-0 text-site-import-foreground [text-decoration:inherit]" aria-label="TRIA+ Soluções Digitais - página inicial" href="/">
                  <img className="brightness-[1.1] block h-9 max-w-full mix-blend-multiply object-contain align-middle w-auto [filter:var(--tw-blur)_var(--tw-brightness)] md:h-11" alt="TRIA+ Soluções Digitais - marketing e planilhas financeiras para negócios" src="/site-assets/c1961fbbf73b5258.webp" {...({ loading: "eager", decoding: "async" } as any)} />
                </a>
                <nav className="items-center gap-1 hidden xl:flex" aria-label="Navegação principal">
                  <a className="bg-[hsl(160_55%_96%)] rounded-[9999px] text-site-import-primary text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit]" href="#inicio">Início</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="#servicos">Serviços</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="#pacotes">Pacotes</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="#processo">Como funciona</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="#faq">FAQ</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="#contato">Contato</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/portfolio">Portfólio</a>
                </nav>
                <div className="items-center flex gap-2">
                  <a className="text-[0.875rem] font-medium leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground hidden [text-decoration:inherit] hover:text-site-import-primary md:block xl:hidden" href="/portfolio">Portfólio</a>
                  <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap hidden [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)] md:flex" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a>
<Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}><Dialog.Trigger className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center bg-none border-[hsl(var(--input))]! rounded-[9999px] border! cursor-pointer text-[0.875rem] font-semibold gap-2 h-11 justify-center leading-5 m-0 p-0 normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-11 bg-transparent text-site-import-foreground flex [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] xl:hidden" aria-label="Abrir menu de navegação" type="button" aria-haspopup="dialog" aria-expanded={menuOpen} data-state={menuOpen ? "open" : "closed"}>
                    <svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                      <path d="M4 12h16" />
                      <path d="M4 18h16" />
                      <path d="M4 6h16" />
                    </svg>
                  </Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="import-menu-overlay" /><Dialog.Content className="import-menu" aria-describedby={undefined}><Dialog.Title className="import-menu-title">Navegação</Dialog.Title><nav aria-label="Navegação mobile"><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#pacotes" onClick={() => setMenuOpen(false)}>Pacotes</a><a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a><a href="/portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a></nav><div className="import-menu-contact"><a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap flex [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)] w-full" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a><p>(61) 99231-6112 • Atendimento online para todo o Brasil</p></div><Dialog.Close className="import-menu-close" aria-label="Fechar menu"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <section className="overflow-hidden relative pt-10 pr-0 pb-16 pl-0 [scroll-margin-top:6rem] md:pt-14 md:pr-0 md:pb-24 md:pl-0" id="inicio">
                <div className="bg-hero-glow inset-0 pointer-events-none absolute" aria-hidden="true" />
                <div className="h-[26rem] left-0 opacity-50 pointer-events-none absolute right-0 top-0 [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(rgb(0,0,0)_55%,transparent_100%)]" aria-hidden="true" />
                <div className="ml-auto mr-auto pl-5 pr-5 relative w-full xl:max-w-7xl">
                  <div className="items-center grid gap-x-12 gap-12 gap-y-12 lg:grid-cols-[1.05fr_1fr] xl:gap-x-8 xl:gap-8 xl:gap-y-8">
                    <div>
                      <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Soluções digitais para pequenos negócios</div>
                      </div>
                      <div className="opacity-100 transform-none delay-50 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <h1 className="font-extrabold m-0 mt-6! text-balance text-site-import-foreground text-[32px] tracking-[-0.8px] leading-[35.84px] md:text-[41.6px] md:tracking-[-1.04px] md:leading-[46.592px] xl:text-[49.6px] xl:tracking-[-1.24px] xl:leading-[55.552px]">Seu negócio mais profissional, organizado e presente no digital.</h1>
                      </div>
                      <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <p className="m-0 mt-5! max-w-xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[18px] md:leading-7">Landing pages, marketing, Instagram e soluções financeiras para pequenos negócios que querem dar o próximo passo sem complicação.</p>
                      </div>
                      <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="flex flex-wrap gap-3 mt-8">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="#servicos">Quero conhecer os serviços<svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a>
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shine-wrap shadow-[0_14px_34px_-18px_hsl(var(--brand)/0.65)] hover:-translate-y-0.5 hover:shadow-glow items-center border-[hsl(163_84%_44%/0.4)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[1rem] font-semibold gap-2 h-14 isolate justify-center leading-6 overflow-hidden pl-8 pr-8 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-[#ffffffe6] text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:border-[hsl(163_84%_44%)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/portfolio"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>Nosso Portfólio</a>
                        </div>
                      </div>
                      <div className="opacity-100 transform-none delay-200 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <p className="text-[0.875rem] font-medium leading-5 m-0 mt-6! text-pretty text-site-import-muted-foreground">Atendimento personalizado • Preços acessíveis • Soluções sob medida • Trabalhos reais</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="ml-auto mr-auto max-w-[34rem] relative w-full pt-12 pr-5 pb-20 pl-5 md:pt-12 md:pr-8 md:pb-24 md:pl-8">
                        <div className="-translate-x-1/2 -translate-y-1/2 blur-3xl bg-[hsl(163_84%_44%/0.1)] rounded-[9999px] h-96 left-1/2 pointer-events-none absolute top-1/2 transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] w-96 -z-10 [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                        <div className="shadow-elegant backdrop-blur border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-3 bg-[#fffffff2] [animation:9s_ease-in-out_0s_infinite_normal_none_running_float] [backdrop-filter:var(--tw-backdrop-blur)]">
                          <div className="items-center flex gap-2 pb-3">
                            <span className="rounded-[9999px] h-2.5 w-2.5 bg-[#f3f5f7]" />
                            <span className="rounded-[9999px] h-2.5 w-2.5 bg-[#f3f5f7]" />
                            <span className="rounded-[9999px] h-2.5 w-2.5 bg-[#f3f5f7]" />
                            <span className="rounded-[9999px] flex-1 text-[0.65rem] font-medium ml-2 overflow-hidden pb-1 pl-3 pr-3 pt-1 text-ellipsis whitespace-nowrap bg-[#f3f5f7cc] text-site-import-muted-foreground">seunegocio.com.br</span>
                          </div>
                          <div className="border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! p-4">
                            <div className="items-start flex gap-3 justify-between">
                              <div className="space-y-2">
                                <span className="bg-[hsl(200_14%_9%/0.8)] rounded-[9999px] block h-2.5 w-24 sm:w-32" />
                                <span className="bg-[hsl(200_14%_9%/0.25)] rounded-[9999px] block h-2 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] w-36 sm:w-44" />
                                <span className="bg-[hsl(200_14%_9%/0.15)] rounded-[9999px] block h-2 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] w-28 sm:w-36" />
                              </div>
                              <span className="rounded-[9999px] text-[hsl(200_20%_8%)] shrink-0 text-[0.6rem] font-bold pb-1.5 pl-3 pr-3 pt-1.5 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">WhatsApp</span>
                            </div>
                            <div className="grid gap-2 grid-cols-3 mt-4">
                              <div className="border-[hsl(var(--border)/0.6)]! rounded-[0.75rem] border! p-2 bg-white">
                                <span className="bg-[hsl(163_84%_44%/0.6)] rounded-[9999px] block h-1.5 w-6" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-2 w-full" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-1 w-2/3" />
                              </div>
                              <div className="border-[hsl(var(--border)/0.6)]! rounded-[0.75rem] border! p-2 bg-white">
                                <span className="bg-[hsl(163_84%_44%/0.6)] rounded-[9999px] block h-1.5 w-6" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-2 w-full" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-1 w-2/3" />
                              </div>
                              <div className="border-[hsl(var(--border)/0.6)]! rounded-[0.75rem] border! p-2 bg-white">
                                <span className="bg-[hsl(163_84%_44%/0.6)] rounded-[9999px] block h-1.5 w-6" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-2 w-full" />
                                <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mt-1 w-2/3" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="shadow-elegant bg-site-import-foreground border-site-import-foreground! rounded-[1.4rem] border-[3px]! bottom-3 shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] left-0 p-1 absolute w-[6.5rem] [animation:7s_ease-in-out_0s_infinite_normal_none_running_float] sm:left-2 sm:w-[7.5rem]">
                          <div className="rounded-[1.05rem] p-2 bg-white">
                            <div className="items-center flex gap-1.5">
                              <span className="rounded-[9999px] h-4 w-4 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                              <span className="bg-[hsl(200_14%_9%/0.15)] rounded-[9999px] flex-1 h-1.5" />
                            </div>
                            <div className="grid gap-1.5 grid-cols-2 mt-2">
                              <span className="from-brand-soft to-brand/40 aspect-square rounded-[calc(1rem_-_2px)] [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                              <span className="from-accentBlue-soft to-accentBlue/30 aspect-square rounded-[calc(1rem_-_2px)] [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-accentBlue-soft aspect-square rounded-[calc(1rem_-_2px)] [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                              <span className="from-secondary to-brand-soft aspect-square rounded-[calc(1rem_-_2px)] [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                            </div>
                            <div className="space-y-1 mt-2">
                              <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 w-full" />
                              <span className="bg-[hsl(200_14%_9%/0.1)] rounded-[9999px] block h-1.5 mb-[calc(0.25rem_*_var(--tw-space-y-reverse))] mt-[calc(0.25rem_*_calc(1_-_var(--tw-space-y-reverse)))] w-2/3" />
                            </div>
                          </div>
                        </div>
                        <div className="shadow-card backdrop-blur border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-3 absolute right-0 top-0 w-[9.5rem] bg-[#fffffff2] [animation:7s_ease-in-out_0s_infinite_normal_none_running_float] [animation-delay:1.1s]! [backdrop-filter:var(--tw-backdrop-blur)] sm:w-44">
                          <span className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-site-import-muted-foreground">Painel do negócio</span>
                          <svg className="block h-11 mt-2 align-middle w-full" viewBox="0 0 120 40" role="img" aria-label="Exemplo de gráfico de acompanhamento">
                            <path d="M0 32 C16 30 24 18 38 20 C50 22 58 12 72 14 C86 16 96 6 120 8" fill="none" stroke="hsl(var(--brand))" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M0 32 C16 30 24 18 38 20 C50 22 58 12 72 14 C86 16 96 6 120 8 L120 40 L0 40 Z" fill="hsl(var(--brand) / 0.14)" />
                          </svg>
                          <span className="inline-block text-[0.58rem] font-medium mt-1 text-site-import-muted-foreground">exemplo ilustrativo</span>
                        </div>
                        <div className="shadow-card backdrop-blur border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! bottom-4 shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-3 absolute right-0 w-[10.5rem] bg-[#fffffff2] [animation:9s_ease-in-out_0s_infinite_normal_none_running_float] [animation-delay:0.6s]! [backdrop-filter:var(--tw-backdrop-blur)] sm:w-48">
                          <span className="text-[0.6rem] font-semibold tracking-[0.12em] uppercase text-site-import-muted-foreground">Planilha financeira</span>
                          <div className="space-y-2 mt-2">
                            <div className="items-center flex gap-2">
                              <span className="bg-[hsl(163_84%_44%)] rounded-[9999px] flex-1 h-1.5" />
                              <span className="text-[0.55rem] font-medium text-site-import-muted-foreground">Entradas</span>
                            </div>
                            <div className="items-center flex gap-2 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                              <span className="bg-[hsl(200_14%_9%/0.4)] rounded-[9999px] flex-1 h-1.5" />
                              <span className="text-[0.55rem] font-medium text-site-import-muted-foreground">Despesas</span>
                            </div>
                            <div className="items-center flex gap-2 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                              <span className="bg-[hsl(199_89%_45%)] rounded-[9999px] flex-1 h-1.5" />
                              <span className="text-[0.55rem] font-medium text-site-import-muted-foreground">Resultado</span>
                            </div>
                          </div>
                          <span className="inline-block text-[0.58rem] font-medium mt-2 text-site-import-muted-foreground">exemplo ilustrativo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-white py-16 px-0 [scroll-margin-top:6rem] md:py-24 md:px-0" id="servicos">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Como posso ajudar</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Como posso ajudar seu negócio?</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Três frentes que resolvem a maioria das necessidades de quem está começando ou organizando a presença digital.</p>
                  </div>
                  <div className="grid gap-6 mt-12 md:grid-cols-3">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card group hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.4)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[1rem] text-site-import-primary grid h-12 place-items-center w-12">
                          <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                            <path d="M10 19v-3.96 3.15" />
                            <path d="M7 19h5" />
                            <rect x="16" y="12" rx="2" {...({ width: "6", height: "10" } as any)} />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.25rem] font-bold leading-snug m-0 mt-6! text-balance text-site-import-foreground">Seu negócio na internet</h3>
                        <p className="text-[0.95rem] leading-relaxed m-0 mt-3! text-pretty text-site-import-muted-foreground">Criação de landing pages profissionais e responsivas para apresentar sua empresa, seus produtos, serviços, contatos e formas de atendimento.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-80 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card group hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.4)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(199_92%_96%)] rounded-[1rem] grid h-12 place-items-center w-12 text-[#0a4f7f]">
                          <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                            <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" />
                            <path d="M8 6v8" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.25rem] font-bold leading-snug m-0 mt-6! text-balance text-site-import-foreground">Conteúdo que faz sentido para o seu negócio</h3>
                        <p className="text-[0.95rem] leading-relaxed m-0 mt-3! text-pretty text-site-import-muted-foreground">Planejamento, criação de Instagram e postagens estratégicas pensadas para divulgar produtos, serviços, ofertas, eventos e fortalecer a presença da sua marca.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-160 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card group hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.4)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-foreground grid h-12 place-items-center w-12 bg-[#f3f5f7]">
                          <svg className="block h-6 align-middle w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                            <path d="M18 17V9" />
                            <path d="M13 17V5" />
                            <path d="M8 17v-3" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.25rem] font-bold leading-snug m-0 mt-6! text-balance text-site-import-foreground">Mais organização nas suas finanças</h3>
                        <p className="text-[0.95rem] leading-relaxed m-0 mt-3! text-pretty text-site-import-muted-foreground">Planilhas personalizadas em Google Sheets para ajudar sua empresa a controlar entradas, saídas, vendas, despesas e resultados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-[#f3f5f780] py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Sem pacote obrigatório</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Escolha apenas o que você precisa</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Você não precisa contratar tudo. Se o seu negócio precisa apenas de um site, podemos fazer apenas o site. Se precisa organizar o financeiro, cuidamos apenas da planilha. E se precisa melhorar a divulgação, temos soluções para isso também.</p>
                  </div>
                  <div className="grid gap-6 mt-12 md:grid-cols-3">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-11 place-items-center w-11 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <rect x="3" y="3" rx="1" {...({ width: "18", height: "7" } as any)} />
                            <rect x="3" y="14" rx="1" {...({ width: "9", height: "7" } as any)} />
                            <rect x="16" y="14" rx="1" {...({ width: "5", height: "7" } as any)} />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.125rem] font-bold leading-7 m-0 mt-5! text-balance text-site-import-foreground">Landing page</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Para quem precisa de um lugar profissional para apresentar o negócio.</p>
                        <ul className="space-y-2.5 list-none m-0 mt-5! p-0">
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Página única, rápida e responsiva</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Seções de serviços, produtos e contatos</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Botões de WhatsApp e redes sociais</li>
                        </ul>
                        <div className="mt-6 pt-2">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites." rel="noopener noreferrer" target="_blank">Falar sobre isso</a>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-80 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-11 place-items-center w-11 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                            <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.125rem] font-bold leading-7 m-0 mt-5! text-balance text-site-import-foreground">Marketing e conteúdo</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Para quem precisa divulgar melhor e manter o Instagram organizado.</p>
                        <ul className="space-y-2.5 list-none m-0 mt-5! p-0">
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Planejamento de conteúdo</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Postagens, reels e stories</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Calendário simples de publicações</li>
                        </ul>
                        <div className="mt-6 pt-2">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20marketing%20e%20Instagram." rel="noopener noreferrer" target="_blank">Falar sobre isso</a>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-160 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full p-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-11 place-items-center w-11 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <rect x="4" y="2" rx="2" {...({ width: "16", height: "20" } as any)} />
                            <line x1="8" x2="16" y1="6" y2="6" />
                            <line x1="16" x2="16" y1="14" y2="18" />
                            <path d="M16 10h.01" />
                            <path d="M12 10h.01" />
                            <path d="M8 10h.01" />
                            <path d="M12 14h.01" />
                            <path d="M8 14h.01" />
                            <path d="M12 18h.01" />
                            <path d="M8 18h.01" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1.125rem] font-bold leading-7 m-0 mt-5! text-balance text-site-import-foreground">Planilhas de gestão</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Para quem precisa entender entradas, saídas e resultado do mês.</p>
                        <ul className="space-y-2.5 list-none m-0 mt-5! p-0">
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Controle financeiro e fluxo de caixa</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Painel no Power BI</li>
                          <li className="items-start flex text-[0.875rem] gap-2.5 leading-5 mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Orientação inicial de uso</li>
                        </ul>
                        <div className="mt-6 pt-2">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20planilhas%20financeiras." rel="noopener noreferrer" target="_blank">Falar sobre isso</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-white py-16 px-0 [scroll-margin-top:6rem] md:py-24 md:px-0" id="pacotes">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Pacotes</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Quer resolver mais de uma necessidade? Economize com os pacotes.</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Você pode contratar um serviço por vez ou reunir tudo em um pacote pensado para o momento do seu negócio.</p>
                  </div>
                  <div className="grid gap-6 mt-12 lg:grid-cols-3 md:grid-cols-2">
                    <div className="h-full opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full overflow-hidden p-7 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="items-start flex gap-3 justify-between relative">
                          <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-site-import-muted-foreground">Social Media</span>
                        </div>
                        <h3 className="font-display text-[1.25rem] font-bold leading-7 m-0 mt-4! relative text-balance text-site-import-foreground">Pacote Digital</h3>
                        <div className="mt-4 relative">
                          <p className="font-display text-[1.875rem] font-extrabold tracking-tight leading-9 m-0 text-pretty text-site-import-foreground">R$ 1.200</p>
                        </div>
                        <ul className="space-y-2.5 flex-1 list-none m-0 mt-6! p-0 relative">
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Planejamento de Instagram</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Até 9 posts no primeiro mês</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Estratégia de conteúdo</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Criação de Templates</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Reels</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Storys</li>
                        </ul>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-6! relative text-pretty text-site-import-muted-foreground">Para negócios que precisam melhorar a presença online e começar a divulgar seus produtos ou serviços.</p>
                        <div className="mt-6 relative">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Digital%20(Social%20Media)%20de%20R%24%201.200.%20Pode%20me%20explicar%20como%20funciona%3F" rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero o Pacote Digital</a>
                        </div>
                      </article>
                    </div>
                    <div className="h-full opacity-100 transform-none delay-60 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full overflow-hidden p-7 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="items-start flex gap-3 justify-between relative">
                          <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-site-import-muted-foreground">Landing page</span>
                          <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(199_92%_96%)] border-[hsl(199_89%_45%/0.25)]! rounded-[9999px] border! inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-[#0a4f7f] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Promoção de abertura</div>
                        </div>
                        <h3 className="font-display text-[1.25rem] font-bold leading-7 m-0 mt-4! relative text-balance text-site-import-foreground">Pacote Organização</h3>
                        <div className="mt-4 relative">
                          <p className="font-display text-[1.875rem] font-extrabold tracking-tight leading-9 m-0 text-pretty text-site-import-foreground">R$ 700</p>
                        </div>
                        <ul className="space-y-2.5 flex-1 list-none m-0 mt-6! p-0 relative">
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Landing page profissional de página única</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Layout responsivo: celular, tablet e computador</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Seções para serviços, produtos e diferenciais</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Formulário de contato</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Botões de WhatsApp e redes sociais</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Textos e imagens organizados</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Otimização básica para o Google</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Orientação para publicar e editar</li>
                        </ul>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-6! relative text-pretty text-site-import-muted-foreground">Para pequenas e médias empresas e profissionais autônomos que precisam de um site organizado e pronto para receber clientes.</p>
                        <div className="mt-6 relative">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561982781806?text=Ol%C3%A1!%20Quero%20o%20Pacote%20Organiza%C3%A7%C3%A3o%20(Landing%20Page)%20de%20R%24%20700.%20Pode%20me%20explicar%20como%20funciona%3F" rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero o Pacote Organização</a>
                        </div>
                      </article>
                    </div>
                    <div className="h-full opacity-100 transform-none delay-120 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full overflow-hidden p-7 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="items-start flex gap-3 justify-between relative">
                          <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-site-import-muted-foreground">Organização financeira</span>
                        </div>
                        <h3 className="font-display text-[1.25rem] font-bold leading-7 m-0 mt-4! relative text-balance text-site-import-foreground">Pacote Planilhas Financeiras</h3>
                        <div className="mt-4 relative">
                          <p className="font-display text-[1.875rem] font-extrabold tracking-tight leading-9 m-0 text-pretty text-site-import-foreground">R$ 1.800</p>
                        </div>
                        <ul className="space-y-2.5 flex-1 list-none m-0 mt-6! p-0 relative">
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Planilha financeira personalizada</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Power BI</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Controle financeiro</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Fluxo de caixa</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Orientação inicial</li>
                        </ul>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-6! relative text-pretty text-site-import-muted-foreground">Uma solução completa para sua organização financeira em um só lugar.</p>
                        <div className="mt-6 relative">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Quero%20o%20Pacote%20de%20Planilhas%20Financeiras%20de%20R%24%201.800.%20Pode%20me%20explicar%20como%20funciona%3F" rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero o Pacote Financeiro</a>
                        </div>
                      </article>
                    </div>
                    <div className="lg:scale-[1.02] xl:scale-[1.04] h-full opacity-100 transform-none delay-180 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="shadow-elegant border-transparent! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full overflow-hidden p-7 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] text-white [animation-duration:300ms] [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                        <span className="blur-3xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] h-48 pointer-events-none absolute -right-16 -top-16 w-48 [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                        <div className="items-start flex gap-3 justify-between relative">
                          <span className="text-site-import-accent text-[0.68rem] font-semibold tracking-[0.14em] uppercase">Landing page + Social Media + Planilha</span>
                          <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-site-import-foreground border-[hsl(163_84%_44%/0.4)]! rounded-[9999px] border! text-site-import-accent inline-flex text-[0.75rem] font-semibold gap-1.5 tracking-wide leading-4 pb-1 pl-3 pr-3 pt-1 uppercase duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Mais completo</div>
                        </div>
                        <h3 className="font-display text-[1.25rem] font-bold leading-7 m-0 mt-4! relative text-balance text-white">Pacote Completo</h3>
                        <div className="mt-4 relative">
                          <p className="font-display text-site-import-accent text-[1.875rem] font-extrabold tracking-tight leading-9 m-0 text-pretty">Sob medida</p>
                          <p className="text-[0.875rem] leading-5 m-0 mt-1! text-pretty text-[#ffffffb3]">Orçamento personalizado conforme o escopo do seu negócio.</p>
                        </div>
                        <ul className="space-y-2.5 flex-1 list-none m-0 mt-6! p-0 relative">
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Landing page</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Instagram organizado</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Planejamento de conteúdo</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Até 12 posts</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Planilha financeira personalizada</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Power BI</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Controle financeiro</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Fluxo de caixa</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#ffffffe6]"><svg className="text-site-import-accent block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Orientação inicial</li>
                        </ul>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-6! relative text-pretty text-[#ffffffbf]">Uma solução completa para colocar sua presença digital e sua organização financeira em um só lugar.</p>
                        <div className="mt-6 relative">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20o%20Pacote%20Completo%20e%20gostaria%20de%20entender%20como%20funciona%20e%20receber%20um%20or%C3%A7amento." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero o Pacote Completo</a>
                        </div>
                      </article>
                    </div>
                    <div className="h-full opacity-100 transform-none delay-240 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="shadow-card hover:-translate-y-1 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col h-full overflow-hidden p-7 relative duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="items-start flex gap-3 justify-between relative">
                          <span className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-site-import-muted-foreground">Story maker em tempo real</span>
                        </div>
                        <h3 className="font-display text-[1.25rem] font-bold leading-7 m-0 mt-4! relative text-balance text-site-import-foreground">Cobertura de Eventos</h3>
                        <div className="mt-4 relative">
                          <p className="font-display text-[1.875rem] font-extrabold tracking-tight leading-9 m-0 text-pretty text-site-import-foreground">R$ 1.600</p>
                        </div>
                        <ul className="space-y-2.5 flex-1 list-none m-0 mt-6! p-0 relative">
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Cobertura com stories durante todo o evento</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Até 4 horas de evento</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Casamentos, formaturas, empresas e eventos em geral</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Story maker em tempo real</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Edição de vídeo</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Stories com a identidade do evento</li>
                          <li className="items-start flex text-[0.92rem] gap-2.5 leading-relaxed mb-[calc(0.625rem_*_var(--tw-space-y-reverse))] mt-[calc(0.625rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><svg className="text-[hsl(163_84%_44%)] block shrink-0 h-4 mt-0.5 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Material do dia entregue ao final</li>
                        </ul>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-6! relative text-pretty text-site-import-muted-foreground">Para quem quer o evento registrado e divulgado enquanto ele acontece.</p>
                        <div className="mt-6 relative">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Quero%20cobertura%20com%20stories%20para%20o%20meu%20evento.%20Pode%20me%20contar%20como%20funciona%3F" rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero cobertura para meu evento</a>
                        </div>
                      </article>
                    </div>
                  </div>
                  <p className="text-[0.875rem] leading-relaxed m-0 ml-auto! mr-auto! mt-10! max-w-2xl text-center text-pretty text-site-import-muted-foreground">Os valores apresentados são para projetos de escopo inicial. Necessidades específicas podem receber orçamento personalizado.</p>
                </div>
              </section>
              <section className="relative bg-[#f3f5f780] py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Comparação</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Serviço individual, dois serviços ou pacote completo</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Veja de forma simples o que muda em cada escolha. O pacote completo reúne tudo em um único escopo.</p>
                  </div>
                  <div className="mt-12 opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] hidden [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)] md:block">
                    <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden bg-white">
                      <table className="border-collapse text-left indent-0 w-full [border-color:inherit]!">
                        <caption className="border-0! h-px -m-px overflow-hidden p-0 absolute whitespace-nowrap w-px [clip:rect(0px,0px,0px,0px)]">Comparação entre contratar um serviço individual, dois serviços ou o pacote completo</caption>
                        <thead>
                          <tr className="border-b border-[hsl(var(--border)/0.7)]!">
                            <th className="font-display text-[0.875rem] font-semibold leading-5 pb-4 pl-6 pr-6 pt-4 bg-[#f3f5f766] text-site-import-foreground" scope="col">Serviço</th>
                            <th className="font-display text-[0.875rem] font-semibold leading-5 pb-4 pl-6 pr-6 pt-4 bg-[#f3f5f766] text-site-import-foreground" scope="col">Individual</th>
                            <th className="font-display text-[0.875rem] font-semibold leading-5 pb-4 pl-6 pr-6 pt-4 bg-[#f3f5f766] text-site-import-foreground" scope="col">2 serviços</th>
                            <th className="font-display bg-[hsl(160_55%_96%)] text-site-import-primary text-[0.875rem] font-semibold leading-5 pb-4 pl-6 pr-6 pt-4" scope="col">
                              <span className="items-center flex gap-2">Completo<div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(163_84%_44%)] border-transparent! rounded-[9999px] border! text-[hsl(200_20%_8%)] inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Mais completo</div></span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-[hsl(var(--border)/0.6)]!">
                            <th className="font-normal pb-5 pl-6 pr-6 pt-5 align-top" scope="row">
                              <span className="font-display text-[1rem] font-semibold leading-6 text-site-import-foreground">Landing pages</span>
                              <span className="block text-[0.875rem] leading-relaxed mt-1 max-w-xs text-site-import-muted-foreground">Site de página única, responsivo e com botões de contato</span>
                            </th>
                            <td className="text-[0.875rem] font-semibold leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-foreground">R$ 700</td>
                            <td className="text-[0.875rem] leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-muted-foreground">Orçamento sob medida</td>
                            <td className="bg-[hsl(160_55%_96%/0.6)] pb-5 pl-6 pr-6 pt-5 align-top">
                              <span className="items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-2 leading-5"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Incluído</span>
                            </td>
                          </tr>
                          <tr className="border-b border-[hsl(var(--border)/0.6)]!">
                            <th className="font-normal pb-5 pl-6 pr-6 pt-5 align-top" scope="row">
                              <span className="font-display text-[1rem] font-semibold leading-6 text-site-import-foreground">Marketing / Social Media</span>
                              <span className="block text-[0.875rem] leading-relaxed mt-1 max-w-xs text-site-import-muted-foreground">Planejamento de conteúdo, posts, reels e stories</span>
                            </th>
                            <td className="text-[0.875rem] font-semibold leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-foreground">R$ 1.200</td>
                            <td className="text-[0.875rem] leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-muted-foreground">Orçamento sob medida</td>
                            <td className="bg-[hsl(160_55%_96%/0.6)] pb-5 pl-6 pr-6 pt-5 align-top">
                              <span className="items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-2 leading-5"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Incluído</span>
                            </td>
                          </tr>
                          <tr className="border-b border-[hsl(var(--border)/0.6)]! border-0!">
                            <th className="font-normal pb-5 pl-6 pr-6 pt-5 align-top" scope="row">
                              <span className="font-display text-[1rem] font-semibold leading-6 text-site-import-foreground">Planilha Financeira</span>
                              <span className="block text-[0.875rem] leading-relaxed mt-1 max-w-xs text-site-import-muted-foreground">Controle financeiro, fluxo de caixa e painel no Power BI</span>
                            </th>
                            <td className="text-[0.875rem] font-semibold leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-foreground">R$ 1.800</td>
                            <td className="text-[0.875rem] leading-5 pb-5 pl-6 pr-6 pt-5 align-top text-site-import-muted-foreground">Orçamento sob medida</td>
                            <td className="bg-[hsl(160_55%_96%/0.6)] pb-5 pl-6 pr-6 pt-5 align-top">
                              <span className="items-center text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-2 leading-5"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg>Incluído</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="gap-4 mt-10 grid md:hidden">
                    <div className="opacity-0 delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] transform-[matrix(1,_0,_0,_1,_0,_16)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)] md:transform-none">
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-5 bg-white">
                        <p className="font-display text-[1rem] font-semibold leading-6 m-0 text-pretty text-site-import-foreground">Landing pages</p>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-1! text-pretty text-site-import-muted-foreground">Site de página única, responsivo e com botões de contato</p>
                        <dl className="space-y-2 text-[0.875rem] leading-5 m-0 mt-4!">
                          <div className="items-center flex gap-3 justify-between">
                            <dt className="text-site-import-muted-foreground">Individual</dt>
                            <dd className="font-semibold m-0 text-site-import-foreground">R$ 700</dd>
                          </div>
                          <div className="items-center flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                            <dt className="text-site-import-muted-foreground">2 serviços</dt>
                            <dd className="m-0 text-[#14181acc]">Orçamento sob medida</dd>
                          </div>
                          <div className="items-center bg-[hsl(160_55%_96%)] rounded-[0.75rem] flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] pb-2 pl-3 pr-3 pt-2">
                            <dt className="text-site-import-primary font-medium">Completo</dt>
                            <dd className="text-site-import-primary font-semibold m-0">Incluído</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <div className="opacity-0 delay-50 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] transform-[matrix(1,_0,_0,_1,_0,_16)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)] md:transform-none">
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-5 bg-white">
                        <p className="font-display text-[1rem] font-semibold leading-6 m-0 text-pretty text-site-import-foreground">Marketing / Social Media</p>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-1! text-pretty text-site-import-muted-foreground">Planejamento de conteúdo, posts, reels e stories</p>
                        <dl className="space-y-2 text-[0.875rem] leading-5 m-0 mt-4!">
                          <div className="items-center flex gap-3 justify-between">
                            <dt className="text-site-import-muted-foreground">Individual</dt>
                            <dd className="font-semibold m-0 text-site-import-foreground">R$ 1.200</dd>
                          </div>
                          <div className="items-center flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                            <dt className="text-site-import-muted-foreground">2 serviços</dt>
                            <dd className="m-0 text-[#14181acc]">Orçamento sob medida</dd>
                          </div>
                          <div className="items-center bg-[hsl(160_55%_96%)] rounded-[0.75rem] flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] pb-2 pl-3 pr-3 pt-2">
                            <dt className="text-site-import-primary font-medium">Completo</dt>
                            <dd className="text-site-import-primary font-semibold m-0">Incluído</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <div className="opacity-0 delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] transform-[matrix(1,_0,_0,_1,_0,_16)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)] md:transform-none">
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-5 bg-white">
                        <p className="font-display text-[1rem] font-semibold leading-6 m-0 text-pretty text-site-import-foreground">Planilha Financeira</p>
                        <p className="text-[0.875rem] leading-relaxed m-0 mt-1! text-pretty text-site-import-muted-foreground">Controle financeiro, fluxo de caixa e painel no Power BI</p>
                        <dl className="space-y-2 text-[0.875rem] leading-5 m-0 mt-4!">
                          <div className="items-center flex gap-3 justify-between">
                            <dt className="text-site-import-muted-foreground">Individual</dt>
                            <dd className="font-semibold m-0 text-site-import-foreground">R$ 1.800</dd>
                          </div>
                          <div className="items-center flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                            <dt className="text-site-import-muted-foreground">2 serviços</dt>
                            <dd className="m-0 text-[#14181acc]">Orçamento sob medida</dd>
                          </div>
                          <div className="items-center bg-[hsl(160_55%_96%)] rounded-[0.75rem] flex gap-3 justify-between mb-[calc(0.5rem_*_var(--tw-space-y-reverse))] mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))] pb-2 pl-3 pr-3 pt-2">
                            <dt className="text-site-import-primary font-medium">Completo</dt>
                            <dd className="text-site-import-primary font-semibold m-0">Incluído</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex flex-col gap-5 mt-10 text-center">
                    <p className="text-[1rem] leading-relaxed m-0 max-w-2xl text-pretty text-[#14181ad9]">Não sabe qual escolher? Fale comigo e eu ajudo a identificar o pacote mais adequado para o seu negócio.</p>
                    <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20N%C3%A3o%20sei%20qual%20pacote%20escolher%20e%20gostaria%20de%20ajuda%20para%20identificar%20a%20melhor%20op%C3%A7%C3%A3o%20para%20o%20meu%20neg%C3%B3cio." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Me ajudar a escolher</a>
                    <p className="text-[0.875rem] leading-relaxed m-0 max-w-2xl text-pretty text-site-import-muted-foreground">Valores iniciais para escopos definidos. Projetos personalizados podem ter orçamento diferente.</p>
                  </div>
                </div>
              </section>
              <section className="relative bg-white py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Social Media</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Seu Instagram não precisa postar por postar.</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">A ideia é criar conteúdo que tenha um motivo: apresentar um produto, divulgar uma oferta, explicar um serviço, mostrar bastidores, gerar interesse ou lembrar o cliente de que sua empresa existe.</p>
                  </div>
                  <div className="grid gap-6 mt-12 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-brand-soft via-background to-accentBlue-soft inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="text-site-import-primary block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Apresentar produto</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Novidades da semana</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Loja de roupas</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Coleção nova apresentada com peças selecionadas para o dia a dia.</p>
                        </div>
                      </article>
                    </div>
                    <div className="opacity-100 transform-none delay-50 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-accentBlue-soft via-background to-brand-soft inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="block h-5 align-middle w-5 text-[#0a4f7f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                                <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                                <path d="m2.1 21.8 6.4-6.3" />
                                <path d="m19 5-7 7" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Divulgar oferta</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Menu do dia</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Restaurante</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Prato principal em destaque, com horário de atendimento e pedido fácil.</p>
                        </div>
                      </article>
                    </div>
                    <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-brand/30 via-brand-soft to-accentBlue-soft inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="text-site-import-primary block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <circle cx="6" cy="6" r="3" />
                                <path d="M8.12 8.12 12 12" />
                                <path d="M20 4 8.12 15.88" />
                                <circle cx="6" cy="18" r="3" />
                                <path d="M14.8 14.8 20 20" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Explicar serviço</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Antes e depois</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Salão de beleza</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">O resultado de um atendimento com o serviço explicado em poucas linhas.</p>
                        </div>
                      </article>
                    </div>
                    <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-brand-soft via-background to-accentBlue-soft inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="text-site-import-primary block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <path d="M16 10a4 4 0 0 1-8 0" />
                                <path d="M3.103 6.034h17.794" />
                                <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Gerar interesse</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Produto em uso</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Loja de produtos</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">O produto no contexto de quem compra, com valor e forma de encomenda.</p>
                        </div>
                      </article>
                    </div>
                    <div className="opacity-100 transform-none delay-200 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-ink via-ink-soft to-brand/45 inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.5)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="text-site-import-foreground block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 0 0-16 0" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Mostrar bastidores</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Bastidores do trabalho</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Profissional autônomo</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Como o serviço é feito, passo a passo, com linguagem simples.</p>
                        </div>
                      </article>
                    </div>
                    <div className="opacity-100 transform-none delay-250 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <article className="group shadow-card hover:-translate-y-1.5 hover:shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] h-full overflow-hidden duration-500 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:500ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <div className="h-52 overflow-hidden relative">
                          <div className="from-brand/30 via-brand-soft to-accentBlue-soft inset-0 absolute [background-image:linear-gradient(to_bottom_right,var(--tw-gradient-stops))]" />
                          <div className="from-transparent via-white/45 to-transparent bottom-0 left-1/4 absolute top-0 w-1/3 [background-image:linear-gradient(to_right,var(--tw-gradient-stops))]" aria-hidden="true" />
                          <div className="inset-0 absolute [animation:3.6s_ease-in-out_0s_infinite_normal_none_running_sheen] [background-image:linear-gradient(100deg,_transparent_26%,_hsl(0_0%_100%_/_0.55)_50%,_transparent_74%)]" aria-hidden="true" />
                          <div className="blur-2xl bg-[hsl(163_84%_44%/0.25)] rounded-[9999px] -bottom-10 h-32 absolute -right-6 w-32 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                          <div className="flex flex-col h-full justify-between p-5 relative">
                            <span className="shadow-sm backdrop-blur items-center border-[hsl(var(--border)/0.6)]! rounded-[9999px] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex h-11 justify-center w-11 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <svg className="text-site-import-primary block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                <path d="M5.8 11.3 2 22l10.7-3.79" />
                                <path d="M4 3h.01" />
                                <path d="M22 8h.01" />
                                <path d="M15 2h.01" />
                                <path d="M22 20h.01" />
                                <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                                <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
                                <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
                                <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                              </svg>
                            </span>
                            <div className="backdrop-blur border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-[#ffffffe6] [backdrop-filter:var(--tw-backdrop-blur)]">
                              <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Lembrar que existe</p>
                              <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Cobertura em tempo real</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="items-center flex gap-2">
                            <span className="rounded-[9999px] h-6 w-6 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]" />
                            <span className="font-display text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Evento</span>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-2! text-pretty text-site-import-muted-foreground">Stories durante o evento, com a identidade de quem organiza.</p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="items-center flex flex-col gap-4 mt-10 text-center">
                    <p className="text-[0.875rem] leading-relaxed m-0 max-w-2xl text-pretty text-site-import-muted-foreground">Os exemplos acima são ilustrativos, criados para mostrar o estilo de conteúdo. Nenhuma marca real foi utilizada.</p>
                    <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Quero%20conte%C3%BAdo%20com%20estrat%C3%A9gia%20para%20o%20Instagram%20do%20meu%20neg%C3%B3cio." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero conteúdo assim para o meu negócio</a>
                  </div>
                </div>
              </section>
              <section className="relative py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                      <div className="items-start flex flex-col gap-4 opacity-100 text-left transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Planilhas financeiras</div>
                        <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Organização financeira sem complicação.</h2>
                        <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Você não precisa ser especialista em finanças para entender o dinheiro do seu negócio. Criamos planilhas simples, organizadas e adaptadas à realidade da sua empresa.</p>
                      </div>
                      <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <ul className="space-y-3 list-none m-0 mt-8! p-0">
                          <li className="items-start flex text-[0.95rem] gap-3 leading-relaxed text-[#14181ad9]"><span className="bg-[hsl(160_55%_96%)] rounded-[9999px] text-site-import-primary grid shrink-0 h-5 mt-0.5 place-items-center w-5"><svg className="block h-3 align-middle w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg></span>Planilha personalizada para a realidade da sua empresa</li>
                          <li className="items-start flex text-[0.95rem] gap-3 leading-relaxed mb-[calc(0.75rem_*_var(--tw-space-y-reverse))] mt-[calc(0.75rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><span className="bg-[hsl(160_55%_96%)] rounded-[9999px] text-site-import-primary grid shrink-0 h-5 mt-0.5 place-items-center w-5"><svg className="block h-3 align-middle w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg></span>Controle de entradas, saídas, vendas e despesas</li>
                          <li className="items-start flex text-[0.95rem] gap-3 leading-relaxed mb-[calc(0.75rem_*_var(--tw-space-y-reverse))] mt-[calc(0.75rem_*_calc(1_-_var(--tw-space-y-reverse)))] text-[#14181ad9]"><span className="bg-[hsl(160_55%_96%)] rounded-[9999px] text-site-import-primary grid shrink-0 h-5 mt-0.5 place-items-center w-5"><svg className="block h-3 align-middle w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M20 6 9 17l-5-5" /></svg></span>Fluxo de caixa e painel visual no Power BI</li>
                        </ul>
                      </div>
                      <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="items-center flex flex-wrap gap-3 mt-8">
                          <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20planilhas%20financeiras." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero organizar minhas finanças</a>
                          <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.875rem] font-semibold gap-1.5 leading-5 pb-2 pl-4 pr-4 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M8 13h2" /><path d="M14 13h2" /><path d="M8 17h2" /><path d="M14 17h2" /></svg>Google Sheets</div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="relative">
                        <div className="blur-3xl bg-[hsl(163_84%_44%/0.1)] rounded-[2.5rem] -inset-4 pointer-events-none absolute -z-10 [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                        <div className="shadow-elegant border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] bg-white p-5 md:p-6">
                          <div className="items-center border-b border-[hsl(var(--border)/0.6)]! flex flex-wrap gap-3 justify-between pb-4">
                            <div className="items-center flex gap-3">
                              <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-10 place-items-center w-10">
                                <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                  <path d="M8 13h2" />
                                  <path d="M14 13h2" />
                                  <path d="M8 17h2" />
                                  <path d="M14 17h2" />
                                </svg>
                              </span>
                              <div>
                                <p className="font-display text-[0.875rem] font-bold leading-5 m-0 text-pretty text-site-import-foreground">Controle financeiro</p>
                                <p className="text-[0.75rem] leading-4 m-0 text-pretty text-site-import-muted-foreground">Planilha + painel — exemplo ilustrativo</p>
                              </div>
                            </div>
                            <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Google Sheets</div>
                          </div>
                          <div className="grid gap-3 mt-5 sm:grid-cols-3">
                            <div className="bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.3)]! rounded-[1rem] border! p-4">
                              <div className="items-center flex gap-2 justify-between">
                                <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-site-import-muted-foreground">ENTRADAS</span>
                                <svg className="text-site-import-primary block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M17 7 7 17" />
                                  <path d="M17 17H7V7" />
                                </svg>
                              </div>
                              <p className="font-display font-extrabold leading-7 m-0 mt-2! text-pretty text-site-import-foreground text-[18px] md:text-[20px] sm:leading-7">R$ 12.450</p>
                              <p className="text-[0.75rem] leading-snug m-0 mt-0.5! text-pretty text-site-import-muted-foreground">Vendas e recebimentos</p>
                            </div>
                            <div className="border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! p-4 bg-[#f3f5f7b3]">
                              <div className="items-center flex gap-2 justify-between">
                                <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-site-import-muted-foreground">DESPESAS</span>
                                <svg className="text-site-import-foreground block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M7 7h10v10" />
                                  <path d="M7 17 17 7" />
                                </svg>
                              </div>
                              <p className="font-display font-extrabold leading-7 m-0 mt-2! text-pretty text-site-import-foreground text-[18px] md:text-[20px] sm:leading-7">R$ 7.280</p>
                              <p className="text-[0.75rem] leading-snug m-0 mt-0.5! text-pretty text-site-import-muted-foreground">Custos e contas do período</p>
                            </div>
                            <div className="bg-[hsl(199_92%_96%)] border-[hsl(199_89%_45%/0.25)]! rounded-[1rem] border! p-4">
                              <div className="items-center flex gap-2 justify-between">
                                <span className="text-[0.6rem] font-bold tracking-[0.14em] uppercase text-site-import-muted-foreground">RESULTADO</span>
                                <svg className="block h-4 align-middle w-4 text-[#0a4f7f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M16 7h6v6" />
                                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                                </svg>
                              </div>
                              <p className="font-display font-extrabold leading-7 m-0 mt-2! text-pretty text-site-import-foreground text-[18px] md:text-[20px] sm:leading-7">R$ 5.170</p>
                              <p className="text-[0.75rem] leading-snug m-0 mt-0.5! text-pretty text-site-import-muted-foreground">O que sobrou no período</p>
                            </div>
                          </div>
                          <div className="border-[hsl(var(--border)/0.6)]! rounded-[1rem] border! mt-5 p-4 bg-[#f3f5f766]">
                            <p className="text-[0.62rem] font-semibold tracking-[0.14em] m-0 uppercase text-pretty text-site-import-muted-foreground">Fluxo de caixa por semana</p>
                            <div className="items-end flex gap-2 h-24 mt-4">
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[42%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[58%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[36%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[70%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-1/2 [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[66%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                              <span className="from-brand/25 to-brand rounded-tl-[1rem] rounded-tr-[1rem] flex-1 h-[54%] [background-image:linear-gradient(to_top,var(--tw-gradient-stops))]" />
                            </div>
                          </div>
                          <div className="space-y-3 mt-5">
                            <div className="space-y-1.5">
                              <div className="items-center flex text-[0.75rem] justify-between leading-4 text-site-import-muted-foreground">
                                <span>Aluguel e estrutura</span>
                                <span>categoria</span>
                              </div>
                              <div className="rounded-[9999px] h-2 mb-[calc(0.375rem_*_var(--tw-space-y-reverse))] mt-[calc(0.375rem_*_calc(1_-_var(--tw-space-y-reverse)))] overflow-hidden w-full bg-[#f3f5f7]">
                                <span className="bg-[hsl(163_84%_44%/0.7)] rounded-[9999px] block h-full w-[72%]" />
                              </div>
                            </div>
                            <div className="space-y-1.5 mb-[calc(0.75rem_*_var(--tw-space-y-reverse))] mt-[calc(0.75rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                              <div className="items-center flex text-[0.75rem] justify-between leading-4 text-site-import-muted-foreground">
                                <span>Fornecedores</span>
                                <span>categoria</span>
                              </div>
                              <div className="rounded-[9999px] h-2 mb-[calc(0.375rem_*_var(--tw-space-y-reverse))] mt-[calc(0.375rem_*_calc(1_-_var(--tw-space-y-reverse)))] overflow-hidden w-full bg-[#f3f5f7]">
                                <span className="bg-[hsl(163_84%_44%/0.7)] rounded-[9999px] block h-full w-[58%]" />
                              </div>
                            </div>
                            <div className="space-y-1.5 mb-[calc(0.75rem_*_var(--tw-space-y-reverse))] mt-[calc(0.75rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                              <div className="items-center flex text-[0.75rem] justify-between leading-4 text-site-import-muted-foreground">
                                <span>Equipe</span>
                                <span>categoria</span>
                              </div>
                              <div className="rounded-[9999px] h-2 mb-[calc(0.375rem_*_var(--tw-space-y-reverse))] mt-[calc(0.375rem_*_calc(1_-_var(--tw-space-y-reverse)))] overflow-hidden w-full bg-[#f3f5f7]">
                                <span className="bg-[hsl(163_84%_44%/0.7)] rounded-[9999px] block h-full w-[46%]" />
                              </div>
                            </div>
                            <div className="space-y-1.5 mb-[calc(0.75rem_*_var(--tw-space-y-reverse))] mt-[calc(0.75rem_*_calc(1_-_var(--tw-space-y-reverse)))]">
                              <div className="items-center flex text-[0.75rem] justify-between leading-4 text-site-import-muted-foreground">
                                <span>Marketing</span>
                                <span>categoria</span>
                              </div>
                              <div className="rounded-[9999px] h-2 mb-[calc(0.375rem_*_var(--tw-space-y-reverse))] mt-[calc(0.375rem_*_calc(1_-_var(--tw-space-y-reverse)))] overflow-hidden w-full bg-[#f3f5f7]">
                                <span className="bg-[hsl(163_84%_44%/0.7)] rounded-[9999px] block h-full w-[28%]" />
                              </div>
                            </div>
                          </div>
                          <p className="text-[0.75rem] leading-relaxed m-0 mt-5! text-pretty text-site-import-muted-foreground">Os valores acima são fictícios e servem apenas para mostrar o formato da planilha.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-[#f3f5f780] py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Para quem</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Para quem são esses serviços?</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Se você tem um negócio e sente que poderia apresentar, divulgar ou organizar melhor sua empresa, provavelmente podemos ajudar.</p>
                  </div>
                  <div className="grid gap-3 grid-cols-2 mt-12 lg:grid-cols-5 sm:grid-cols-3">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                            <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                            <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Lojas</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-30 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                            <path d="M10 14h4" />
                            <path d="M10 18h4" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Pequenas empresas</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-60 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Prestadores de serviço</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-90 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Profissionais autônomos</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-120 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
                            <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
                            <path d="m2.1 21.8 6.4-6.3" />
                            <path d="m19 5-7 7" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Restaurantes</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <circle cx="6" cy="6" r="3" />
                            <path d="M8.12 8.12 12 12" />
                            <path d="M20 4 8.12 15.88" />
                            <circle cx="6" cy="18" r="3" />
                            <path d="M14.8 14.8 20 20" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Salões e barbearias</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-180 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Comércios locais</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-210 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M5.8 11.3 2 22l10.7-3.79" />
                            <path d="M4 3h.01" />
                            <path d="M22 8h.01" />
                            <path d="M15 2h.01" />
                            <path d="M22 20h.01" />
                            <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                            <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
                            <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
                            <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Eventos (casamentos, aniversários, empresas)</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-240 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                            <path d="M22 10v6" />
                            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Infoprodutores</span>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-270 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-sm hover:-translate-y-1 hover:shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-4 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="bg-[hsl(160_55%_96%)] rounded-[0.75rem] text-site-import-primary grid h-9 place-items-center w-9">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" />
                            <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" />
                            <path d="M5 21h14" />
                          </svg>
                        </span>
                        <span className="text-[0.875rem] font-medium leading-snug text-site-import-foreground">Pequenos empreendedores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-white py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Diferenciais</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Por que trabalhar comigo?</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">O objetivo é simples: deixar claro o que você contrata, por quanto e com quem falar.</p>
                  </div>
                  <div className="grid gap-4 mt-12 lg:grid-cols-4 sm:grid-cols-2">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Atendimento próximo</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Você fala direto com quem coloca a mão no projeto.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-40 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Preços acessíveis</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Valores pensados para quem está começando ou quer investir com calma.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-80 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <line x1="21" x2="14" y1="4" y2="4" />
                            <line x1="10" x2="3" y1="4" y2="4" />
                            <line x1="21" x2="12" y1="12" y2="12" />
                            <line x1="8" x2="3" y1="12" y2="12" />
                            <line x1="21" x2="16" y1="20" y2="20" />
                            <line x1="12" x2="3" y1="20" y2="20" />
                            <line x1="14" x2="14" y1="2" y2="6" />
                            <line x1="8" x2="8" y1="10" y2="14" />
                            <line x1="16" x2="16" y1="18" y2="22" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Soluções personalizadas</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Cada entrega é ajustada ao que o seu negócio realmente precisa.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-120 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Comunicação simples</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Sem termos técnicos: você entende o que está sendo feito.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-160 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Sem contratos desnecessários</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Escopo e valor combinados com clareza antes de começar.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-200 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                            <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                            <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Projetos pensados para pequenos negócios</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Entregas enxutas, focadas no que faz diferença agora.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-240 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Clareza sobre o contratado</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Você recebe a lista do que está incluso em cada serviço.</p>
                      </div>
                    </div>
                    <div className="opacity-100 transform-none delay-280 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="shadow-card hover:-translate-y-1 border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full p-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white [animation-duration:300ms] hover:border-[hsl(163_84%_44%/0.35)]! hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]">
                        <span className="rounded-[1rem] text-site-import-accent grid h-10 place-items-center w-10 [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
                          <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                            <circle cx="12" cy="12" r="10" />
                            <path d="m4.93 4.93 4.24 4.24" />
                            <path d="m14.83 9.17 4.24-4.24" />
                            <path d="m14.83 14.83 4.24 4.24" />
                            <path d="m9.17 14.83-4.24 4.24" />
                            <circle cx="12" cy="12" r="4" />
                          </svg>
                        </span>
                        <h3 className="font-display text-[1rem] font-bold leading-snug m-0 text-balance text-site-import-foreground">Suporte durante a implementação</h3>
                        <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Acompanhamento enquanto tudo é colocado no ar.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative py-16 px-0 [scroll-margin-top:6rem] md:py-24 md:px-0" id="processo">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Processo</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Como funciona?</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Seis passos simples, do primeiro contato até tudo funcionando.</p>
                  </div>
                  <ol className="grid gap-5 list-none m-0 mt-12! p-0 lg:grid-cols-3 md:grid-cols-2">
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">01</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">1</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Você conta o que precisa</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Pelo WhatsApp, do jeito que for mais fácil para você.</p>
                        </div>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-50 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">02</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">2</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Entendemos o seu negócio</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Perguntas rápidas sobre o que você vende e para quem.</p>
                        </div>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">03</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">3</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Definimos o serviço ou pacote</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Você recebe o escopo e o valor antes de qualquer coisa começar.</p>
                        </div>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">04</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">4</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Desenvolvemos a solução</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Criamos a página, o conteúdo ou a planilha combinada.</p>
                        </div>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-200 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">05</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">5</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Você revisa e aprovamos juntos</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Ajustes combinados até você se sentir seguro com o resultado.</p>
                        </div>
                      </div>
                    </li>
                    <li className="h-full">
                      <div className="h-full opacity-100 transform-none delay-250 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                        <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-3 h-full overflow-hidden p-6 relative bg-white">
                          <span className="font-display text-[2.25rem] font-extrabold leading-10 absolute right-4 top-3 text-[#f3f5f7]" aria-hidden="true">06</span>
                          <span className="font-display rounded-[9999px] text-[hsl(200_20%_8%)] grid text-[0.875rem] font-bold h-9 leading-5 place-items-center w-9 [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))]">6</span>
                          <h3 className="font-display text-[1rem] font-bold leading-snug m-0 relative text-balance text-site-import-foreground">Colocamos tudo para funcionar</h3>
                          <p className="text-[0.875rem] leading-relaxed m-0 text-pretty text-site-import-muted-foreground">Entrega pronta para usar, com orientação de uso.</p>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="opacity-100 transform-none delay-150 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="items-center flex flex-col gap-4 mt-10 text-center">
                      <p className="text-[1rem] leading-relaxed m-0 max-w-2xl text-pretty text-[#14181ad9]">O primeiro passo é só uma conversa: você explica o que precisa e eu digo se faz sentido, quanto custa e como seria.</p>
                      <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-site-import-foreground text-white [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Começar pelo passo 1</a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-dark-surface overflow-hidden relative py-16 px-0 md:py-24 md:px-0">
                <div className="inset-0 opacity-60 pointer-events-none absolute [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:46px_46px]" aria-hidden="true" />
                <div className="ml-auto mr-auto pl-5 pr-5 relative w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-6 ml-auto mr-auto max-w-3xl opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <h2 className="font-display font-extrabold m-0 text-balance text-white text-[28px] tracking-[-0.7px] leading-[33.6px] md:text-[40px] md:tracking-[-1px] md:leading-10">Talvez você não precise de uma grande agência.</h2>
                    <p className="m-0 max-w-2xl text-pretty text-[#ffffffbf] text-[16px] leading-[26px] md:text-[18px] md:leading-7">Talvez precise apenas de alguém que entenda o que seu negócio precisa e coloque isso para funcionar.</p>
                    <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 mt-2 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Quero conversar sobre meu negócio</a>
                    <p className="text-[0.875rem] leading-5 m-0 text-pretty text-[#ffffff99]">Sem compromisso: a conversa serve para entender o que faz sentido para você.</p>
                  </div>
                </div>
              </section>
              <section className="relative bg-white py-16 px-0 [scroll-margin-top:6rem] md:py-24 md:px-0" id="faq">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Dúvidas frequentes</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Perguntas frequentes</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Respostas diretas sobre como funciona contratar um serviço ou pacote.</p>
                  </div>
                  <div className="ml-auto mr-auto mt-10 max-w-3xl opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="flex flex-col gap-3">
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_4_" aria-expanded={openFaq === "radix-_r_4_"} onClick={() => setOpenFaq(openFaq === "radix-_r_4_" ? null : "radix-_r_4_")} data-state={openFaq === "radix-_r_4_" ? "open" : "closed"} id="radix-_r_3_">Posso contratar apenas um serviço?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_4_" hidden={openFaq !== "radix-_r_4_"} role="region" aria-labelledby="radix-_r_3_">Sim. Você pode contratar site, marketing/Instagram ou planilha separadamente.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_6_" aria-expanded={openFaq === "radix-_r_6_"} onClick={() => setOpenFaq(openFaq === "radix-_r_6_" ? null : "radix-_r_6_")} data-state={openFaq === "radix-_r_6_" ? "open" : "closed"} id="radix-_r_5_">Posso personalizar um pacote?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_6_" hidden={openFaq !== "radix-_r_6_"} role="region" aria-labelledby="radix-_r_5_">Sim. Os pacotes servem como ponto de partida. Podemos ajustar o serviço de acordo com a necessidade do seu negócio.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_8_" aria-expanded={openFaq === "radix-_r_8_"} onClick={() => setOpenFaq(openFaq === "radix-_r_8_" ? null : "radix-_r_8_")} data-state={openFaq === "radix-_r_8_" ? "open" : "closed"} id="radix-_r_7_">O site funciona no celular?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_8_" hidden={openFaq !== "radix-_r_8_"} role="region" aria-labelledby="radix-_r_7_">Sim. Os sites são desenvolvidos pensando em computador, tablet e celular.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_a_" aria-expanded={openFaq === "radix-_r_a_"} onClick={() => setOpenFaq(openFaq === "radix-_r_a_" ? null : "radix-_r_a_")} data-state={openFaq === "radix-_r_a_" ? "open" : "closed"} id="radix-_r_9_">Vocês fazem loja virtual?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_a_" hidden={openFaq !== "radix-_r_a_"} role="region" aria-labelledby="radix-_r_9_">Podemos avaliar projetos de loja virtual separadamente. Como são projetos mais complexos, o valor depende das funcionalidades necessárias.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_c_" aria-expanded={openFaq === "radix-_r_c_"} onClick={() => setOpenFaq(openFaq === "radix-_r_c_" ? null : "radix-_r_c_")} data-state={openFaq === "radix-_r_c_" ? "open" : "closed"} id="radix-_r_b_">Vocês fazem tráfego pago?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_c_" hidden={openFaq !== "radix-_r_c_"} role="region" aria-labelledby="radix-_r_b_">Pode ser contratado separadamente. O investimento em anúncios não está incluído nos valores dos pacotes.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_e_" aria-expanded={openFaq === "radix-_r_e_"} onClick={() => setOpenFaq(openFaq === "radix-_r_e_" ? null : "radix-_r_e_")} data-state={openFaq === "radix-_r_e_" ? "open" : "closed"} id="radix-_r_d_">Posso usar Google Sheets?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_e_" hidden={openFaq !== "radix-_r_e_"} role="region" aria-labelledby="radix-_r_d_">Sim. A planilha pode ser desenvolvida em Google Sheets, conforme sua preferência.</div>
                      </div>
                      <div className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] overflow-hidden pl-5 pr-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-white" data-state="closed">
                        <h3 className="flex m-0 text-balance [font-size:inherit] [font-weight:inherit]" data-state="closed">
                          <button className="group font-display items-center bg-none cursor-pointer flex flex-1 font-semibold gap-4 justify-between leading-6 m-0 p-0 pb-5! pt-5! text-left normal-case duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent text-site-import-foreground text-[16px] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] hover:text-site-import-primary md:text-[16.8px]" type="button" aria-controls="radix-_r_g_" aria-expanded={openFaq === "radix-_r_g_"} onClick={() => setOpenFaq(openFaq === "radix-_r_g_" ? null : "radix-_r_g_")} data-state={openFaq === "radix-_r_g_" ? "open" : "closed"} id="radix-_r_f_">Como funciona o pagamento?<span className="group-hover:border-brand/40 group-hover:text-brand-strong group-data-[state=open]:rotate-45 border-[hsl(var(--border)/0.7)]! rounded-[9999px] border! grid shrink-0 h-8 place-items-center duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] w-8 bg-[#f3f5f7] text-site-import-muted-foreground [animation-duration:300ms]"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M5 12h14" /><path d="M12 5v14" /></svg></span></button>
                        </h3>
                        <div className="import-faq-answer text-sm" id="radix-_r_g_" hidden={openFaq !== "radix-_r_g_"} role="region" aria-labelledby="radix-_r_f_">Definimos a forma de pagamento antes do início do projeto, de acordo com o serviço contratado.</div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="items-center flex flex-col gap-4 mt-8 text-center">
                      <p className="text-[1rem] leading-relaxed m-0 text-pretty text-[#14181ad9]">Ficou com alguma dúvida que não está aqui? Me chama no WhatsApp.</p>
                      <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Tirar uma dúvida</a>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative bg-[#f3f5f780] py-16 px-0 [scroll-margin-top:6rem] md:py-24 md:px-0" id="contato">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="items-center flex flex-col gap-4 opacity-100 text-center transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Me conte um pouco mais de você</div>
                    <h2 className="font-bold m-0 max-w-3xl text-balance text-site-import-foreground text-[28px] tracking-[-0.7px] leading-[33.04px] md:text-[40px] md:tracking-[-1px] md:leading-10">Me conte um pouco mais de você</h2>
                    <p className="m-0 max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[16.8px] md:leading-[27.3px]">Preencha os campos abaixo. A mensagem vai sendo montada ao lado e, ao clicar no botão, o WhatsApp abre com o texto pronto para enviar.</p>
                  </div>
                  <div className="grid mt-12 gap-x-8 gap-8 gap-y-8 lg:grid-cols-[1.05fr_0.95fr] xl:gap-x-12 xl:gap-12 xl:gap-y-12">
                    <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <form className="shadow-card border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] bg-white p-6 md:p-8" onSubmit={submitContact} onChange={(event) => { const input = event.target; if (input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) setFields((current) => ({ ...current, [input.name]: input.value })); }}>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-name">Nome</label>
                            <input className="shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex h-11 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! p-0 pb-2! pl-4! pr-4! pt-2! duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground text-[16px] leading-6 [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[14px] md:leading-5 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" required id="lead-name" autoComplete="name" placeholder="Como posso te chamar?" aria-invalid="false" defaultValue="" name="name" />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-email">E-mail<span className="font-normal ml-1.5 text-site-import-muted-foreground">(opcional)</span></label>
                            <input className="shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex h-11 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! p-0 pb-2! pl-4! pr-4! pt-2! duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground text-[16px] leading-6 [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[14px] md:leading-5 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" id="lead-email" autoComplete="email" placeholder="seuemail@exemplo.com" aria-invalid="false" type="email" defaultValue="" name="email" />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-phone">Telefone</label>
                            <input className="shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex h-11 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! p-0 pb-2! pl-4! pr-4! pt-2! duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground text-[16px] leading-6 [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[14px] md:leading-5 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" required id="lead-phone" autoComplete="tel" placeholder="(61) 90000-0000" aria-invalid="false" aria-describedby="lead-phone-hint" type="tel" defaultValue="" name="phone" />
                            <p className="text-[0.75rem] leading-4 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! text-pretty text-site-import-muted-foreground" id="lead-phone-hint">Com DDD, para eu conseguir te responder.</p>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-budget">Quanto você pode investir<span className="font-normal ml-1.5 text-site-import-muted-foreground">(opcional)</span></label>
                            <input className="shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex h-11 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! p-0 pb-2! pl-4! pr-4! pt-2! duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground text-[16px] leading-6 [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 md:text-[14px] md:leading-5 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" id="lead-budget" placeholder="Ex.: R$ 700" defaultValue="" name="budget" />
                            <p className="text-[0.75rem] leading-4 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! text-pretty text-site-import-muted-foreground" id="lead-budget-hint">Qualquer valor, para eu sugerir o serviço que caiba no seu momento.</p>
                          </div>
                        </div>
                        <fieldset className="m-0 mt-6! p-0">
                          <legend className="text-[0.875rem] font-semibold leading-5 p-0 text-site-import-foreground" id="lead-project-type-label">Tipo de projeto</legend>
                          <div className="grid gap-3 mt-3 [scroll-margin-top:6rem] sm:grid-cols-2" id="lead-projectType" role="radiogroup" tabIndex={-1} aria-labelledby="lead-project-type-label">
                            <button className="items-start bg-none border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! cursor-pointer flex text-[100%] gap-3 m-0 p-4 text-left normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-[hsl(160_55%_96%/0.4)] hover:border-[hsl(163_84%_44%/0.4)]!" type="button" role="radio" aria-checked={projectType === "Empresa"} onClick={() => setProjectType("Empresa")}>
                              <span className="rounded-[0.75rem] grid shrink-0 h-9 place-items-center w-9 bg-[#f3f5f7] text-site-import-muted-foreground">
                                <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                                  <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                                  <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
                                </svg>
                              </span>
                              <span>
                                <span className="font-display block text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Empresa</span>
                                <span className="block text-[0.75rem] leading-snug text-site-import-muted-foreground">Loja, comércio ou prestação de serviço</span>
                              </span>
                            </button>
                            <button className="items-start bg-none border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! cursor-pointer flex text-[100%] gap-3 m-0 p-4 text-left normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-[hsl(160_55%_96%/0.4)] hover:border-[hsl(163_84%_44%/0.4)]!" type="button" role="radio" aria-checked={projectType === "Evento de empresa"} onClick={() => setProjectType("Evento de empresa")}>
                              <span className="rounded-[0.75rem] grid shrink-0 h-9 place-items-center w-9 bg-[#f3f5f7] text-site-import-muted-foreground">
                                <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                  <rect x="2" y="6" rx="2" {...({ width: "20", height: "14" } as any)} />
                                </svg>
                              </span>
                              <span>
                                <span className="font-display block text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Evento de empresa</span>
                                <span className="block text-[0.75rem] leading-snug text-site-import-muted-foreground">Cobertura de evento corporativo</span>
                              </span>
                            </button>
                            <button className="items-start bg-none border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! cursor-pointer flex text-[100%] gap-3 m-0 p-4 text-left normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-[hsl(160_55%_96%/0.4)] hover:border-[hsl(163_84%_44%/0.4)]!" type="button" role="radio" aria-checked={projectType === "Casamento"} onClick={() => setProjectType("Casamento")}>
                              <span className="rounded-[0.75rem] grid shrink-0 h-9 place-items-center w-9 bg-[#f3f5f7] text-site-import-muted-foreground">
                                <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                                </svg>
                              </span>
                              <span>
                                <span className="font-display block text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Casamento</span>
                                <span className="block text-[0.75rem] leading-snug text-site-import-muted-foreground">Cobertura e divulgação do evento</span>
                              </span>
                            </button>
                            <button className="items-start bg-none border-[hsl(var(--border)/0.7)]! rounded-[1rem] border! cursor-pointer flex text-[100%] gap-3 m-0 p-4 text-left normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] bg-white text-site-import-foreground [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] [line-height:inherit] hover:bg-[hsl(160_55%_96%/0.4)] hover:border-[hsl(163_84%_44%/0.4)]!" type="button" role="radio" aria-checked={projectType === "Outros"} onClick={() => setProjectType("Outros")}>
                              <span className="rounded-[0.75rem] grid shrink-0 h-9 place-items-center w-9 bg-[#f3f5f7] text-site-import-muted-foreground">
                                <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                  <circle cx="12" cy="8" r="5" />
                                  <path d="M20 21a8 8 0 0 0-16 0" />
                                </svg>
                              </span>
                              <span>
                                <span className="font-display block text-[0.875rem] font-semibold leading-5 text-site-import-foreground">Outros</span>
                                <span className="block text-[0.75rem] leading-snug text-site-import-muted-foreground">Aniversários, formaturas, projetos pessoais</span>
                              </span>
                            </button>
                          </div>
                        </fieldset>
                        <div className="grid gap-5 mt-6">
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-business">Sobre o seu negócio<span className="font-normal ml-1.5 text-site-import-muted-foreground">(opcional)</span></label>
                            <textarea className="shadow-sm focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex text-[0.875rem] leading-5 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! min-h-[104px] p-0 pb-3! pl-4! pr-4! pt-3! resize-y duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" id="lead-business" name="business" placeholder="Ex.: tenho uma loja de roupas em Taguatinga e vendo também pelo Instagram." />
                            <p className="text-[0.75rem] leading-4 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! text-pretty text-site-import-muted-foreground" id="lead-business-hint">O que você vende, onde atende e desde quando existe.</p>
                          </div>
                          <div className="space-y-2">
                            <label className="block text-[0.875rem] font-semibold leading-5 text-site-import-foreground" htmlFor="lead-needs">Do que você precisa</label>
                            <textarea className="shadow-sm focus-visible:ring-2 focus-visible:ring-brand/25 border-[hsl(var(--input))]! rounded-[0.75rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex text-[0.875rem] leading-5 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! min-h-[104px] p-0 pb-3! pl-4! pr-4! pt-3! resize-y duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-full bg-white text-site-import-foreground [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [font-weight:inherit] [letter-spacing:inherit] disabled:cursor-not-allowed! disabled:opacity-50 focus-visible:border-[hsl(163_84%_44%)]! focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 placeholder:text-[hsl(var(--muted-foreground)/0.7)] placeholder:opacity-100" required id="lead-needs" name="needs" placeholder="Ex.: preciso de uma landing page e de ajuda para organizar o Instagram." aria-invalid="false" aria-describedby="lead-needs-hint" />
                            <p className="text-[0.75rem] leading-4 m-0 mb-[calc(0.5rem_*_var(--tw-space-y-reverse))]! mt-[calc(0.5rem_*_calc(1_-_var(--tw-space-y-reverse)))]! text-pretty text-site-import-muted-foreground" id="lead-needs-hint">Site, conteúdo para o Instagram, planilha financeira ou mais de um serviço.</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 mt-7">
                          <button className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-card hover:-translate-y-0.5 hover:shadow-elegant items-center bg-none rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] cursor-pointer inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 m-0 p-0 pl-8! pr-8! normal-case duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap w-full bg-site-import-foreground text-white [animation-duration:300ms] [appearance:button] [font-family:inherit] [font-feature-settings:inherit] [font-variation-settings:inherit] [letter-spacing:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(var(--primary)/0.9)] hover:shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" type="submit"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" /><path d="m21.854 2.147-10.94 10.939" /></svg>Enviar pelo WhatsApp</button>
                          <p className="text-[0.75rem] leading-relaxed m-0 text-center text-pretty text-site-import-muted-foreground">Nada fica salvo neste site: ao clicar, a mensagem abre no WhatsApp (61) 99231-6112 para você confirmar o envio.</p>
                        </div>
                      </form>
                    </div>
                    <div className="opacity-100 transform-none delay-100 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                      <div className="static lg:top-28 xl:sticky">
                        <div className="ml-auto mr-auto max-w-sm w-full">
                          <div className="shadow-elegant bg-site-import-foreground border-[hsl(var(--border)/0.7)]! rounded-[2.25rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] p-2">
                            <div className="rounded-[1.9rem] flex flex-col h-[30rem] overflow-hidden bg-[#f3f5f799]">
                              <div className="items-center bg-site-import-primary flex gap-3 pb-3 pl-4 pr-4 pt-3 text-white">
                                <span className="rounded-[9999px] grid h-9 place-items-center w-9 bg-[#ffffff26]">
                                  <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                                  </svg>
                                </span>
                                <div className="min-w-0">
                                  <p className="font-display text-[0.875rem] font-semibold leading-5 m-0 overflow-hidden text-ellipsis text-pretty whitespace-nowrap">TRIA+ Soluções Digitais</p>
                                  <p className="text-[0.68rem] m-0 text-pretty text-[#ffffffbf]">(61) 99231-6112 • online</p>
                                </div>
                              </div>
                              <div className="space-y-2.5 flex-1 overflow-y-auto pb-4 pl-3 pr-3 pt-4">
                                <div className="shadow-sm rounded-bl-[calc(1rem_-_4px)]! rounded-[1rem] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[0.82rem] leading-relaxed max-w-[85%] pb-2.5 pl-3.5 pr-3.5 pt-2.5 bg-white text-[#14181ad9]">Olá! Preencha os campos ao lado que eu monto a mensagem para você.</div>{entries.map(([label, value]) => <div className="import-message" key={label}><div className="import-message-label">{label}</div>{value}<div className="text-right text-site-import-muted-foreground text-xs">agora ✓✓</div></div>)}
                              </div>
                              <div className="items-center border-[hsl(var(--border)/0.6)]! border-t flex gap-2 pb-2.5 pl-3 pr-3 pt-2.5 bg-[#ffffffcc]">
                                <span className="rounded-[9999px] flex-1 text-[0.7rem] pb-2 pl-3 pr-3 pt-2 bg-[#f3f5f7] text-site-import-muted-foreground">mensagem pronta para enviar</span>
                                <span className="rounded-[9999px] grid h-9 place-items-center duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-9 bg-[#f3f5f7] text-site-import-muted-foreground">
                                  <svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                                    <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-[0.875rem] leading-relaxed m-0 mt-4! text-center text-pretty text-site-import-muted-foreground">A mensagem é montada conforme você preenche. Ao clicar, o WhatsApp abre com o texto pronto — você só confirma o envio.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="relative py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="opacity-0 translate-y-4 delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="shadow-elegant items-center border-[hsl(var(--border)/0.7)]! rounded-[1.5rem] border! shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] flex flex-col gap-6 ml-auto mr-auto max-w-3xl overflow-hidden relative text-center bg-white p-8 md:p-12">
                      <div className="blur-3xl rounded-[9999px] h-56 pointer-events-none absolute -right-20 -top-24 w-56 [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
                      <h2 className="font-display font-extrabold m-0 relative text-balance text-site-import-foreground text-[25.6px] tracking-[-0.64px] leading-[30.72px] md:text-[37.6px] md:tracking-[-0.94px] md:leading-9">Vamos começar pelo que seu negócio realmente precisa?</h2>
                      <p className="text-[1rem] leading-relaxed m-0 max-w-2xl relative text-pretty text-site-import-muted-foreground">Conte um pouco sobre sua empresa, o que você já possui e o que gostaria de melhorar. A partir disso, podemos conversar sobre a melhor opção.</p>
                      <div className="flex flex-wrap gap-3 justify-center relative">
                        <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a>
                        <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="#contato">Solicitar orçamento</a>
                      </div>
                      <p className="text-[0.875rem] leading-5 m-0 relative text-pretty text-site-import-muted-foreground">Preços visíveis, escopo combinado antes de começar e sem contratos desnecessários.</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <footer className="text-white [background-image:linear-gradient(160deg,_hsl(200_16%_13%),_hsl(200_22%_6%))]">
              <div className="ml-auto mr-auto w-full py-14 px-5 md:py-16 md:px-5 xl:max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr] md:grid-cols-2">
                  <div className="items-start flex flex-col gap-4">
                    <span className="font-display items-baseline inline-flex text-[1.5rem] font-extrabold tracking-tight leading-8 text-white">TRIA<span className="text-site-import-accent">+</span></span>
                    <p className="font-display text-[1.125rem] font-semibold leading-7 m-0 text-pretty">TRIA+ Soluções Digitais</p>
                    <p className="text-[0.875rem] leading-relaxed m-0 max-w-sm text-pretty text-[#ffffffb3]">Simples para negócios que querem crescer.</p>
                  </div>
                  <nav className="flex flex-col gap-3" aria-label="Links do rodapé">
                    <h2 className="font-display text-[0.875rem] font-semibold tracking-[0.16em] leading-5 m-0 uppercase text-balance text-[#ffffff99]">Navegação</h2>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#inicio">Início</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#servicos">Serviços</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#pacotes">Pacotes</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#processo">Como funciona</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#faq">FAQ</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="#contato">Contato</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/portfolio">Portfólio</a>
                  </nav>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display text-[0.875rem] font-semibold tracking-[0.16em] leading-5 m-0 uppercase text-balance text-[#ffffff99]">Contato</h2>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>WhatsApp (61) 99231-6112</a>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="mailto:grupotriasolucoes@gmail.com"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" rx="2" {...({ width: "20", height: "16" } as any)} /></svg>grupotriasolucoes@gmail.com</a>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="https://www.instagram.com/triadigital" rel="noopener noreferrer" target="_blank"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><rect x="2" y="2" rx="5" ry="5" {...({ width: "20", height: "20" } as any)} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>@triadigital</a>
                    <p className="text-[0.875rem] leading-5 m-0 mt-1! text-pretty text-[#ffffff99]">Atendimento online para todo o Brasil</p>
                  </div>
                </div>
                <div className="border-[hsl(var(--primary-foreground)/0.1)]! border-t flex text-[0.875rem] gap-3 leading-5 mt-12 pt-6 text-[#ffffff99] flex-col justify-normal [align-items:normal] [place-content:normal] [place-items:normal] md:items-center md:flex-row md:justify-between md:[place-content:normal_space-between] md:[place-items:center_normal]">
                  <p className="m-0 text-pretty">© 2026 TRIA+ Soluções Digitais. Todos os direitos reservados.</p>
                  <p className="m-0 text-pretty">Landing pages • Marketing e Instagram • Planilhas financeiras</p>
                </div>
              </div>
            </footer>
            <a className="group shadow-glow hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 items-center rounded-[9999px] bottom-5 shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex gap-2 pb-4 pl-4 pr-4 pt-4 fixed right-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] z-40 [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] md:bottom-7 md:right-7" aria-label="Falar pelo WhatsApp (61) 99231-6112" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank">
              <span className="blur-md bg-[hsl(163_84%_44%/0.5)] rounded-[9999px] inset-0 absolute -z-10 [animation:4s_ease-in-out_0s_infinite_normal_none_running_glow-pulse] [filter:var(--tw-blur)_var(--tw-brightness)]" aria-hidden="true" />
              <svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}>
                <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
              </svg>
              <span className="group-hover:max-w-[9rem] group-hover:opacity-100 text-[0.875rem] font-semibold leading-5 max-w-0 opacity-0 overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] hidden [animation-duration:300ms] xl:block">Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
        {/* IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! */}
      </div>
    </>
  </>);
}
