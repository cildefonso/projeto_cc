# PetCare — Petshop & Veterinária

Landing page institucional para petshop e clínica veterinária. Apresenta os serviços, diferenciais e canais de contato do negócio, com design dark-first e foco em conversão via WhatsApp e agendamento.

## Visão geral

Página única com as seguintes seções:

- **Hero** — headline de impacto com CTAs para agendamento
- **Serviços** — Banho & Tosa, Consulta Veterinária, Hotel Pet, Loja de Produtos
- **Diferenciais** — equipe certificada, ambiente seguro, agendamento online
- **Contato** — CTA com link direto para WhatsApp e e-mail

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.2 |
| UI | React | 19.2 |
| Linguagem | TypeScript (strict) | 5 |
| Estilos | TailwindCSS (CSS-first) | 4 |
| Componentes | shadcn/ui | — |
| Formulários | React Hook Form + Zod | — |
| Fonte | Geist Sans / Geist Mono | — |

## Pré-requisitos

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

```bash
npm run dev          # servidor de desenvolvimento
npm run build        # build de produção
npm run start        # servir build de produção
npm run lint         # eslint (flat config v9)
npx tsc --noEmit     # verificação de tipos sem emitir arquivos
```

## Estrutura

```
src/
  app/
    globals.css     # tokens de design (@theme) + reset Tailwind
    layout.tsx      # root layout — metadata, fontes, html lang="pt-BR"
    page.tsx        # home page (Server Component)
  components/
    ui/             # primitivos shadcn/ui
  actions/          # Server Actions (única camada que toca o DB)
  lib/              # clients externos e utilitários puros
  types/            # tipos globais e schemas Zod compartilhados
middleware.ts       # proteção de rotas privadas
```

## Design

- **Dark-first** — fundo `zinc-950`, acentos `amber-400`
- **Tipografia** — Geist Sans com escala editorial; sem tamanhos arbitrários
- **Tokens** — definidos no bloco `@theme` em `src/app/globals.css`; nenhum valor hardcoded fora do tema
- **Responsividade** — mobile-first; testado em 375 px e 1440 px

## Arquitetura

**Server Components por padrão.** `'use client'` apenas quando há hooks de estado, event handlers ou browser APIs.

**Acesso a dados** exclusivamente via Server Actions em `src/actions/`. Client Components nunca acessam banco diretamente.

**Variáveis de ambiente:** `NEXT_PUBLIC_*` apenas para valores seguros no cliente. Credenciais e chaves de API somente em Server Actions ou Route Handlers.

## Segurança

- Todo input externo validado com Zod antes de qualquer processamento
- Headers de segurança configurados em `next.config.ts` (CSP, X-Frame-Options, etc.)
- Row Level Security ativo em todas as tabelas Supabase com dados de usuário
- Sessão derivada sempre do servidor — nunca do cliente
