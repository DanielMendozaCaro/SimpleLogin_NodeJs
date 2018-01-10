var express = require('express');
var router = express.Router();
var controllers = require('../controllers/index');
var passport = require('passport');
var AuthMiddleware = require('.././middleware/auth');

router.get('/', controllers.HomeController.index);

//rutas de usuario 
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn); 
router.post('/auth/signin', passport.authenticate('local', {
    successRedirect: '/users/panel',
    failureRedirect: '/auth/signin',
    failureFlash: true,
}));
router.get('/auth/logout', controllers.UserController.logOut);
router.get('/users/panel', AuthMiddleware.isLogged, controllers.UserController.getUserPanel);

module.exports = router;
