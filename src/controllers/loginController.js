const Login = require('../models/LoginModel');

exports.index = (req, res) => {
        if(req.session.user) return res.render('login-logado')
        res.render('login')
}


exports.register = async (req, res) => {
        try {

                const login = new Login(req.body);
                await login.register();

                if (login.errors.length > 0) {
                        req.flash('errors', login.errors);
                        req.session.save(() => {
                                return res.redirect('/login/index');
                        })
                        return;
                }


                 
                req.flash('success', 'Seu usuario foi criado cm sucesso');
              
                req.session.save(() => {
                return res.redirect('/login/index')});

        } catch (e) {
                console.log(e);
                res.render('404');
                return;

        }

};

exports.login = async (req, res) => {
         
       
        try {
                
                const login = new Login(req.body);
               
                await login.login()

                if (login.errors.length > 0) {
                        req.flash('errors', login.errors);
                        req.session.save(() => {
                                return res.redirect('/login/index');
                        })
                        return;
                }

                req.flash('success', 'Voce entrou no sistema com sucesso');
                req.session.user = login.user;
                req.session.save(() => {
                return res.redirect('/login/index')});

        } catch (e) {
                console.log(e);
                res.render('404');
                return;

        } 

};

exports.logout =(req,res)=>{
        req.session.destroy()
        res.redirect('/')
}