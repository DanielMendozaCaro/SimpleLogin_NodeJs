'use strict';
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var UserModel = require('../models/UserModel');


module.exports = (passport) => {
    passport.serializeUser((user,done) => {
        done(null,user);
    });

    passport.deserializeUser((obj,done) => {
        done(null,obj);
    });

    passport.use(new LocalStrategy({
        passReqToCallback: true
    }, (req,email,password,done) => {

        var user = email;

        UserModel.login(user, (err,rows) => {
            if(err) throw err;

            if(rows.length > 0){
                let user = rows[0];
                
                if(bcrypt.compareSync(password, user.password)){
                    return done(null,{
                    id: user.id,
                    nombre: user.nombre,
                    email: user.email
                    });
                }
            }
            else{
                return done(null,false, req.flash('authmessage', 'Email o Password incorrecto'));
            }
        });
    }
    ));
};
