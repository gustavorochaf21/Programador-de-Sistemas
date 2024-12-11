var cenario1 = [1, 2, 3, 4, 5], cenario2 = [2, 4, 6, 8], cenario3 = [1, 3, 5, 7]

 var filtraPar = (num) => num % 2 === 0;
 var soma = (A,B) => A + B ;

console.log(cenario1.filter(filtraPar).reduce(soma, 0))
console.log(cenario2.filter(filtraPar).reduce(soma, 0))
console.log(cenario3.filter(filtraPar).reduce(soma, 0))