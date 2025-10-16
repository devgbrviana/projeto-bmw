# Projeto BMW

## 🚗 Descrição do Projeto

Este projeto é um *website* de demonstração para a marca BMW, focado em apresentar modelos de veículos (Gasolina, Híbridos e Elétricos) e implementar um sistema completo de gestão de usuários e endereços. O projeto é desenvolvido utilizando **Front-end puro** (HTML, CSS, JavaScript) e faz integração com uma API externa para simular as funcionalidades de autenticação e CRUD (Criação, Leitura, Atualização e Exclusão) de dados.

## ✨ Funcionalidades

O sistema possui as seguintes principais funcionalidades:

* **Página Inicial (Home):** Carrossel de imagens com transição automática e navegação principal.
* **Catálogo de Modelos:** Página dedicada à exibição de modelos de veículos (Série 3, X6, M5, i8, etc.) com informações de preço.
* **Autenticação de Usuário:**
    * Cadastro de novos usuários (Nome, Email, Senha, CPF/CNPJ, Data de Nascimento).
    * Login de usuários.
    * Logout.
* **Gestão de Endereços:**
    * Cadastro de um novo endereço (Apelido, CEP, Endereço, Número, Complemento).
    * Listagem de todos os endereços cadastrados pelo usuário logado.
    * Atualização de um endereço existente.
    * Exclusão de um endereço.
* **Design Responsivo:** Estilização moderna e adaptável utilizando CSS puro.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

* **HTML5:** Estrutura das páginas (`index.html`, `view/modelos.html`, `view/cadastro.html`, etc.).
* **CSS3:** Estilização e layout (`css/index.css`, `css/login.css`, `css/modelos.css`, etc.).
* **JavaScript (Vanilla JS):** Lógica de front-end, manipulação do DOM e integração com a API.
* **REST API:** Utilização da API `https://go-wash-api.onrender.com/` para as operações de Login, Logout e CRUD de Endereços.

| Funcionalidade JS | Endpoint da API |
| :--- | :--- |
| `login.js` | `/api/login` |
| `logout.js` | `/api/auth/logout` |
| `endereco.js` | `/api/auth/address` (POST) |
| `listendereco.js` | `/api/auth/address` (GET/DELETE) |
| `atualizar_endereco.js` | `/api/auth/address/:id` (GET/POST) |


## 🚀 Instalação e Execução

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/devgbrviana/projeto-bmw.git](https://github.com/devgbrviana/projeto-bmw.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd projeto-bmw
    ```
3.  **Abra o arquivo `index.html`:**
    * Você pode simplesmente abrir o arquivo no seu navegador (clique duplo).
    * **Recomendado:** Use uma extensão como o *Live Server* do VS Code para executar o projeto em um servidor local, garantindo que todas as funcionalidades e carregamento de arquivos funcionem corretamente (como as rotas e vídeos em segundo plano, se houver).
