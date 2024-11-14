function descobrirResto(dividendo,divisor){
    return dividendo % divisor
}
    var dividendo = Number(prompt("Qual o dividendo?"))
    var divisor = Number(prompt("Qual o divisor?"))
    
    document.write(`O resto da divisão entre ${dividendo} e ${divisor} é: ${(descobrirResto(dividendo,divisor))}`)