//Habilitando o Marko a trabalhar com o Node
require('marko/node-require').install();
//Habilitando o Marko a trabalhar com o Express
require('marko/express');

const express = require('express');
const app=express();

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;