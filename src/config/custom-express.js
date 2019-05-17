//Habilitando o Marko a trabalhar com o Node
require('marko/node-require').install();
//Habilitando o Marko a trabalhar com o Express
require('marko/express');

const express = require('express');
const app=express();
//midleware body-parser
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

//Midleware estático para retornar onde ficam os arquivos publicos
app.use('/estatico', express.static('src/app/public'));

app.use(bodyParser.urlencoded({
    //Está habilitado a receber objetos JSon
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;