
export function verificarAnoBissexto(ano){
    if( (ano%400 == 0) || (ano%4==0 && ano%100!= 0) ) return true
        else return false
}

export function tabuada(numero) {
    for (var k = 0; k <= 10; k++) {
        console.log(`${numero} x ${k} = ${numero * k}`)
    }
    console.log()
    return
}