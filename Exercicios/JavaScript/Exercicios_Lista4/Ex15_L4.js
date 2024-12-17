function InverterTexto(texto){
    return texto.split('').reverse().join('')
}
var cenario1 = "hello"
var cenario2 = "world"
var cenario3 = "abc"


console.log(InverterTexto(cenario1))
console.log(InverterTexto(cenario2))
console.log(InverterTexto(cenario3))