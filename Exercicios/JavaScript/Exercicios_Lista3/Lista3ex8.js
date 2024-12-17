function vogalOUconsoante(letra){
    if (letra == "a" || letra == "A" || letra == "e" ||letra== "E" ||letra== "i" ||letra== "I" ||letra== "o" ||letra== "O" ||letra== "u" ||letra== "U"){
        return "vogal"
    } else {
        return "consoante"
    }
}
console.log(vogalOUconsoante("a"))
console.log(vogalOUconsoante("b"))
console.log(vogalOUconsoante("e"))
console.log(vogalOUconsoante("x"))
console.log(vogalOUconsoante("y"))