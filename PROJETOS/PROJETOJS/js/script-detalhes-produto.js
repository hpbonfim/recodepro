const detalhesProduto = JSON.parse(sessionStorage.getItem("detalhesProduto"))

/* EXECUTAR LISTA DE FUNÇÕES QUANDO O DOM TERMINAR DE CARREGAR */
document.addEventListener("DOMContentLoaded", () => {

    /* FUNÇOES */
    // imagemProduto
    // precoAtualProduto
    // precoAntigoProduto
    // descricaoProduto
    // descricaoCompletaProduto
    // quantidadeProduto
    // calcularParcelas
    /* ----- */

    const tituloProduto = () => {
        const tituloProdutoId = document.getElementById("tituloProduto")
        const tituloProduto = detalhesProduto.tituloProduto

        tituloProdutoId.innerHTML = tituloProduto
        return tituloProduto
    }

    const imagemProduto = () => {
        const imagemProdutoId = document.getElementById("imagemProduto")
        const imagemProduto = detalhesProduto.imagemProduto
        const novaImgTag = `<img src="${imagemProduto}" alt="${tituloProduto()}">`

        imagemProdutoId.insertAdjacentHTML('afterbegin', novaImgTag)
    }

    const precoAtualProduto = () => {
        const precoAtualProdutoId = document.getElementById("precoAtualProduto")
        const precoAtualProduto = detalhesProduto.precoAtualProduto

        precoAtualProdutoId.innerHTML = precoAtualProduto
        return precoAtualProduto
    }

    const precoAntigoProduto = () => {
        const precoAntigoProdutoId = document.getElementById("precoAntigoProduto")
        const precoAntigoProduto = detalhesProduto.precoAntigoProduto

        precoAntigoProdutoId.innerHTML = precoAntigoProduto
    }


    const descricaoProduto = () => {
        const descricaoProdutoId = document.getElementById("descricaoProduto")
        const descricaoProduto = detalhesProduto.descricaoProduto

        descricaoProdutoId.innerHTML = descricaoProduto
    }

    const descricaoCompletaProduto = () => {
        const descricaoCompletaProdutoId = document.getElementById("descricaoCompletaProduto")
        const descricaoCompletaProduto = detalhesProduto.descricaoCompletaProduto

        descricaoCompletaProdutoId.innerHTML = descricaoCompletaProduto
    }


    const quantidadeProduto = () => {
        const quantidadeProdutoId = document.getElementById("quantidadeProduto")
        const quantidadeProduto = detalhesProduto.quantidadeProduto

        quantidadeProdutoId.innerHTML = `Existem ${quantidadeProduto} no estoque!`
    }

    const calcularParcelas = () => {
        const precoParcelado = document.getElementById("precoParcelado")
        const valorTotal = precoAtualProduto().replace(/\D/g, "") // TRANSFORMA STRING EM NÚMERO

        function formatarValor(valor) {
            return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }

        for (let vezes = 2; vezes <= 10; vezes++) {
            let valorParcelas = valorTotal / vezes
            valorParcelas /= 100 // remover uma casa decimal
            if (valorParcelas < 0)
                return
            precoParcelado.innerHTML += `<option value="">${vezes} x ${formatarValor(valorParcelas)} sem juros</option>`
        }
    }

    const executarFuncoes = () => {
        tituloProduto()
        imagemProduto()
        precoAtualProduto()
        precoAntigoProduto()
        descricaoProduto()
        descricaoCompletaProduto()
        quantidadeProduto()
        calcularParcelas()
    }
    
    /* EXECUTAR AO CARREGAR A PÁGINA */
    window.onload = executarFuncoes()

});