const produtos = [
    {nome: "Caneta", qtde: 20, valor: 2.50},
    {nome: "Caderno", qtde: 10, valor: 15.00},
    {nome: "Tesoura", qtde: 35, valor: 5.50},
    {nome: "Impressora", qtde: 2, valor: 699.99},
    {nome: "Celular", qtde: 3, valor: 1500},
    {nome: "Tenis", qtde: 1, valor: 2000},
    {nome: "Caneca", qtde: 0, valor: 35},
]


// percorrer o array de produtos e retornar um novo array
// com 3 produtos escolhidos aleatoriamente
// e não pode haver repetição
// includes

function novoArrayProdutos(iteracoes){
    
    if (iteracoes > produtos.length) return "Error";

    let numeros = [];
    let prods = [];

    while (numeros.length < iteracoes){
        let numero = Math.floor(Math.random()*produtos.length);
        if(!numeros.includes(numero)){
            numeros.push(numero);
        }
    }
    
    for (let numero of numeros){
        prods.push(produtos[numero]);
    }

    return prods;
    
}


function novoArrayProdutos2(array, iteracoes){
    
    if (iteracoes > array.length) return "Error";

    let prods = [];

    while (prods.length < iteracoes){
        let numero = Math.floor(Math.random()*produtos.length);
        if(!prods.includes(array[numero])){
            prods.push(array[numero]);
        }
    }

    return prods;
    
}

console.log(novoArrayProdutos(5));
console.log(novoArrayProdutos2(produtos, 5));

