var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let idade = lines[0]

for (var anos = 0; idade >= 365;anos++) idade -= 365;
for (var meses = 0; idade >= 30;meses++) idade -= 30;
for (var dias = 0; idade >= 1;dias++) idade -= 1;

console.log(`${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`)
