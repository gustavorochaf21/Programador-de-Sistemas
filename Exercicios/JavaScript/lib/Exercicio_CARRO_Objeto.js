var carro1 = {
    marca: "Volkswagen",
    modelo: "Fusca",
    cor: "Preto",
    versao: "1600",
    Velocidade: 0,
    acelerar: function () {
        this.Velocidade = Math.min(this.Velocidade + 5, 80)
    },
    frear: function () {
        this.Velocidade = Math.max(this.Velocidade - 13, 0)
    },
    Imprimir_ficha_tecnica: function () {
        return console.table(this)
    }
}
var carro2 = {
    modelo: "Porsche",
    cor: "Verde",
    Velocidade: 0,
    acelerar: function () {
        this.Velocidade = Math.min(this.Velocidade + 5, 110)
    }, frear: function () {
        this.Velocidade = Math.max(this.Velocidade - 13, 0)
    },
}
console.log(carro1.Imprimir_ficha_tecnica())

while (carro1.Velocidade < 80) carro1.acelerar()
console.log(carro1.Velocidade)

while (carro1.Velocidade > 60) {
    carro1.frear()
} console.log(carro1.Velocidade)

while (carro1.Velocidade > 0) {
    carro1.frear()
} console.log(carro1.Velocidade)



console.log("##TESTE CARRO 2")

while (carro2.Velocidade < 110) carro2.acelerar();
console.log(carro2.Velocidade)

while (carro2.Velocidade > 80) carro2.frear();
console.log(carro2.Velocidade)

while (carro2.Velocidade < 110) carro2.acelerar();
console.log(carro2.Velocidade)




