'use strict';

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodelogin'
});

conn.connect((err) => {
    return (err)
        ? console.log('Error al conectarse a la base de datos' + err.stack)
        : console.log(`Conexion N°${conn.threadId} establecida con la base de datos`);
});

module.exports = conn;
