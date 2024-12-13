var cenario1 = 123, cenario2 = 456789, cenario3 = 8423416542984721

console.log(cenario1.toString().split("").map(Number).reduce((A, B) => A + B))
console.log(cenario2.toString().split("").map(Number).reduce((A, B) => A + B))
console.log(cenario3.toString().split("").map(Number).reduce((A, B) => A + B))

// const soma = (A, B) => A + B;