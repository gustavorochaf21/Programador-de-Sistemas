var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = Number(input);

const DDD = {
    61: "Brasilia",
    71: "Salvador",
    11: "Sao Paulo",
    21: "Rio de Janeiro",
    32: "Juiz de Fora",
    19: "Campinas",
    27: "Vitoria",
    31: "Belo Horizonte",
}
if(Object.keys(DDD).includes(lines)){
console.log(DDD.lines)
} else console.log("DDD nao cadastrado")