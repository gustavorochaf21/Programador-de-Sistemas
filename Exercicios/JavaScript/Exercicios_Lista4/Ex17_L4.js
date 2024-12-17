function VerificarApenasNumeros(Texto){
    return !isNaN(Texto)
}

var cenario1 = "12345"
var cenario2 = "abc123"
var cenario3 = "67890"




console.log(VerificarApenasNumeros(cenario1))
console.log(VerificarApenasNumeros(cenario2))
console.log(VerificarApenasNumeros(cenario3))