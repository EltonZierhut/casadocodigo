class LivroDao{
    constructor (db) {
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) => {
                    if (erro) return reject('Erro ao acessar o banco de dados');

                    return resolve(resultados);
                }
            )
        });
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            // run executa sem retornar resultados, apenas erro
            this._db.run(`
            INSERT INTO LIVROS (
                    titulo,
                    preco,
                    descricao
                ) values (?, ?, ?)
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao
            ], function (err){
                console.log(err);
                return reject('Não foi possível adicionar ao banc de dados');
            });

            resolve();
        });
    }

    buscarPorId(idLivro){
        return new Promise((resolve, reject) =>{
            this._db.get(`
            SELECT * FROM livros WHERE id = ?
            `,[
                idLivro
            ]
            , (err, livro) =>{
                if (err) return reject("Não foi possível encontraro livro "+idLivro+"!");

                return resolve(livro);
            });
        });
    }
}

module.exports = LivroDao;