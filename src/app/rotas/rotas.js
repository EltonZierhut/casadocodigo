const db = require("../../config/database");

module.exports = (app) => {
    app.get('/',function(request, response){
        response.send(`
             <html>
                <head>
                    <meta charset="utf-8":
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            </html>
        `);
    });
    
    app.get('/livros',function(request, response){
        db.all('select * from livros',function(erro,resultado){
            //Habilitado com a importação do Marko
            response.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: resultado   
                }
            );    
        });
    });
}