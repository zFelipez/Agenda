# Agenda
Este projeto, de uma agenda , eu mesmo realizei juntamente com o professor Luiz Otavio Miranda(https://github.com/luizomf) durante seu curso de javascript online na udemy. 


 Projeto Agenda

Este é um sistema de agenda pessoal feito com **Node.js**, **Express**, **MongoDB** e **Webpack**, com suporte a autenticação, sessões e proteção CSRF. O projeto permite cadastrar, editar e remover contatos.

---
 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [Webpack](https://webpack.js.org/)
- [EJS](https://ejs.co/)
- [Babel](https://babeljs.io/)

- [Validator](https://github.com/validatorjs/validator.js)
- [CSURF](https://www.npmjs.com/package/csurf)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [connect-flash](https://github.com/jaredhanson/connect-flash)

---

##  Funcionalidades

- Cadastro de contatos (nome, telefone, e-mail)
- Edição e exclusão de contatos
- Sistema de login e autenticação com hash de senha (bcrypt)
- Sessões salvas no MongoDB
- Proteção contra CSRF
- Validações com `validator.js`
- Interface server-side com EJS
- Webpack para empacotar os arquivos front-end
- Babel para suporte a ES6+

---

  Como rodar o projeto

  Pré-requisitos

- Node.js instalado
- MongoDB em execução
- Git Bash ou terminal


 # Instale as dependências
 
npm install



# Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto e adicione:

CONNECTIONSTRING=mongodb://localhost:27017/agenda
PORT=3000



# Rode o servidor em modo desenvolvimento
 
npm run dev  # Webpack observando alterações
npm start     # Inicia o servidor com Nodemon
 
 
# Estrutura de pastas
 
Agenda/
├── frontend/
│   ├── assets/
│   ├── modules/
│   ├── main.js/
│  
├── public/
│   ├── assets/
│   └── bundle.js
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── views/
├── server.js
├── webpack.config.js
├── .env
├── package.json
└── README.md
