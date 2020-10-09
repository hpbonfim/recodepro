const URL_PRODUTOS = "https://raw.githubusercontent.com/hpbonfim/recodepro/master/PROJETOS/PROJETOJS/JSON/produtos.json"
let arrayObjetos = []
let filtrarCategoria

fetch(URL_PRODUTOS)
    .then(res => res.json())
    .then(data => {
        const { produtos } = data
        let listaCategoriasId = document.getElementById('lista-categorias')

        Object.entries(produtos).map(todosProdutos => {
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
    /*REMOVE TODOS OS BOX DO PRODUTO ANTES DE FILTRAR*/
    document.querySelectorAll('.box_produto').forEach(elemento => elemento.remove())

    let sessaoProdutosId = document.getElementById("categorias")

    arrayObjetos[itemId][1].itens.map(item => {
        console.log(item.id)
        sessaoProdutosId.insertAdjacentHTML('afterend', `
        <div class="box_produto">
            <img class="imagem_produto" src="${item.imageUrl}" alt="Geladeira brastemp">
            <br>
            <span>
                ${item.titulo}
            </span>
            <hr>
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


let verDetalhes = (itemId) => {
    alert(itemId)
}