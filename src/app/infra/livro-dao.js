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
    atualizar(livro){
        return new Promise((resolve, reject) =>{
            this._db.run(`
            UPDATE livros set
            titulo = ?,
            preco = ?,
            descricao = ?
            where id = ?
            `,[
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ], function(err){
                return reject('Não foi possível atualizar ao banc de dados');
            });
            return resolve();
        });
    }

    remover(id){
        return new Promise((resolve, reject) => {
            this._db.run(`
            delete from livross where id = ?
            `,
                id
            , function(err){
                if (err){
                    return reject('Erro ao excluir livro');
                }
                
                return resolve();
            });
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