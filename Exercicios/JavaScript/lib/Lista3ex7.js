function verificarAnoBissexto(ano){
    if( (ano%400 == 0) || (ano%4==0 && ano%100!= 0) ) return true
        else return false
    }

console.log(verificarAnoBissexto(2020)) // true
console.log(verificarAnoBissexto(2024)) // true
console.log(verificarAnoBissexto(1999)) // false
console.log(verificarAnoBissexto(2014)) // false
console.log(verificarAnoBissexto(2025)) // false
console.log(verificarAnoBissexto(1900)) // false
console.log(verificarAnoBissexto(2000)) // true
console.log(verificarAnoBissexto(2100)) // false
console.log(verificarAnoBissexto(1600)) // true