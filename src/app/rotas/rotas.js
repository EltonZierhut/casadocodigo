const LivroDao = require('../infra/livro-dao');
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
        const livroDao = new LivroDao(db);

        livroDao.lista()
                .then(livros => response.marko(
                        require('../views/livros/lista/lista.marko'),
                        {
                            livros: livros   
                        }
                ))
                .catch(erro => console.log(erro));
    });

    app.post('/livros', function(req, resp){
        const livroDao = new LivroDao(db);

        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));
    });

    app.get('/livros/buscarPorId/:idLivro', function(req, resp){
        const livroDao = new LivroDao(db);

        livroDao.buscarPorId(req.params.idLivro)
                .then(livro => resp.send(livro))
                .catch(erro => resp.send(erro));
    });

    app.get('/livros/form', function(requisicao, response){
        response.marko(require('../views/livros/form/form.marko'))
    });
}