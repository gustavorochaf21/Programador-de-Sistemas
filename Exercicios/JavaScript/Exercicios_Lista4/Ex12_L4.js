import { somar } from "../lib/biblioteca.js"

var cenario1 = 123, cenario2 = 456789, cenario3 = 8423416542984721
console.log(cenario1.toString().split("").map(Number).reduce(somar))
console.log(cenario2.toString().split("").map(Number).reduce(somar))
console.log(cenario3.toString().split("").map(Number).reduce(somar))

