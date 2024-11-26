// function qualEMenor(numero,numero2,numero3){
//     if (numero < numero2 && numero < numero3){
//         return `${numero}`
//     } else if (numero2 < numero3){
//         return `${numero2}`
//     } else {
//         return `${numero3}`
//     }

// }
// console.log(qualEMenor(3,7,5))
// console.log(qualEMenor(-1,-5,-3))
// console.log(qualEMenor(8,10,2))

function qualEMenor(a,b,c){

    let menor = a;
    
    if (menor > b) menor = b
    if (menor > c) menor = c
    
    return menor;
}
console.log(qualEMenor(3,7,5))
console.log(qualEMenor(-1,-5,-3))
console.log(qualEMenor(8,10,2))