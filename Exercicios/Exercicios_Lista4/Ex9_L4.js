var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7], cenario4 = [0], cenario5 = []

function somarArray(lista) {
    var soma = 0
    for (var i = 0; i < lista.length; i++) {
        soma += lista[i];
    }

    return soma
}

console.log(somarArray(cenario1))
console.log(somarArray(cenario2))
console.log(somarArray(cenario3))
console.log(somarArray(cenario4))
console.log(somarArray(cenario5))