const URL_PRODUTOS = "https://raw.githubusercontent.com/hpbonfim/recodepro/master/PROJETOS/PROJETOJS/JSON/produtos.json"
let arrayObjetos = []
let filtrarCategoria

fetch(URL_PRODUTOS)
    .then(res => res.json())
    .then(data => {
        const { produtos } = data
        let listaCategoriasId = document.getElementById('lista-categorias')

        Object.entries(produtos).map((todosProdutos, index) => {
            return arrayObjetos.push(todosProdutos)
        })

        /* LISTA DE CATEGORIAS */
        Object.entries(produtos).map((produto, index) => {
            let tituloProduto = produto[0]
            let quantidadeProduto = produto[1].quantidades
            return listaCategoriasId.innerHTML += `<li><button class="menu-botoes" onclick='filtrarCategoria(${index})'>${tituloProduto} <strong>(${quantidadeProduto})</strong></li>`
        })
        /* FIM LISTA DE CATEGORIAS */
    })


/* FILTRAR CATEGORIAS */
filtrarCategoria = (itemId) => {
    alert(itemId)
    console.log(arrayObjetos[itemId][1])
}


let verDetalhes = (itemId) => {
    alert(itemId)
}