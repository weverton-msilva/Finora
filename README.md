# Finora

> Backend para gerenciamento financeiro pessoal, desenvolvido com TypeScript.

O **Finora** é uma API REST para controle de finanças pessoais. O projeto permite gerenciar contas, transações, categorias e metas financeiras, com autenticação e persistência em PostgreSQL.

## 🛠️ Tecnologias

* **TypeScript**
* **Node.js**
* **Fastify**
* **PostgreSQL**
* **Prisma ORM**
* **Zod**
* **JWT**
* **Docker**
* **Vitest**
* **Swagger / OpenAPI**

## 📌 Funcionalidades

### Autenticação

* Cadastro de usuários
* Login
* Access token
* Refresh token
* Proteção de rotas

### Contas

* Criar conta
* Listar contas
* Atualizar conta
* Remover conta
* Consultar saldo

### Transações

* Registrar receitas
* Registrar despesas
* Transferir valores entre contas
* Consultar histórico
* Filtrar por período
* Filtrar por categoria
* Paginação

### Categorias

* Criar categorias
* Editar categorias
* Remover categorias
* Associar categorias às transações

### Metas

* Criar metas financeiras
* Definir valor e prazo
* Acompanhar progresso
* Atualizar contribuições

### Relatórios

* Saldo total
* Receitas por período
* Despesas por período
* Gastos por categoria
* Resumo financeiro mensal

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura organizada por responsabilidades:

```text
src/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── accounts/
│   ├── transactions/
│   ├── categories/
│   └── goals/
│
├── shared/
│   ├── errors/
│   ├── middlewares/
│   └── utils/
│
├── database/
│   └── prisma/
│
├── app.ts
└── server.ts
```

A regra é simples: cada parte do sistema deve possuir uma responsabilidade clara.

## 🚀 Executando o projeto

### Pré-requisitos

* Node.js
* npm
* Docker
* Docker Compose

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd finora
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/finora"
JWT_SECRET="your-secret"
JWT_REFRESH_SECRET="your-refresh-secret"
PORT=3333
```

### 4. Inicie o banco

```bash
docker compose up -d
```

### 5. Execute as migrations

```bash
npx prisma migrate dev
```

### 6. Inicie o servidor

```bash
npm run dev
```

A API estará disponível em:

```text
http://localhost:3333
```

## 📚 Documentação da API

Com o servidor executando, a documentação da API estará disponível em:

```text
http://localhost:3333/docs
```

A documentação utiliza **OpenAPI/Swagger**.

## 🧪 Testes

Execute os testes com:

```bash
npm test
```

Para executar os testes em modo de observação:

```bash
npm run test:watch
```

## 🔐 Segurança

O projeto utiliza:

* JWT para autenticação
* Hash de senhas
* Validação de entrada
* Rate limiting
* Proteção de rotas
* Variáveis de ambiente para informações sensíveis
* Tratamento centralizado de erros

## 📦 Scripts

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de produção
npm run start     # Executa o build
npm test          # Testes
npm run lint      # ESLint
npm run format    # Prettier
```

## 🎯 Objetivo

O Finora foi criado com foco no desenvolvimento de habilidades de backend, explorando:

* Desenvolvimento de APIs REST
* TypeScript
* Arquitetura de aplicações
* Bancos relacionais
* Autenticação
* Validação
* Testes automatizados
* Docker
* Documentação de APIs
* Boas práticas de desenvolvimento

## 📄 Licença

Este projeto está sob a licença MIT.
