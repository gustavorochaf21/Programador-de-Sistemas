var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7]

function somarOsPares(lista) {
    var soma = 0
    for (var i = 0; i < lista.length; i++) {
        if(lista[i] % 2 === 0){
        soma += lista[i];
        }
    }

    return soma
}

console.log(somarOsPares(cenario1))
console.log(somarOsPares(cenario2))
console.log(somarOsPares(cenario3))