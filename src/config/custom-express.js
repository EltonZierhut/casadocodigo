//Habilitando o Marko a trabalhar com o Node
require('marko/node-require').install();
//Habilitando o Marko a trabalhar com o Express
require('marko/express');

const express = require('express');
const app=express();

//midleware body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    //Está habilitado a receber objetos JSon
    extended: true
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;