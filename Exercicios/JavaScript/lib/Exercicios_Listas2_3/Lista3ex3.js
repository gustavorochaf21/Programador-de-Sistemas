function PositivoOuNegativo(numero){
    if (numero > 0){
        return `Positivo`
    } else if (numero < 0){
        return `Negativo`
    } else {
        return `Zero`
    }
        return
}
console.log(PositivoOuNegativo(5))
console.log(PositivoOuNegativo(-3))
console.log(PositivoOuNegativo(0))
console.log(PositivoOuNegativo(1110))
console.log(PositivoOuNegativo(-9877654321))