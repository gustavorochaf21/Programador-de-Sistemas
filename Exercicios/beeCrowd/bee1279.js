var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.trim().split('\n');


function verificarAnoBissextoEFestivais(ano){
if (ano%400 === 0 && ano%100!=0 && ano%55 === 0){
    console.log("This is bulukulu festival year.")
} else if (ano%400 && ano%100!=0) {
    console.log("This is leap year.")
} else if (ano% 15 === 0){
    console.log("This is huluculu festival year.")
} else {
    console.log("This is an ordinary year.")
}
}

console.log(lines.reduce(verificarAnoBissextoEFestivais))
    

