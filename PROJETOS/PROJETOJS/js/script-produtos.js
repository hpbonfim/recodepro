const URL_PRODUTOS = "https://raw.githubusercontent.com/hpbonfim/recodepro/master/PROJETOS/PROJETOJS/JSON/produtos.json"
let arrayObjetos = []
let carregarListaCategorias
let filtrarCategoria
let listarObjetos
let mostrarTodosProdutos
let limparLista

fetch(URL_PRODUTOS)
    .then(res => res.json())
    .then(data => {
        const { produtos } = data
        // Transforma JSON Objects em Arrays
        Object.entries(produtos).map(todosProdutos => {
            return arrayObjetos.push(todosProdutos)
        })

        carregarListaCategorias()
    })


/* LISTA DE CATEGORIAS */
carregarListaCategorias = () => {
    let listaCategoriasId = document.getElementById('lista-categorias')
    let quantidadeTotal = 0
    
    arrayObjetos.map((produto, index) => {
        let tituloProduto = produto[0]
        let quantidadeProduto = produto[1].quantidades
        quantidadeTotal += quantidadeProduto
        return listaCategoriasId.innerHTML += `<li><button class="menu-botoes" onclick='filtrarCategoria(${index})'>${tituloProduto} <strong>(${quantidadeProduto})</strong></li>`
    })
    listaCategoriasId.innerHTML += `<li><button class="menu-botoes" onclick='mostrarTodosProdutos(${quantidadeTotal})'>Mostrar Tudo <strong>(${quantidadeTotal})</strong></li>`
    
}
/* FIM LISTA DE CATEGORIAS */

/* LIMPAR LISTA */
limparLista = () => {
    return document.querySelectorAll('.box_produto').forEach(elemento => elemento.remove())
}

/* MOSTRAR TODAS AS CATEGORIAS */
mostrarTodosProdutos = () => {
    limparLista() // REMOVE TODOS OS BOX DO PRODUTO ANTES DE FILTRAR

    for (let i = 0; i < arrayObjetos.length; i++) {
        listarObjetos(i)
    }
}

/* MOSTRAR TODAS AS CATEGORIAS */
filtrarCategoria = (itemId) => {
    limparLista() // REMOVE TODOS OS BOX DO PRODUTO ANTES DE FILTRAR
    listarObjetos(itemId)
}


/* FILTRAR CATEGORIAS */
listarObjetos = (itemId) => {
    let sessaoProdutosId = document.getElementById("categorias")

    arrayObjetos[itemId][1].itens.map(item => {
        sessaoProdutosId.insertAdjacentHTML('afterend', `
        <div class="box_produto">
            <img class="imagem_produto" src="${item.imageUrl}" alt="Geladeira brastemp">
            <hr>
            <br>
            <span>
                ${item.titulo}
            </span>
            <p class="descricao">
                <em class="traco">${item.precoAntigo}</em>
                <p class="preco">${item.precoAtual}</p>
                <button onclick="verDetalhes(${item.id})" class="detalhes-produto">DETALHES</button>
                <button onclick="carrinhoDeCompras(${item.id})" class="adicionar-carrinho">COLOCAR NO CARRINHO</button>
                <button onclick="comprarProduto(${item.id})" class="comprar-produto">COMPRAR</button>
            </p>
        </div>
        `
        )
    })
}
/* FIM FILTRAR CATEGORIAS */



/* FIM FILTRAR CATEGORIAS */

let verDetalhes = (itemId) => {
    alert(itemId)
}