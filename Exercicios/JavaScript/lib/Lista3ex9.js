function determinarNOTA(nota){
    if(nota >= 90){
        return "A"
    } else if (nota >= 80 && nota <= 89){
        return "B"
    } else if (nota >= 70 && nota <= 79){
        return "C"
    } else if (nota >= 60 && nota <= 69){
        return "D"
    } else {
        return "F"
    }
}
console.log(determinarNOTA(90))
console.log(determinarNOTA(75))
console.log(determinarNOTA(60))
console.log(determinarNOTA(0))
console.log(determinarNOTA(59))
console.log(determinarNOTA(89))
console.log(determinarNOTA(69))
console.log(determinarNOTA(79))
console.log(determinarNOTA(99))