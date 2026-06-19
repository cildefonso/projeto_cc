# projeto-1

Aplicação web construída com Next.js 16, React 19, TypeScript e TailwindCSS 4.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19 + TailwindCSS 4 |
| Componentes | shadcn/ui |
| Formulários | React Hook Form + Zod |
| Linguagem | TypeScript 5 (strict) |

## Pré-requisitos

- Node.js 20+
- npm 10+

## Setup

```bash
cp .env.example .env.local   # configurar variáveis de ambiente
npm install
npm run dev                   # http://localhost:3000
```

## Scripts

```bash
npm run dev          # servidor de desenvolvimento
npm run build        # build de produção
npm run start        # servir build de produção
npm run lint         # eslint
npx tsc --noEmit     # verificação de tipos
```

## Estrutura

```
src/
  app/              # rotas (App Router)
  components/
    ui/             # primitivos shadcn/ui
  actions/          # Server Actions
  lib/              # clients externos e utilitários
  types/            # tipos globais e schemas Zod
middleware.ts
```

## Arquitetura

**Server Components por padrão.** Adicionar `'use client'` apenas quando necessário (hooks, eventos, browser APIs).

**Acesso a dados:** exclusivamente via Server Actions em `src/actions/`. Client Components não acessam banco diretamente.

**Estilos:** TailwindCSS 4 com configuração CSS-first — tokens customizados ficam no bloco `@theme` em `src/app/globals.css`.

**Variáveis de ambiente:** `NEXT_PUBLIC_*` apenas para valores seguros no cliente. Segredos (DB, API keys) somente em Server Actions ou Route Handlers.
