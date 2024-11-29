function SepararAsStrings(String1,Separador){
    return String1.split(Separador)
}
console.log(SepararAsStrings(`O rato roeu a roupa do rei de Roma`,' '))
console.log(SepararAsStrings(`João,Maria,José`,','))
console.log(SepararAsStrings(`fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com`,';'))
console.log(SepararAsStrings(`Nome -- Sobrenome -- Idade -- País`,' -- '))
console.log(SepararAsStrings(`/usr/local/bin`,'/'))
console.log(SepararAsStrings(`Javascript`,''))
console.log(SepararAsStrings(`O sol está brilhando. O céu está azul. É um ótimo dia!`,'.'))
console.log(SepararAsStrings(`15/08/2024`,'/'))
console.log(SepararAsStrings(`14:35:20`,':'))
console.log(SepararAsStrings(`Primeira linha\nSegunda linha\n Terceira linha`,'\n'))
console.log(SepararAsStrings(`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore`,'\n'))
console.log(SepararAsStrings(`Linha única sem quebras`,))
console.log(SepararAsStrings(`Primeira linha de um texto.
    Segunda linha usando template strings.
    Terceira linha com mais detalhes`,'\n'))
console.log(SepararAsStrings(`
    Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore`,'\n'))
console.log(SepararAsStrings(`
    Texto com linhas múltiplas e
    uso de templates strings
    para separação.
    `,'\n'))