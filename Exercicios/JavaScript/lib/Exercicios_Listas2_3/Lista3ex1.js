function avaliar(x) {

    if (x < 0 || x > 10) {
        return `NOTA INVALIDA, POR FAVOR DIGITE A NOTA DE 0 Á 10.`
    }

    if (x >= 7) {
        return `Aprovado`
    }

    return `Reprovado`
}

console.log(avaliar(10))
console.log(avaliar(7))
console.log(avaliar(6.95))
console.log(avaliar(8.8))
console.log(avaliar(0))
console.log(avaliar(2.725))