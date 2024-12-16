import { somar } from "../biblioteca.js"

  var a = Number(prompt("Qual o primeiro numero?"))
  var b = Number(prompt("Qual o segundo numero?"))
  
    document.write(`A SOMA ENTRE ${a} e ${b} é igual a ${somar(a,b)}`)