function imparoupar(x){
    if (x % 2 == 0){
        return `Par`
    }
    return `Ímpar`
}
console.log(imparoupar(4)) //Par
console.log(imparoupar(7)) //Impar
console.log(imparoupar(0)) //Par
console.log(imparoupar(-5)) //Impar