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
        //Habilitado com a importação do Marko
        response.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos de Nota'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    },
                    {
                        id: 3,
                        titulo: 'Teste de Livro'
                    }
                ]
            }
        );
        /*response.send(
            
        );*/
    });
}