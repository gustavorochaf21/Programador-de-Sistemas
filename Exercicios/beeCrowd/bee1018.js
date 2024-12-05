var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var N = lines[0]

const cedulas = [100, 50, 20, 10, 5, 2, 1]
console.log(N)

for(let i=0; i < cedulas.length; i++){
    let nota = cedulas[i];

    var count = Math.floor(N/nota); N %= nota;
    console.log(`${count} nota(s) de R$ ${nota},00`);
}


// let N = lines[0]
// let dinheiro = lines[0]

// var n100 = Math.floor(N/100); N %= 100
// var n50 = Math.floor(N/50); N %= 50
// var n20 = Math.floor(N/20); N %= 20
// var n10 = Math.floor(N/10); N %= 10
// var n5 = Math.floor(N/5); N %= 5
// var n2 = Math.floor(N/2); N %= 2
// var n1 = Math.floor(N/1); N %= 1


// console.log(`${dinheiro}
// ${n100} nota(s) de R$ 100,00
// ${n50} nota(s) de R$ 50,00
// ${n20} nota(s) de R$ 20,00
// ${n10} nota(s) de R$ 10,00
// ${n5} nota(s) de R$ 5,00
// ${n2} nota(s) de R$ 2,00
// ${n1} nota(s) de R$ 1,00`)