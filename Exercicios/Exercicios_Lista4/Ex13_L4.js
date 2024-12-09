var cenario1 =  [1, 2, 3, 4, 5]
var cenario2 = [-1, -2, -3, -4, -5]
var cenario3 =  [10, 20, 30, 40, -50]
var cenario4 = []



function MaiorNumero(lista){
    return Math.max.apply(null,lista)
}
console.log(MaiorNumero(cenario1))
console.log(MaiorNumero(cenario2))
console.log(MaiorNumero(cenario3))
console.log(MaiorNumero(cenario4))