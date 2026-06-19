# Design Rules

## Padrão

A barra é: Apple, Linear, Stripe, Vercel. Dark-first. Tipografia editorial. Sofisticação.

Se parece template, reprovou. Se poderia pertencer a qualquer produto, reprovou.

## Sistema Visual

- Design tokens definidos no bloco `@theme` em `src/app/globals.css`. Nunca hardcodar cores, espaçamentos ou tipografia fora do tema.
- Dark mode é o default. Light mode é opt-in, não o contrário.
- Escala tipográfica coerente: sem tamanhos arbitrários. Usar os steps do sistema.
- Espaçamento consistente com a escala do Tailwind. Sem valores arbitrários `px-[13px]` sem motivo.

## Componentes

- Primitivos de UI vêm de `components/ui/` (shadcn). Não reimplementar o que já existe.
- Variantes de componentes via `cva()` (class-variance-authority) — não via props booleanas soltas.
- `cn()` para merge de classes condicionais. Sem template string com lógica condicional.
- Componentes de feature em `components/<feature>/` são composições dos primitivos de `ui/`.

## Tailwind v4

- Sem `tailwind.config.ts`. Toda customização vai em `@theme` no CSS.
- Sem CSS inline. Sem styled-components. Apenas classes Tailwind.
- Import: `@import "tailwindcss"` (não as três diretivas do v3).
- Dark mode via classe `.dark` no `html` — não via `prefers-color-scheme` diretamente.

## Animação e Interação

- Transições em elementos interativos: `transition-colors duration-150` no mínimo.
- Sem animações decorativas que atrasam a percepção de resposta. Motion serve à função.
- Estados de hover, focus e active sempre definidos — nunca depender do estilo padrão do browser.
- Focus visible para acessibilidade (`focus-visible:ring-*`) em todos os elementos interativos.

## Responsividade

- Mobile-first: estilos base são para mobile, breakpoints adicionam complexidade.
- Breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280). Sem breakpoints arbitrários.
- Testar em 375px (iPhone SE) e 1440px (desktop padrão) no mínimo.

## Acessibilidade

- Todo elemento interativo tem `aria-label` quando o texto visual não é suficiente.
- Imagens decorativas: `alt=""`. Imagens informativas: `alt` descritivo.
- Contraste mínimo WCAG AA: 4.5:1 para texto normal, 3:1 para texto grande.
- Sem `outline: none` sem substituição visível de focus.
- Hierarquia de headings correta (`h1` → `h2` → `h3`). Nunca pular nível.

## Qualidade Visual

- Sem quebra de layout em conteúdo dinâmico (textos longos, imagens faltando, listas vazias).
- Estados de loading, error e empty sempre desenhados — nunca deixar a UI em branco.
- Skeleton loaders em vez de spinners onde o layout final é conhecido.
