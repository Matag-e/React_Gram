# ReactGram 📸

O **ReactGram** é uma rede social completa inspirada no Instagram, desenvolvida como projeto Full Stack para consolidar conhecimentos na stack MERN (MongoDB, Express, React e Node.js). O projeto permite que usuários compartilhem fotos, sigam uns aos outros, curtam e comentem em publicações.

## ✨ Funcionalidades

*   **Autenticação:** Cadastro e login de usuários com criptografia de senha (Bcrypt) e tokens JWT.
*   **Upload de Fotos:** Publicação de imagens com legendas.
*   **Interação Social:** Sistema de likes e comentários em fotos.
*   **Perfil de Usuário:** Edição de perfil (foto de perfil, bio) e visualização de perfis de outros usuários.
*   **Feed:** Visualização das fotos mais recentes.
*   **Busca:** Pesquisa por fotos ou usuários.
*   **Dashboard:** Gerenciamento das próprias publicações.

## 🛠️ Tecnologias Utilizadas

### Backend
*   **Node.js & Express:** Servidor e API RESTful.
*   **MongoDB & Mongoose:** Banco de dados NoSQL e modelagem de dados.
*   **JWT (JSON Web Token):** Autenticação segura.
*   **Multer:** Upload e gerenciamento de imagens.
*   **Bcrypt.js:** Hashing de senhas.

### Frontend
*   **React (Vite):** Interface do usuário rápida e reativa.
*   **Redux Toolkit:** Gerenciamento de estado global (autenticação, fotos, usuário).
*   **React Router DOM:** Navegação entre páginas.
*   **React Icons:** Ícones para UI.
*   **CSS Modules:** Estilização de componentes.

## 🚀 Como Rodar o Projeto

O projeto é dividido em duas partes: `backend` e `frontend`. Você precisará de dois terminais para rodar a aplicação completa.

### Pré-requisitos
*   Node.js instalado.
*   MongoDB rodando (localmente ou via Atlas).

### 1. Configurando o Backend

1.  Acesse a pasta do backend:
    ```bash
    cd backend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Crie um arquivo `.env` na raiz da pasta `backend` com as seguintes variáveis:
    ```env
    PORT=5000
    DB_USER=seu_usuario_mongo
    DB_PASS=sua_senha_mongo
    JWT_SECRET=seu_segredo_jwt
    ```
    *(Nota: Ajuste a string de conexão no `db.js` se necessário)*

4.  Inicie o servidor:
    ```bash
    npm run server
    ```
    O servidor rodará na porta `5000` (ou a que você definir).

### 2. Configurando o Frontend

1.  Acesse a pasta do frontend:
    ```bash
    cd frontend
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
    Acesse a aplicação em `http://localhost:5173`.

## 📂 Estrutura de Pastas

*   **`/backend`**: Contém toda a lógica do servidor, controllers, models, rotas e middlewares.
    *   `uploads`: Pasta onde as imagens enviadas são armazenadas.
*   **`/frontend`**: Aplicação React.
    *   `src/components`: Componentes reutilizáveis (Navbar, Footer, PhotoItem).
    *   `src/pages`: Páginas da aplicação (Home, Login, Register, Profile).
    *   `src/services`: Integração com a API do backend.
    *   `src/slices`: Reducers e actions do Redux.

---

Desenvolvido por **Mateus Silva**.
