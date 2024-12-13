const { log } = require('console');

var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n').map(Number);

const filtraPositivo = (numero) => numero > 0

log(`${lines.filter(filtraPositivo).length} valores positivos`)