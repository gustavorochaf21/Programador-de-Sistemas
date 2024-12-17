var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7], cenario4 = [0], cenario5 = []

var somarArray = (A, B) => A + B;

console.log(cenario1.reduce(somarArray, 0))
console.log(cenario2.reduce(somarArray, 0))
console.log(cenario3.reduce(somarArray, 0))
console.log(cenario4.reduce(somarArray, 0))
console.log(cenario5.reduce(somarArray, 0))