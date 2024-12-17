
// LISTA 2 FUNÇÕES
export function OlaNome(nome){
    return `Ola, ${nome}`
}

export function somar(A,B){
    return A + B;
}

export function multiplicador(numero1,numero2){
    return numero1 * numero2
}

export function media(n1,n2,n3){
    return (n1+n2+n3)/3
 }

export function divisaointeira(n1,n2){
    return n1/n2
}

export function nomecompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`
}

export function calcularpotencia(base,expoente){
    return base ** expoente
}

export function descobrirResto(num1,num2){
    return num1 % num2
}




// FUNÇÕES LISTA 3


export function avaliarNotasDeEscola(x) {

    if (x < 0 || x > 10) {
        return `NOTA INVALIDA, POR FAVOR DIGITE A NOTA DE 0 Á 10.`
    }

    if (x >= 7) {
        return `Aprovado`
    }

    return `Reprovado`
}

export function ImparOuPar(num){
    return num % 2 === 0 ? "par": "impar"
}