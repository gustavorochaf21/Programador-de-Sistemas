function multiplicador(numero1,numero2){
    return numero1 * numero2
  }
  var numero1 = Number(prompt("Qual o primeiro numero?"))
  var numero2 = Number(prompt("Qual o segundo numero?"))
  
  document.write(`A multiplicacao entre ${numero1} e ${numero2} e igual a: ${multiplicador(numero1,numero2)}`)