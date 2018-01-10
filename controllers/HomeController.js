'use strict';

var HomeController = function(){};

HomeController.index = (req,res,next) => {
    res.render('home', {
        isAuthenticated: req.isAuthenticated(),
        user: req.user
    });
};


module.exports = HomeController;