function verificarAnoBissexto(ano){
    if( (ano%400 == 0) || (ano%4==0 && ano%100!= 0) ){
        return true
    } else {
        return false
    }
}
console.log(verificarAnoBissexto(2020))
console.log(verificarAnoBissexto(2024))
console.log(verificarAnoBissexto(1999))
console.log(verificarAnoBissexto(2014))
console.log(verificarAnoBissexto(2025))
console.log(verificarAnoBissexto(1900))
console.log(verificarAnoBissexto(2000))
console.log(verificarAnoBissexto(2100))