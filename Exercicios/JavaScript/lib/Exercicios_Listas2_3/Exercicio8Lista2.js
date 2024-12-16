    function calcularpotencia(base,expoente){
        return base ** expoente
    }
    
    var base = Number(prompt("Qual a base?"));
    var expoente = Number(prompt("Qual o expoente?"));

   document.write(calcularpotencia(base,expoente));
    console.log(calcularpotencia(0.25,2));
