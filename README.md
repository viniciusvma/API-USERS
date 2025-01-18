# API - User Management

Este projeto consiste em uma aplicação para cadastro e gerenciamento de usuários. Ele é dividido em duas partes: o **Frontend** e o **Backend**. O **Frontend** é uma interface de usuário desenvolvida com React, enquanto o **Backend** é uma API RESTful feita com Node.js e Prisma.

## Estrutura do Projeto

O projeto está dividido nas seguintes pastas:

- **BACKEND**: Contém o código do servidor da API.
- **FRONTEND**: Contém o código da aplicação de interface de usuário.

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - Prisma (ORM)
  - MongoDB (Banco de Dados)

- **Frontend**:
  - React
  - Vite (para desenvolvimento rápido)

## Como Rodar o Projeto

### Backend

1. Acesse a pasta `BACKEND`:
   ```bash
   cd BACKEND
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados, se necessário, com o Prisma:
   ```bash
   npx prisma migrate dev
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

O backend estará disponível em `http://localhost:3000`.

### Frontend

1. Acesse a pasta `FRONTEND/cadastro_users`:
   ```bash
   cd FRONTEND/cadastro_users
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O frontend estará disponível em `http://localhost:5173`.

## Funcionalidades

### Backend
- **GET** `/usuarios`: Retorna todos os usuários cadastrados.
- **POST** `/usuarios`: Cria um novo usuário com os dados enviados.
- **PUT** `/usuarios/:id`: Atualiza as informações de um usuário existente.
- **DELETE** `/usuarios/:id`: Exclui um usuário pelo seu ID.

### Frontend
- **Cadastro de usuários**: Permite o cadastro de um novo usuário.
- **Edição de usuários**: Permite editar as informações de um usuário.
- **Exclusão de usuários**: Permite excluir um usuário da lista.

## Contribuições

1. Faça o **fork** deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações e commit (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Crie um **Pull Request**.

