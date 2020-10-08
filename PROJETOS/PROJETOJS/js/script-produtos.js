const URL_PRODUTOS = "https://raw.githubusercontent.com/hpbonfim/recodepro/master/PROJETOS/PROJETOJS/js/produtos.json"

/* LISTA DE CATEGORIAS */
fetch(URL_PRODUTOS)
    .then(res => res.json())
    .then(data => {
        const { produtos } = data
        let lista = document.getElementById('lista-categorias')
        let listaCategorias = ""

        Object.keys(produtos).map((objeto, index) => {
            let tituloProduto = objeto
            listaCategorias += `<li>${tituloProduto}</li>`
            return lista.innerHTML = listaCategorias
        })
    })




/* FIM LISTA DE CATEGORIAS */



let verDetalhes = (itemId) => {
    alert(itemId)
}