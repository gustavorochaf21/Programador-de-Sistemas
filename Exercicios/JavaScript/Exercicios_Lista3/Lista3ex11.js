function fatorial(N){
    var fatoria = N
    if (N === 0 || N===1){
        return 1
    } while (N > 1){
        N--;
        fatoria *= N;
    }
    return fatoria
}    
console.log(fatorial(5))
console.log(fatorial(0))
console.log(fatorial(3))
console.log(fatorial(12))