# Architecture Rules

## Rendering Model

- Server Components são o padrão. `'use client'` é uma exceção justificada, não o default.
- Adicionar `'use client'` apenas quando houver: hooks de estado/efeito, event handlers, browser APIs, bibliotecas client-only.
- Nunca misturar acesso a banco com lógica de UI em Client Components.

## Camadas

```
Client Component → Server Action → DB
Client Component → Route Handler → DB
Server Component → DB (direto, sem intermediário)
```

- `actions/` é a única camada que toca o banco a partir de Client Components.
- `lib/` contém apenas clients (supabase, stripe), helpers puros e config. Sem lógica de negócio.
- `types/` contém tipos globais e schemas Zod compartilhados. Sem lógica.
- Componentes em `components/<feature>/` não importam de outros `<feature>/` — comunicação via props ou context.

## Server Actions

- Toda Server Action valida o input com Zod antes de qualquer operação.
- Toda Server Action verifica autenticação/autorização antes de qualquer operação.
- Usar `revalidatePath()` ou `revalidateTag()` apenas em Server Actions ou Route Handlers.
- Retornar tipos discriminados: `{ success: true, data } | { success: false, error }`.

## Rotas

- Grupos de rota com `(grupo)/` para organização sem afetar a URL.
- `layout.tsx` compartilha estado de UI, não faz fetch de dados críticos.
- `loading.tsx` e `error.tsx` são obrigatórios em rotas com fetch de dados.
- Prefetching com `<Link prefetch>` apenas onde o padrão de navegação justifica.

## Nomeação de Arquivos

- Arquivos: `kebab-case.ts`
- Componentes: `PascalCase.tsx`
- Server Actions: `kebab-case.ts` dentro de `actions/`
- Hooks customizados: `use-kebab-case.ts`

## Imports

- Path alias `@/*` → `src/*` em todos os imports internos. Sem `../../`.
- Barrel files (`index.ts`) apenas onde a API pública de um módulo é estável.
- Sem imports circulares. Se aparecer, é sinal de que a camada está errada.
