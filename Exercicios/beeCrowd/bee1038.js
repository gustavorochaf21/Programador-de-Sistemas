var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

let produto = lines[0]
let quantidade = lines[1]
var total = 0

switch(produto){
    case `1`:
        total = 4.00 * quantidade
        break;
    case `2`:
        total = 4.50 * quantidade
        break;
    case `3`:
        total = 5.00 * quantidade
        break;
    case `4`:
        total = 2.00 * quantidade
        break;
    case `5`:
        total = 1.50 * quantidade
        break;
}
console.log(`Total: R$ ${total.toFixed(2)}`)