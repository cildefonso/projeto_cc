const services = [
  {
    title: "Banho & Tosa",
    description:
      "Cuidado estético com produtos premium, realizado por groommers certificados com carinho e atenção.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Consulta Veterinária",
    description:
      "Equipe veterinária especializada para checkups, vacinas, exames e atendimento de urgência.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Hotel Pet",
    description:
      "Acomodação segura, aconchegante e supervisionada para quando você precisar viajar tranquilo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Loja de Produtos",
    description:
      "Rações, brinquedos, acessórios e suplementos das melhores marcas para todas as espécies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
];

const differentials = [
  {
    title: "Equipe certificada",
    description:
      "Veterinários e groommers com formação específica e anos de experiência no cuidado animal.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Ambiente seguro",
    description:
      "Espaço higienizado, climatizado e projetado para o conforto e segurança de todos os pets.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Agendamento online",
    description:
      "Marque seu horário a qualquer hora pelo site ou WhatsApp, sem espera, sem complicação.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white">
      {/* ── HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            Pet<span className="text-amber-400">Care</span>
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#diferenciais" className="hover:text-white transition-colors">
              Por que nós
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center h-9 px-5 rounded-full bg-amber-400 text-zinc-950 text-sm font-medium hover:bg-amber-300 transition-colors"
          >
            Agendar
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-16 text-center overflow-hidden">
          {/* gradient glow */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(251,191,36,0.12), transparent)",
            }}
          />

          <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-400 text-xs font-medium tracking-widest uppercase">
              Petshop & Veterinária
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
              O melhor cuidado para{" "}
              <span className="text-amber-400">o seu melhor amigo.</span>
            </h1>

            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
              Serviços veterinários, estética animal e produtos premium — tudo em
              um só lugar, com profissionais que amam o que fazem.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="#contato"
                className="inline-flex items-center h-12 px-8 rounded-full bg-amber-400 text-zinc-950 font-medium hover:bg-amber-300 transition-colors"
              >
                Agendar agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center h-12 px-8 rounded-full border border-zinc-700 text-zinc-300 font-medium hover:border-zinc-500 hover:text-white transition-colors"
              >
                Ver serviços
              </a>
            </div>
          </div>

          {/* scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-600 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </div>
        </section>

        {/* ── SERVIÇOS ── */}
        <section id="servicos" className="py-24 px-6 bg-zinc-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col gap-3">
              <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                Serviços
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Tudo o que o seu pet precisa
              </h2>
              <p className="max-w-lg text-zinc-400 leading-relaxed">
                Cuidamos de cada detalhe para que o seu animal de estimação viva
                com saúde, conforto e alegria.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="text-amber-400">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DIFERENCIAIS ── */}
        <section id="diferenciais" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-14 flex flex-col gap-3">
              <span className="text-amber-400 text-sm font-medium tracking-widest uppercase">
                Por que nós
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Compromisso com quem você ama
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {differentials.map((item) => (
                <div key={item.title} className="flex flex-col gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA / CONTATO ── */}
        <section id="contato" className="py-24 px-6 bg-zinc-900/40">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 px-8 py-16 sm:px-16 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* amber glow */}
              <div
                aria-hidden
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(251,191,36,0.08), transparent 70%)",
                }}
              />

              <div className="flex flex-col gap-4 max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Pronto para agendar?
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Entre em contato pelo WhatsApp ou visite-nos. Respondemos
                  rapidamente e temos horários flexíveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mt-2 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-amber-400 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.99-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-1.09a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    (11) 99999-9999
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-amber-400 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Rua das Flores, 123 — São Paulo, SP
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="https://wa.me/5511999999999"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-amber-400 text-zinc-950 font-medium hover:bg-amber-300 transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="mailto:contato@petcare.com.br"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc-700 text-zinc-300 font-medium hover:border-zinc-500 hover:text-white transition-colors"
                >
                  E-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <span>
            Pet<span className="text-amber-400">Care</span> — Petshop &
            Veterinária
          </span>
          <span>© {new Date().getFullYear()} Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}
