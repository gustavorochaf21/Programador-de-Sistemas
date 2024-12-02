var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let a = lines[0] //NUMERO DO FUNCIONARIO

let b = lines[1]
let c = lines[2]
 
var salario = b * c
salario = salario.toFixed(2)

console.log(`NUMBER = ${a}\nSALARY = U$ ${salario}`)