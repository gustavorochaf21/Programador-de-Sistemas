let dinheiro = lines[0]
let dinheiro1 = lines[0]

for (var cedulas100 = 0; dinheiro >= 100;cedulas100++) dinheiro-=100; 
for (var n50 = 0; dinheiro >= 50;n50++) dinheiro-=50; 
for (var n20 = 0; dinheiro >= 20;n20++) dinheiro-=20; 
for (var n10 = 0; dinheiro >= 10;n10++) dinheiro-=10; 
for (var n5 = 0; dinheiro >= 5;n5++) dinheiro-=5; 
for (var n2 = 0; dinheiro >= 2;n2++) dinheiro-=2;

for (var moedas1 = 0; dinheiro >= 1;moedas1++) dinheiro-=1; 
for (var moedas050 = 0; dinheiro >= 0.50;moedas050++) dinheiro-=0.50; 
for (var moedas025 = 0; dinheiro >= 0.25;moedas025++) dinheiro-=0.25; 
for (var moedas010 = 0; dinheiro >= 0.10;moedas010++) dinheiro-=0.10; 
for (var moedas005 = 0; dinheiro >= 0.05;moedas005++) dinheiro-=0.05; 
for (var moedas001 = 0; dinheiro >= 0.01;moedas001++) dinheiro-=0.01; 

console.log(`${dinheiro1}
${cedulas100} nota(s) de R$ 100,00
${n50} nota(s) de R$ 50,00
${n20} nota(s) de R$ 20,00
${n10} nota(s) de R$ 10,00
${n5} nota(s) de R$ 5,00
${n2} nota(s) de R$ 2,00
${moedas1} moeda(s) de R$ 1,00
${moedas050} moeda(s) de R$ 0,50
${moedas050} moeda(s) de R$ 0,50
${moedas050} moeda(s) de R$ 0,10
${moedas050} moeda(s) de R$ 0,05
${moedas050} moeda(s) de R$ 0,01`)