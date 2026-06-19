# TypeScript Rules

## Configuração

- `strict: true` é inegociável. Nunca desabilitar flags de strict mode para silenciar erros.
- Resolver erros de tipo na fonte, não com cast.

## Proibições

- Sem `any` explícito. Usar `unknown` + type guard quando o tipo não é conhecido.
- Sem `@ts-ignore`. Sem `@ts-expect-error` sem comentário que explica por quê.
- Sem `as T` (type assertion) exceto quando o tipo é provado pela lógica acima — e mesmo assim, documentar.
- Sem `!` (non-null assertion) quando o valor pode genuinamente ser `null` ou `undefined`.

## Tipos

- Preferir `interface` para shapes de objetos; `type` para unions, intersections e aliases primitivos.
- Tipos derivados com `Awaited<ReturnType<typeof fn>>` em vez de duplicar a definição.
- Schemas Zod em `types/` são a fonte da verdade — inferir os tipos TypeScript deles com `z.infer<>`.
- Evitar generics onde um tipo concreto serve. Genericidade tem custo de legibilidade.

## Type Guards

```ts
function isError(value: unknown): value is Error {
  return value instanceof Error
}
```

- Usar `in` operator, `instanceof`, e predicados de tipo para estreitar `unknown`.
- Nunca usar `typeof x === 'object'` como guard final — objeto pode ser `null`.

## Erros

- Nunca `catch (e: any)`. Usar `catch (e: unknown)` e estreitar com `instanceof Error`.
- Funções que podem falhar retornam `{ success: true; data: T } | { success: false; error: string }`.
- Sem try/catch silencioso (`catch {}`). Se ignorar o erro é intencional, comentar por quê.

## Async

- Sem `Promise<any>`. Tipar o retorno explicitamente.
- `async` em Server Components é o padrão. Não usar `useEffect` para fetch de dados que poderiam ser Server Component.
- `Promise.all()` para fetches paralelos independentes — nunca `await` em sequência quando não há dependência.

## Exports

- Preferir named exports. Default export apenas em componentes de página (`page.tsx`, `layout.tsx`, `error.tsx`).
- Não re-exportar apenas para conveniência — cada export deve ter um propósito claro.
