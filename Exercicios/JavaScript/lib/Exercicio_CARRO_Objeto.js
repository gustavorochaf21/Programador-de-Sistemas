var carro1 = {
    modelo: "Fusca",
    cor: "Preto",
    Velocidade: 0,
}
var carro2 = {
    modelo: "Porsche",
    cor: "Verde",
    Velocidade: 0,
}



    function acelerar(carro){
    carro.Velocidade += 5   
}

function frear(carro){
    carro.Velocidade -= 13
    if(carro.Velocidade < 0){ 
        carro.Velocidade=0
    }}

    while(carro1.Velocidade < 80)acelerar(carro1)
    console.log(carro1.Velocidade)
    
    while(carro1.Velocidade > 60){
        frear(carro1)
    }       console.log(carro1.Velocidade)

    while (carro1.Velocidade > 0){
        frear(carro1)
    }       console.log(carro1.Velocidade)

console.log("##TESTE CARRO 2")

    while(carro2.Velocidade < 110) acelerar(carro2)
        console.log(carro2.Velocidade)

    while(carro2.Velocidade > 80) frear(carro2)
        console.log(carro2.Velocidade)

    while(carro2.Velocidade > 110) acelerar(carro2);
         if (carro2.Velocidade > 110) carro2.Velocidade = 110
         console.log(carro2.Velocidade)




