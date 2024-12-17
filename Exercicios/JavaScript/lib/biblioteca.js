
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

export function mediade3numeros(n1,n2,n3){
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

export function verificaPar(num){ 
return num % 2 === 0;
}


export function ImparOuPar(num){
    return verificaPar(num) ? "par": "impar"
}


export function PositivoOuNegativo(numero){
    if (numero > 0){
        return `Positivo`
    } else if (numero < 0){
        return `Negativo`
    } else {
        return `Zero`
    }       
}

export function qualEMenor(a,b,c){
    return Math.min(a,b,c)
}

export function qualEMaior(a,b,c){
    return MaiorNumero([a,b,c])
}

export function MaiorNumero(lista){
    return Math.max.apply(null,lista)
}

export function verificarmultiplo(n1,n2){
    if (n1 % n2 == 0){
        return true
    } else {
       return false
    }
}


export function verificarAnoBissexto(ano){
    if(ano % 400 ===0) return true
    if(ano % 100 ===0) return false
    if(ano % 4 === 0) return true

    return false;
}

export function vogalOUconsoante(letra){
    if (letra == "a" || letra == "A" || letra == "e" ||letra== "E" ||letra== "i" ||letra== "I" ||letra== "o" ||letra== "O" ||letra== "u" ||letra== "U"){
        return "vogal"
    } else {
        return "consoante"
    }
}

export function determinarNOTA(nota){
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

export function somarATEn(N){
    var x=0, soma =0;
    while (x <= N){
        soma += x;
        x++;
    }
return soma
}

export function fatorial(N){
    var fatoria = N
    if (N === 0 || N===1){
        return 1
    } while (N > 1){
        N--;
        fatoria *= N;
    }
    return fatoria
}   

export function tabuada(n) {
    for (var x = 0; x <= 10; x ++ ) {
   var n2 = n * x
  let linha = `${n} x ${x} = ${n2}`
  console.log(linha)
 }}

 export function tabuadaCompleta() {
    for (var x = 1; x <= 10; x ++ ) {
       for (var n = 1; n <= 10; n++) {
     var n2 = n * x
     let linha = `${x} x ${n} = ${n2}`
     console.log(linha)
    }
    }
  }

  export function encontrarPRIMO(NP){
    if (NP < 2) return false;
    for (var div = 2; div < NP;div++){
        if (NP % div ===0)
            return false
        
    }
    return true
} 

export const media = (A, B, index, lista) => A + B / lista.length;