'use strict';
module.exports = {
    isLogged: (req,res,next) => {
        if(req.isAuthenticated()){
            next(); 
        }
        else{
            req.flash('authmessage', 'Debes iniciar sesion primero :D');
            res.redirect('/auth/signin');
        }
    }
}