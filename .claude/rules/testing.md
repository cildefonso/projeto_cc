# Testing Rules

## Princípios

- Testes não são uma fase. São escritos junto com o código.
- Testar comportamento, não implementação. Se o teste quebra com um refactor sem mudar comportamento, o teste está errado.
- Um teste que sempre passa não tem valor. Um teste que nunca quebra não está testando nada.

## Estratégia por Camada

### Server Actions (`actions/`)
- Testes de integração com banco real (test database, não mock).
- Cobrir: input inválido, usuário não autenticado, usuário sem permissão, happy path, edge cases de negócio.
- Nunca mockar o cliente Supabase nos testes de action — mockar mata a confiança na integração.

### Componentes (`components/`)
- Testes de comportamento com React Testing Library.
- Testar o que o usuário vê e faz, não os internals do componente.
- Sem snapshot tests — frágeis e não verificam comportamento.
- Mockar apenas dependências externas (fetch, APIs), nunca componentes filhos.

### Utilitários (`lib/`)
- Testes unitários puros para funções puras.
- 100% de cobertura de branches em código de transformação e validação.

### Páginas e Rotas
- Testes E2E com Playwright para fluxos críticos de negócio.
- Fluxos críticos = autenticação, onboarding, e qualquer caminho que envolva dinheiro ou dados sensíveis.

## O Que Sempre Testar

- [ ] Happy path completo
- [ ] Input inválido (Zod validation errors)
- [ ] Usuário não autenticado
- [ ] Usuário autenticado sem permissão para o recurso
- [ ] Estados de loading e error na UI
- [ ] Comportamento em dados vazios (empty state)

## O Que Nunca Fazer

- Sem `it('should work')` — nome do teste descreve o comportamento esperado.
- Sem `beforeEach` que configura estado não relacionado ao teste atual.
- Sem testes que dependem da ordem de execução.
- Sem `console.log` em testes.
- Sem `.only` ou `.skip` no código commitado.

## Cobertura

- Cobertura não é uma meta em si. Um teste ruim que aumenta cobertura é pior que nenhum teste.
- Foco em cobertura de branches em lógica crítica (auth, pagamentos, validação).
- Code coverage report no CI — falhar abaixo de threshold definido por domínio.
