const URL_PRODUTOS = "https://raw.githubusercontent.com/hpbonfim/recodepro/master/PROJETOS/PROJETOJS/JSON/produtos.json"

fetch(URL_PRODUTOS)
    .then(res => res.json())
    .then(data => {
        /* LISTA DE CATEGORIAS */
        const { produtos } = data
        let lista = document.getElementById('lista-categorias')
        let listaCategorias = ""
        let quantidadeProduto = ""
        let tituloProduto = ""

        Object.keys(produtos).forEach((index) => {
            quantidadeProduto = produtos[index].quantidades
            Object.keys(produtos[index]).map((produto) => {
                tituloProduto = produto
                return lista.innerHTML = listaCategorias
            })
            listaCategorias += `<li>${tituloProduto} (${quantidadeProduto})</li>`
        });


        /* FIM LISTA DE CATEGORIAS */

    })



let verDetalhes = (itemId) => {
    alert(itemId)
}