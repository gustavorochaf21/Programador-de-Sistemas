function VerificarPalindromo(texto){
    if(texto.split('').reverse().join('') === texto){
        return true
    } else{ return false}
}

var cenario1 = "racecar"
var cenario2 = "hello"
var cenario3 = "madam"

console.log(VerificarPalindromo(cenario1))
console.log(VerificarPalindromo(cenario2))
console.log(VerificarPalindromo(cenario3))