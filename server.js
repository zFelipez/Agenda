require('dotenv').config();

const express = require('express');
const app = express(); // aui ja fizemos as coisas para carregar o metod express mas ainda nao utilizou ele 
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING).then(
  ()=> {
    console.log('acessei a base ')
    app.emit('pronto');
  }).catch(e =>{ console.log(`${e}`)})

const session =require('express-session');
const MongoStore= require('connect-mongo')
const flash = require('connect-flash'); 



const routes = require('./routers');
const path = require('path');
const helmet =  require('helmet');
const csrf =  require('csurf');
const { middlewareGLobal, checkCsrfError,csrfMiddleware} = require('./src/middlewares/middleware')

//(helmet());

app.use(express.urlencoded({extended : true })) //para tratar o post 
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
 

const sessionOptions = session({
  secret:' qualquer coisa que eu quiser',
  store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING }),  //onde vai salavr a sessao
  resave:false,
  saveUninitialized:false ,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly:true
  }                                 
})

app.use(sessionOptions);
app.use(flash())


app.set('views',path.resolve(__dirname, 'src', 'views') )
app.set('view engine' ,'ejs') 

 
app.use(csrf());
app.use(middlewareGLobal);
app.use(checkCsrfError); 
app.use(csrfMiddleware);

app.use(routes)
app.on('pronto', ()=>{ app.listen(3000, ()=>{
    console.log('http://localhost:3000')    
    console.log('Servidor Rodando na porta 3000')

   })
});

