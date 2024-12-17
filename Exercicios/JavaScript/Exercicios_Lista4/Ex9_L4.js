var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7], cenario4 = [0], cenario5 = []

import { somar } from "../lib/biblioteca.js"

console.log(cenario1.reduce(somar, 0))
console.log(cenario2.reduce(somar, 0))
console.log(cenario3.reduce(somar, 0))
console.log(cenario4.reduce(somar, 0))
console.log(cenario5.reduce(somar, 0))