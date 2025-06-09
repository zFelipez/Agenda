import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login'
import './assets/css/style.css';


const cadastro= new Login('.form-cadastro');

const login = new Login('.form-login');
console.log('oi cheguei no main ')
login.init();

cadastro.init()  