function qualEmaior(numero,numero2,numero3){
    if (numero > numero2 && numero > numero3){
        return `${numero}`
    } else if (numero2 > numero3){
        return `${numero2}`
    } else {
        return `${numero3}`
    }

}
console.log(qualEmaior(3,7,5))
console.log(qualEmaior(-1,-5,-3))
console.log(qualEmaior(8,2,10))