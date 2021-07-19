"use strict";
exports.__esModule = true;
var express = require("express");
var port = process.env.PORT;
var pwd = process.argv[2] ? process.argv[2] : process.env.PWD;
console.log(port);
console.log(pwd);
var server = express();
server.listen(port);
server.get('/', function (req, res) {
    res.sendFile(pwd + "/index.html");
});
server.get('/css/:file', function (req, res) {
    try {
        res.sendFile(pwd + "/css/" + req.params.file);
    }
    catch (err) {
        res.sendStatus(404);
    }
});
server.get('/script', function (req, res) {
    res.sendFile(pwd + "/js/html/build.js");
});
server.get('/imgs/:file', function (req, res) {
    try {
        res.sendFile(pwd + "/imgs/" + req.params.file);
    }
    catch (err) {
        res.sendStatus(404);
    }
});
server.get('/test', function (req, res) {
    res.send('ok');
});
server.get('/test', function (req, res) {
    res.send('ok');
});
server.get('*', function (req, res) {
    res.redirect('/');
});
