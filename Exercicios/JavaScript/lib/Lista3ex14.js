function encontrarPRIMO(NP){
    if (NP < 2) return `false`;
    for (var div = 2; div < NP;div++){
        if (NP % div ===0)
            return `false`
        
    }
    return `true`
} 
console.log(encontrarPRIMO(7)) //true
console.log(encontrarPRIMO(10)) // false
console.log(encontrarPRIMO(13)) // true
console.log(encontrarPRIMO(0)) // false
console.log(encontrarPRIMO(1)) // false
console.log(encontrarPRIMO(2)) // true
console.log(encontrarPRIMO(327)) // false 
console.log(encontrarPRIMO(847)) // false
console.log(encontrarPRIMO(1573)) // false
console.log(encontrarPRIMO(31)) // true
console.log(encontrarPRIMO(-3)) // false
console.log(encontrarPRIMO(-31))  // false
