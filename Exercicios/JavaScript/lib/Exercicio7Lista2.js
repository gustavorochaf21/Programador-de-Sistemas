function nomecompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`
}
var nome = prompt("Qual o seu primeiro nome?")
var sobrenome = prompt("Qual o segundo numero?")

document.write(`Seja bem-vindo(a) ${nomecompleto(nome,sobrenome)}!!!`)