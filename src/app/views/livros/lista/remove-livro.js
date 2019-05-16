let tabelaLivros = document.querySelector('#livros');
tabelaLivros.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == "remocao"){
        let livroId = elementoClicado.dataset.ref;

        fetch(`http://localhost:3000/livros/${livrodId}`, {method : 'DELETE'})
            .then(resposta => {
                let tr = elementoClicado.closest(`#livro_${livrodId}`);
                tr.remove();
            })
            .catch(erro => console.log(erro));
    }
});