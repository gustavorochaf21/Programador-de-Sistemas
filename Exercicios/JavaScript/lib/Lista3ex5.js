function qualeoMenor(numero1,numero2,numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return numero1
    } else if (numero2 > numero3){
        return numero2
    } else {
        return numero3
    }
        
}
console.log(qualeoMenor(3,7,5))
console.log(qualeoMenor(-1,-5,-3))
console.log(qualeoMenor(8,2,10))