const express = require('express');
const route = express.Router();
const home=  require('./src/controllers/home-controller')
const loginController=  require('./src/controllers/loginController')
const contatoController=  require('./src/controllers/contatoController')

const {loginRequired} = require('./src/middlewares/middleware')



//rotas da home 
route.get('/' , home.index); 

//rotas de login 

route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//Rotas de contato

route.get('/contato/index',loginRequired,contatoController.index);
route.post('/contato/register',loginRequired,contatoController.register);
route.get('/contato/index/:id',loginRequired,contatoController.editIndex);
route.post('/contato/edit/:id',loginRequired,contatoController.edit);
route.get('/contato/delete/:id',loginRequired,contatoController.delete);






module.exports = route;
