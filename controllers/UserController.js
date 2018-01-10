'use strict';
var UserModel = require('../models/UserModel');
var bcrypt = require('bcryptjs');

var UserController = function(){};

UserController.getSignUp = (req,res,next) => {
    res.render('users/signup');
};

UserController.postSignUp = (req,res,next) => {
    var salt = bcrypt.genSaltSync(10);
    var password = bcrypt.hashSync(req.body.password, salt);

    var user = {
        email: req.body.email,
        nombre: req.body.nombre,
        password: password
    };

    UserModel.add(user, (err) => {
       if(err){ 
           throw err;
       }
       else{
            req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
            res.redirect('/auth/signin'); 
        }
    })
};

UserController.getSignIn = (req,res,next) => {
    return res.render('users/signin', {message: req.flash('info'), authmessage: req.flash('authmessage')});
};

UserController.logOut = (req,res,next) => {
    req.logout();
    res.redirect('/auth/signin');
};

UserController.getUserPanel = (req,res,next) => {
    res.render('users/panel', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
    });
};

module.exports = UserController;