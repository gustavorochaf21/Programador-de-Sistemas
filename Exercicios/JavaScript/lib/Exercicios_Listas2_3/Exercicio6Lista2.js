function divisaointeira(n1,n2){
    return n1/n2
}
var n1 = parseInt(prompt("Qual o primeiro numero?"))
var n2 = parseInt(prompt("QUal o segundo numero?"))

document.write(`A divisão entre ${n1} e ${n2} é igual a ${divisaointeira(n1,n2)}`)