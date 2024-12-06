var cenario1 = 123
var cenario2 = 456789
var cenario3 = 8423416542984721

function somarOsAlgarismos(num) {
    var lista = num.toString().split('')
    var soma = 0
    for (var i = 0; i < lista.length; i++) soma += Number(lista[i]);
    
    return soma
}
console.log(somarOsAlgarismos(cenario1))
console.log(somarOsAlgarismos(cenario2))
console.log(somarOsAlgarismos(cenario3))