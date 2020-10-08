/* FUNÇÃO DE PESQUISAR */
const inputId = document.getElementById("palavra-chave");
function fazerPesquisa(){
    let procurar = inputId.value
    window.location.href = `https://www.google.com/search?q=${procurar}`;
}
/* FIM */

/* TROCAR DIA / NOITE */
const toggleSelector = document.querySelector(".toggle");
const toggleLabel = document.querySelector(".toggle-label");
const bodySelector = document.querySelector("body");
const invertSelector = document.querySelectorAll(".invert");
const imageId = document.getElementById("image");

toggleSelector.addEventListener("click", () => {
    bodySelector.classList.toggle("dark-mode");
    toggleSelector.classList.toggle("toggle-switch");
    toggleLabel.innerHTML = toggleLabel.innerHTML === "Modo noturno" ? "Modo normal" : "Modo noturno";
    invertSelector.forEach((node) => node.classList.toggle("dark-mode"));
    imageId.src = toggleLabel.innerHTML !== "Modo noturno" ? "./images/moon.png" : "./images/sun.png";
});
/* FIM */

