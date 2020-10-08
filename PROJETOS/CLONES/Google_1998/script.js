/* FUNÇÃO DE PESQUISAR */
const inputId = document.getElementById("procurar");
function fazerPesquisa() {
    let procurar = inputId.value
    window.location.href = `https://www.google.com.br/search?q=${procurar}`;
}
/* FIM */

let estouComSorte = () => {
    alert('Função será ativada daqui alguns anos! xD')
}
