# ANPEX — Projeto (workspace)

Wireframes, especificação e esqueleto do painel de gerenciamento de projetos (MVP).

## Estrutura principal
- `app/` — Next.js app (página principal do site). 
- `app/wireframes/` — componentes React esqueleto para as telas MVP (Dashboard, Kanban, Projetos, Equipe, Assets, Chat).
- `calculator-app/` — projeto TypeScript separado (exemplo/auxiliar).

## Requisitos
- Node.js 18+ e npm (ou pnpm/yarn).

## Rodando localmente (Next.js)
No terminal (PowerShell) na raiz do repositório:

```powershell
npm install
npm run dev
```

Abra no navegador: http://localhost:3000
- Página de demonstração dos wireframes: http://localhost:3000/wireframes

## `calculator-app` (servidor Node/TypeScript)
Entrar na pasta e usar o script dev:

```powershell
cd calculator-app
npm install
npm run dev
```

## Notas rápidas
- Os wireframes são esqueleto UI — componentes em `app/wireframes/components/`.
- Próximos passos sugeridos: criar mocks/API, modelagem de dados (ERD) e integração WebSocket.

Se quiser, eu:
- gero um `OpenAPI` básico para a API do MVP;
- crio mocks JSON para popular o dashboard;
- adiciono scripts de dev/containers (Docker).
# ANPEX Next.js Site

Portal ANPEX convertido em layout React/Next.js.

## Como executar

1. Instale dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o site em:
   ```
   http://localhost:3000
   ```

## O que foi incluído

- Next.js com `app` router
- Página principal convertida em React
- Estilo global em `app/globals.css`
- Interação de mapa e envio de formulário
- Layout profissional e responsivo para ANPEX

## Socket (chat em tempo real)

O projeto inclui um servidor WebSocket simples usando `ws` para demo do Chat. Inicie-o em uma janela separada:

```powershell
npm run socket
```

O WebSocket roda em `ws://localhost:4000`. O componente de chat (wireframes) conecta-se automaticamente enquanto o servidor estiver em execução.
