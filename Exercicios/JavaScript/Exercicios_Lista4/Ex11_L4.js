var cenario1 = [1, 2, 4, 5, 7, 8, 10, 11]
var cenario2 = [10, 70, 30, 50]
var cenario3 = [29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28]
var cenario4 = []

var media = (A, B, index, lista) => A + B / lista.length

console.log(Math.floor(cenario1.reduce(media, 0)))
console.log(Math.floor(cenario2.reduce(media, 0)))
console.log(Math.floor(cenario3.reduce(media, 0)))
console.log(Math.floor(cenario4.reduce(media, 0)))