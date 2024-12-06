var cenario1 = [1, 2, 4, 5, 7, 8, 10, 11]
var cenario2 = [10, 70, 30, 50]
var cenario3 = [29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28]
var cenario4 = []

function calcularMedia(lista) {
    if (lista.length == 0) return 0;
    
    var soma = 0
    
    for (var i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    var media = soma / lista.length


    return media
}
console.log(calcularMedia(cenario1))
console.log(calcularMedia(cenario2))
console.log(calcularMedia(cenario3))
console.log(calcularMedia(cenario4))