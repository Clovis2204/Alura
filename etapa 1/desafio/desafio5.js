let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let fazerLista = "sim"

while(fazerLista == "sim"){

    let fazerLista = prompt ("Gostaria de adcionar uma comida na sua lista de compras? Responda 'sim' ou 'não'")

    if (fazerLista == "não"){
        console.log(listaDeCompras)
        break
    }
        
    }

    let produto = prompt ("Qual produto você gostaria de incluir na lista?")

    let tipo = prompt("Em qual das categorias a seguir o produto se encaixa?\nFrutas, Laticínios, Congelados, Doces, Outros.")

    if (tipo == "frutas"){
        frutas.push(produto);
    }else if (tipo == "laticinios"){
        laticinios.push(produto);
    }else if (tipo == "congelados"){
        congelados.push(produto);
    }else if (tipo == "doces"){
        doces.push(produto);
    }else{
        outros.push(produto);
    }

    let listaDeCompras = `Lista de Compras\nFrutas:${frutas}\nLaticínios:${laticinios}\nCongelados:${congelados}\nDoces:${doces}\nOutros:${outros}`