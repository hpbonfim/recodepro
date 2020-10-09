let detalhesProduto = JSON.parse(sessionStorage.getItem("detalhesProduto"))

/* FUNÇOES */
let tituloProduto
let imagemProduto
let precoAtualProduto
let precoAntigoProduto
let descricaoProduto
let descricaoCompletaProduto
let quantidadeProduto
/* ----- */

tituloProduto = () => {
    let tituloProduto = detalhesProduto.tituloProduto
    let tituloProdutoId = document.getElementById("tituloProduto")
}

imagemProduto = () => {
    let imagemProduto = detalhesProduto.imagemProduto
    let imagemProdutoId = document.getElementById("imagemProduto")
    let novaImgTag = document.createElement('img')
}

precoAtualProduto = () => {
    let precoAtualProduto = detalhesProduto.precoAtualProduto
    let precoAtualProdutoId = document.getElementById("precoAtualProduto")
}

precoAntigoProduto = () => {
    let precoAntigoProduto = detalhesProduto.precoAntigoProduto
    let precoAntigoProdutoId = document.getElementById("precoAntigoProduto")
}


descricaoProduto = () => {
    let descricaoProduto = detalhesProduto.descricaoProduto
    let descricaoProdutoId = document.getElementById("descricaoProduto")
}

descricaoCompletaProduto = () => {
    let descricaoCompletaProduto = detalhesProduto.descricaoCompletaProduto
    let descricaoCompletaProdutoId = document.getElementById("descricaoCompletaProduto")
}


quantidadeProduto = () => {
    let quantidadeProduto = detalhesProduto.quantidadeProduto
    let quantidadeProdutoId = document.getElementById("quantidadeProduto")
}    
