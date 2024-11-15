 function media(n1,n2,n3){
    return (n1+n2+n3)/3
 }
 var n1 = Number(prompt("Qual o primeiro numero?"))
var n2 = Number(prompt("Qual o segundo numero?"))
var n3 = Number(prompt("Qual o terceiro numero?"))

document.write(`A media entre ${n1}, ${n2} e ${n3} é igual a ${media(n1,n2,n3)}`)