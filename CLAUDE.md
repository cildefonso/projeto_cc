# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Rules

@.claude/rules/architecture.md
@.claude/rules/security.md
@.claude/rules/typescript.md
@.claude/rules/design.md
@.claude/rules/testing.md

## Stack

Next.js 16.2 (App Router) · React 19 · TypeScript 5 (strict) · TailwindCSS 4 · shadcn/ui · React Hook Form + Zod · Server Components first

> **Next.js 16 breaking changes:** APIs, conventions and file structure differ from earlier versions. Before writing any Next.js code, check `node_modules/next/dist/docs/` for the relevant guide and heed deprecation notices.

## Commands

```bash
npm run dev          # dev server on :3000
npm run build        # production build
npm run start        # serve production build
npm run lint         # eslint (flat config, v9)
npx tsc --noEmit     # type-check without emitting
```

## Architecture

```
src/
  app/              # routes — grouped by (grupo)/ convention
  components/
    ui/             # shadcn primitives (reutilizáveis)
    <feature>/      # componentes de feature
  actions/          # Server Actions — única camada que toca o DB
  lib/              # clients (supabase, stripe), helpers, config
  types/            # tipos globais e schemas Zod compartilhados
middleware.ts       # na raiz, fora de src/app/
```

**Rendering model:** Server Components por padrão. Adicionar `'use client'` apenas quando necessário (hooks, eventos, browser APIs). Nunca acessar banco diretamente em Client Components — usar Server Actions em `actions/`.

**Mutations:** `revalidatePath()` e `revalidateTag()` só funcionam em Server Actions ou Route Handlers, nunca em Client Components.

## TailwindCSS v4

Não há `tailwind.config.ts`. Configuração é CSS-first:
- Design tokens e custom values ficam no bloco `@theme` em `src/app/globals.css`
- Nunca usar CSS inline nem styled-components — apenas classes Tailwind
- A importação é `@import "tailwindcss"` (não as três diretivas do v3)

## Code Style

- Jamais usar `any` explícito — usar `unknown` + type guard
- Imports: ES modules, sem `require()`
- Nomes de arquivo: `kebab-case`. Componentes: `PascalCase`
- `NEXT_PUBLIC_*` apenas para valores seguros no client; segredos só em Server Actions ou Route Handlers
- Imagens externas requerem `remotePatterns` em `next.config.ts`
- Supabase no server: `createServerClient` (cookies). No client: `createBrowserClient`

## Path alias

`@/*` → `src/*` (configurado em `tsconfig.json`)
