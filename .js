console.log("condicionais");


const listaDeDestinos = new Array(
    "são paulo",
    "rio de janeiro",
    "salvador"

)
console.log(listaDeDestinos)
listaDeDestinos.push("curitiba")// adiciona um item na lista sem ser pelo consutor

console.log(listaDeDestinos);


const idadeComprador = 15;
const estaAcompanhada = true

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("comprador maior de idade")
    listaDeDestinos.splice(1, 1) // removeu o item e comprou
}
else if (estaAcompanhada == true) {

    console.log("comprador está acompanhado")
    listaDeDestinos.splice(1, 1)
}
else {
    console.log("Não é maior de idade e não posso vender")


}

console.log(listaDeDestinos)
