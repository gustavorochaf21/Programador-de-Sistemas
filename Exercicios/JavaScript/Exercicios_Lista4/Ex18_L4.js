function ContarVogais(texto){
    const vogais = texto.match(/[aeiou]/gi)
    return vogais ? vogais.length : 0;
}

var cenario1 = "hello"
var cenario2 = "javascript"
var cenario3 = "aeiou"


console.log(ContarVogais(cenario1))
console.log(ContarVogais(cenario2))
console.log(ContarVogais(cenario3))


