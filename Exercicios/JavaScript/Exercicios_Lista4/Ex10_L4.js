var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7]

import { somar } from "../lib/biblioteca.js"
import { verificaPar } from "../lib/biblioteca.js"

console.log(cenario1.filter(verificaPar).reduce(somar, 0))
console.log(cenario2.filter(verificaPar).reduce(somar, 0))
console.log(cenario3.filter(verificaPar).reduce(somar, 0))