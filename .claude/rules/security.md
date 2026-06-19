# Security Rules

## Princípios

- Segurança não é uma fase. É uma restrição de design desde o primeiro commit.
- Toda superfície de entrada é potencialmente hostil: query params, form data, headers, cookies, payloads de webhook.
- Defense in depth: validar na borda, validar na action, validar no banco.

## Autenticação e Autorização

- Toda Server Action verifica a sessão antes de qualquer lógica de negócio.
- Toda Route Handler verifica a sessão antes de qualquer lógica de negócio.
- Nunca confiar no `user_id` vindo do client — sempre derivar da sessão do servidor.
- Verificar que o recurso acessado pertence ao usuário autenticado (IDOR prevention).
- Middleware (`middleware.ts`) protege rotas privadas — não depender só de UI para ocultar.

## Secrets e Variáveis de Ambiente

- `NEXT_PUBLIC_*` apenas para valores que podem ser expostos ao browser com segurança.
- Credenciais, chaves de API e tokens de serviço apenas em Server Actions ou Route Handlers.
- Nunca logar secrets, tokens ou dados pessoais — nem em desenvolvimento.
- Secrets nunca em código-fonte, comentários ou mensagens de commit.

## Validação de Input

- Todo input externo passa por schema Zod antes de qualquer processamento.
- Parâmetros de URL (`params`, `searchParams`) são `string | string[] | undefined` — sempre validar antes de usar.
- Nunca construir queries SQL com string interpolation — usar prepared statements do cliente (Supabase já faz isso via `.eq()`, etc.).
- Sanitizar qualquer dado que vai ser renderizado como HTML.

## OWASP Top 10 — Checklist por Feature

Antes de considerar uma feature completa, verificar:
- [ ] Broken Access Control: cada endpoint verifica quem pode fazer o quê
- [ ] Injection: zero interpolação de input do usuário em queries ou comandos
- [ ] XSS: sem `dangerouslySetInnerHTML` com dados do usuário sem sanitização
- [ ] CSRF: Server Actions do Next.js têm proteção built-in — não contornar
- [ ] Sensitive Data Exposure: nenhum dado sensível em respostas, logs ou URLs
- [ ] Security Misconfiguration: headers de segurança em `next.config.ts`

## Headers de Segurança

Configurar em `next.config.ts`:

```ts
headers: [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
```

## Rate Limiting

- Endpoints de autenticação e de mutação sensível têm rate limiting.
- Webhooks externos verificam assinatura antes de processar payload.

## Supabase RLS

- Row Level Security ativo em todas as tabelas com dados de usuário.
- Políticas RLS são a última linha de defesa — não substituem verificações na aplicação.
- `createServerClient` no servidor; `createBrowserClient` apenas onde estritamente necessário.
