import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import galleryCSS from "../styles/pages/portfolio-gallery.css?inline";
import * as Dialog from "@radix-ui/react-dialog";
import repairCSS from "../styles/import-repairs.css?inline";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/portfolio.css?inline";
import { listPortfolioPhotos } from "@/lib/portfolio.functions";
import { portfolioCategories } from "@/lib/portfolio-categories";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Nosso Portfólio por Serviço | TRIA+ Soluções Digitais" },
    { name: "description", content: "Trabalhos reais da equipe TRIA em planilhas financeiras, consultoria empresarial, Social Media e eventos ao vivo." },
    { property: "og:title", content: "Nosso Portfólio por Serviço | TRIA+ Soluções Digitais" },
    { property: "og:description", content: "Conheça os trabalhos da TRIA organizados por serviço: planilhas financeiras, consultorias empresariais, Social Media e eventos ao vivo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  loader: () => listPortfolioPhotos(),
  component: Index,
});

function Index() {
  const photos = Route.useLoaderData();
  const portfolioServices = portfolioCategories.map(c => ({ ...c, photos: photos.filter(p => p.category === c.id).map(p => ({ ...p, asset: { url: p.image_url } })) }));
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ service: number; index: number } | null>(null);
  const financialPhotos = lightbox ? portfolioServices[lightbox.service].photos : [];
  const selectedPhoto = lightbox?.index ?? null;
  const setSelectedPhoto = (fn: number | null | ((c: number | null) => number | null)) => setLightbox(l => {
    const next = typeof fn === "function" ? fn(l?.index ?? null) : fn;
    return next === null || !l ? null : { ...l, index: next };
  });
  const activePhoto = selectedPhoto === null ? undefined : financialPhotos[selectedPhoto];
  return (<><style>{repairCSS}</style><style>{galleryCSS}</style><style>{capturedCSS.replace(/(<\/|<)(s)(tyle)/gi, (_, prefix, letter, rest) => prefix + (letter === "s" ? "\\73 " : "\\53 ") + rest)}</style>
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
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#inicio">Início</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#servicos">Serviços</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#pacotes">Pacotes</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#processo">Como funciona</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#faq">FAQ</a>
                  <a className="rounded-[9999px] text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] text-site-import-muted-foreground [text-decoration:inherit] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--foreground))]" href="/#contato">Contato</a>
                  <a className="bg-[hsl(160_55%_96%)] rounded-[9999px] text-site-import-primary text-[0.875rem] font-medium leading-5 pb-2 pl-3.5 pr-3.5 pt-2 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] [text-decoration:inherit]" href="/portfolio">Portfólio</a>
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
                  </Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="import-menu-overlay" /><Dialog.Content className="import-menu" aria-describedby={undefined}><Dialog.Title className="import-menu-title">Navegação</Dialog.Title><nav aria-label="Navegação mobile"><a href="/#inicio" onClick={() => setMenuOpen(false)}>Início</a><a href="/#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="/#pacotes" onClick={() => setMenuOpen(false)}>Pacotes</a><a href="/#processo" onClick={() => setMenuOpen(false)}>Como funciona</a><a href="/#faq" onClick={() => setMenuOpen(false)}>FAQ</a><a href="/#contato" onClick={() => setMenuOpen(false)}>Contato</a><a href="/portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a></nav><div className="import-menu-contact"><a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] text-[0.875rem] font-semibold gap-2 h-10 justify-center leading-5 pb-2 pl-5 pr-5 pt-2 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap flex [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)] w-full" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a><p>(61) 99231-6112 • Atendimento online para todo o Brasil</p></div><Dialog.Close className="import-menu-close" aria-label="Fechar menu"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <section className="overflow-hidden relative pt-12 pr-0 pb-14 pl-0 md:pt-16 md:pr-0 md:pb-20 md:pl-0">
                <div className="bg-hero-glow inset-0 pointer-events-none absolute" aria-hidden="true" />
                <div className="h-64 left-0 opacity-50 pointer-events-none absolute right-0 top-0 [background-image:linear-gradient(hsl(var(--border)/0.7)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.7)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(rgb(0,0,0)_55%,transparent_100%)]" aria-hidden="true" />
                <div className="ml-auto mr-auto pl-5 pr-5 relative w-full xl:max-w-7xl">
                  <div className="max-w-3xl opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="focus:ring-2 focus:ring-ring focus:ring-offset-2 items-center bg-[hsl(160_55%_96%)] border-[hsl(163_84%_44%/0.25)]! rounded-[9999px] border! text-site-import-primary inline-flex text-[0.75rem] font-semibold gap-1.5 leading-4 pb-1 pl-3 pr-3 pt-1 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] focus:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus:outline-transparent focus:outline-solid focus:outline-2 focus:outline-offset-2">Portfólio</div>
                    <h1 className="font-display font-extrabold m-0 mt-5! text-balance text-site-import-foreground text-[30.4px] tracking-[-0.76px] leading-[34.96px] md:text-[44px] md:tracking-[-1.1px] md:leading-10">Nosso Portfólio</h1>
                    <p className="m-0 mt-5! max-w-2xl text-pretty text-site-import-muted-foreground text-[16px] leading-[26px] md:text-[18px] md:leading-7">Trabalhos reais realizados pela equipe TRIA, com soluções pensadas para a realidade de cada negócio.</p>
                    <div className="flex flex-wrap gap-3 mt-8">
                      <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20o%20portf%C3%B3lio%20de%20voc%C3%AAs%20e%20gostaria%20de%20ver%20mais%20exemplos%20de%20trabalhos." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Ver exemplos pelo WhatsApp</a>
                      <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 hover:-translate-y-0.5 items-center border-[hsl(var(--input))]! rounded-[9999px] border! inline-flex text-[0.95rem] font-semibold gap-2 h-12 justify-center pl-7 pr-7 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap bg-transparent text-site-import-foreground [animation-duration:300ms] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-[hsl(160_55%_96%)] hover:border-[hsl(163_84%_44%/0.5)]! hover:text-site-import-foreground hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))]" href="/#servicos">Ver os serviços</a>
                    </div>
                  </div>
                </div>
              </section>
              <nav className="portfolio-service-nav" aria-label="Serviços do portfólio">
                {portfolioServices.map(service => <a key={service.id} href={`#${service.id}`}>{service.title}<ArrowRight size={16} aria-hidden="true" /></a>)}
              </nav>
              {portfolioServices.map((service, serviceIndex) => (
                <section key={service.id} id={service.id} className="portfolio-service-section" aria-labelledby={`${service.id}-title`}>
                  <div className="portfolio-container">
                    <div className="portfolio-service-heading">
                      <span className="portfolio-service-number">0{serviceIndex + 1}</span>
                      <div><h2 id={`${service.id}-title`}>{service.title}</h2><p>{service.description}</p></div>
                    </div>
                    {service.photos.length > 0 ? (
                      <div className="portfolio-photo-grid">
                        {service.photos.map((photo, index) => (
                          <figure className="portfolio-photo" key={photo.title}>
                            <Button variant="ghost" className="portfolio-photo-open" onClick={() => setSelectedPhoto(index)} aria-label={`Ampliar foto: ${photo.title}`}>
                              <img src={photo.asset.url} alt={`${photo.title} — ${photo.description}`} loading="lazy" decoding="async" />
                              <span className="portfolio-expand"><Expand aria-hidden="true" /></span>
                            </Button>
                            <figcaption><h3>{photo.title}</h3><p>{photo.description}</p></figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : <p className="portfolio-pending">Novos registros em breve.</p>}
                  </div>
                </section>
              ))}
              <Dialog.Root open={selectedPhoto !== null} onOpenChange={open => { if (!open) setSelectedPhoto(null); }}>
                <Dialog.Portal><Dialog.Overlay className="import-menu-overlay" />
                  <Dialog.Content className="portfolio-lightbox" onKeyDown={event => {
                    if (event.key === "ArrowRight") setSelectedPhoto(current => current === null ? null : (current + 1) % financialPhotos.length);
                    if (event.key === "ArrowLeft") setSelectedPhoto(current => current === null ? null : (current + financialPhotos.length - 1) % financialPhotos.length);
                  }}>
                    <div className="portfolio-lightbox-heading"><Dialog.Title>{activePhoto?.title}</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Fechar foto"><X /></Button></Dialog.Close></div>
                    <Dialog.Description>{activePhoto?.description}</Dialog.Description>
                    {activePhoto && <img src={activePhoto.asset.url} alt={`${activePhoto.title} — ${activePhoto.description}`} />}
                    <div className="portfolio-lightbox-controls">
                      <Button variant="outline" size="icon" aria-label="Foto anterior" onClick={() => setSelectedPhoto(current => current === null ? null : (current + financialPhotos.length - 1) % financialPhotos.length)}><ArrowLeft /></Button>
                      <span aria-live="polite">{selectedPhoto === null ? 0 : selectedPhoto + 1} / {financialPhotos.length}</span>
                      <Button variant="outline" size="icon" aria-label="Próxima foto" onClick={() => setSelectedPhoto(current => current === null ? null : (current + 1) % financialPhotos.length)}><ArrowRight /></Button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
              <section className="relative py-16 px-0 md:py-24 md:px-0">
                <div className="ml-auto mr-auto pl-5 pr-5 w-full xl:max-w-7xl">
                  <div className="opacity-100 transform-none delay-0 duration-700 transition-all ease-[cubic-bezier(0,0,0.2,1)] [animation-duration:700ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]">
                    <div className="items-center flex flex-col gap-5 ml-auto mr-auto max-w-3xl text-center">
                      <h2 className="font-display font-extrabold m-0 text-balance text-site-import-foreground text-[24px] tracking-[-0.6px] leading-[30px] md:text-[30px] md:tracking-[-0.75px] md:leading-9">Quer ver como isso ficaria no seu negócio?</h2>
                      <p className="text-[1rem] leading-relaxed m-0 max-w-2xl text-pretty text-site-import-muted-foreground">Conte o que você faz hoje e o que gostaria de melhorar. Eu mostro exemplos do que faz sentido para o seu caso.</p>
                      <a className="ring-offset-background focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] items-center rounded-[9999px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-[hsl(200_20%_8%)] inline-flex text-[1rem] font-semibold gap-2 h-14 justify-center leading-6 pl-8 pr-8 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap [animation-duration:300ms] [background-image:linear-gradient(135deg,_hsl(163_90%_55%),_hsl(163_84%_44%)_48%,_hsl(165_87%_28%))] [text-decoration:inherit] disabled:opacity-50 disabled:pointer-events-none focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] hover:[filter:var(--tw-blur)_var(--tw-brightness)]" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block shrink-0 h-4 pointer-events-none align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>Falar pelo WhatsApp</a>
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
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#inicio">Início</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#servicos">Serviços</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#pacotes">Pacotes</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#processo">Como funciona</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#faq">FAQ</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/#contato">Contato</a>
                    <a className="text-[0.875rem] leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="/portfolio">Portfólio</a>
                  </nav>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-display text-[0.875rem] font-semibold tracking-[0.16em] leading-5 m-0 uppercase text-balance text-[#ffffff99]">Contato</h2>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="https://wa.me/5561992316112?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20voc%C3%AAs%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20digitais." rel="noopener noreferrer" target="_blank"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" /></svg>WhatsApp (61) 99231-6112</a>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="mailto:grupotriasolucoes@gmail.com"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" rx="2" {...({ width: "20", height: "16" } as any)} /></svg>grupotriasolucoes@gmail.com</a>
                    <a className="items-center flex text-[0.875rem] gap-2 leading-5 duration-150 transition-colors ease-[cubic-bezier(0.4,0,0.2,1)] w-fit text-[#ffffffcc] [text-decoration:inherit] hover:text-site-import-accent" href="https://www.instagram.com/triadigitalsolucoes" rel="noopener noreferrer" target="_blank"><svg className="block h-4 align-middle w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24" } as any)}><rect x="2" y="2" rx="5" ry="5" {...({ width: "20", height: "20" } as any)} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>@triadigitalsolucoes</a>
                    <p className="text-[0.875rem] leading-5 m-0 mt-1! text-pretty text-[#ffffff99]">Atendimento online para todo o Brasil</p>
                  </div>
                </div>
                <div className="border-[hsl(var(--primary-foreground)/0.1)]! border-t flex text-[0.875rem] gap-3 leading-5 mt-12 pt-6 text-[#ffffff99] flex-col justify-normal [align-items:normal] [place-content:normal] [place-items:normal] md:items-center md:flex-row md:justify-between md:[place-content:normal_space-between] md:[place-items:center_normal]">
                  <p className="m-0 text-pretty">© 2026 TRIA+ Soluções Digitais. Todos os direitos reservados.</p>
                  <p className="m-0 text-pretty">Landing pages • Marketing e Instagram • Planilhas financeiras</p>
                </div>
              </div>
            </footer>
            <a className="group shadow-card hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 items-center rounded-[9999px] bottom-[84px] shadow-[var(--tw-ring-offset-shadow,0_0_#0000),var(--tw-ring-shadow,0_0_#0000),var(--tw-shadow)] text-white inline-flex gap-2 pb-4 pl-4 pr-4 pt-4 fixed right-5 duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] z-40 [animation-duration:300ms] import-instagram-gradient [text-decoration:inherit] focus-visible:shadow-[var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0_0_#0000)] focus-visible:outline-transparent focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 hover:transform-[translate(var(--tw-translate-x),var(--tw-translate-y))_rotate(var(--tw-rotate))_skewX(0)_skewY(0)_scaleX(var(--tw-scale-x))_scaleY(var(--tw-scale-y))] md:bottom-[92px] xl:bottom-[132px] md:right-7" aria-label="Instagram @triadigitalsolucoes" href="https://www.instagram.com/triadigitalsolucoes" rel="noopener noreferrer" target="_blank"><svg className="block h-5 align-middle w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg><span className="group-hover:max-w-[9rem] group-hover:opacity-100 text-[0.875rem] font-semibold leading-5 max-w-0 opacity-0 overflow-hidden duration-300 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] hidden [animation-duration:300ms] xl:block">Instagram</span></a>
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
