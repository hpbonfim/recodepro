fetch('produtos.json').then(res => res.json())
    .then(data => console.log(data))
    
/* LISTA DE CATEGORIAS */
let listaCategorias = () => {
    return listaProdutos.map(objetos => {
        
    })
}

// console.log(listaCategorias)
/* FIM LISTA DE CATEGORIAS */



let verDetalhes = (itemId) => {
    alert(itemId)
}