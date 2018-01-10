'use strict';

var conn = require('../database/config');

var User = function(){};

User.add = (data, cb) => {
    var sql = 'INSERT INTO users SET ?';
    conn.query(sql,data,cb);
};

User.login = (data, cb) => {
    var sql = 'SELECT * FROM users WHERE email = ?';
    conn.query(sql,data,cb);
};

module.exports = User;