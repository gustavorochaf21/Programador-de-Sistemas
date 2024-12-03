var x = 576
var cedulas100 = 0

    function cedulas(num){
        if(num>100){
            for(var centenas = 0; num > 100; centenas++, num -= 100);
            cedulas100 = centenas
        }
        if(num > 50 ){
            for(var cinquentas = 0; num > 50; cinquentas++, num -=50,console.log(num));
            cedulas50 = cinquentas
        }
        if(num > 20){
            for(var vintes = 0; num > 20; vintes++, num -= 20,console.log(num))
            cedulas20 = vintes    
            }
        if(num > 10){
            for(var dezenas = 0; num > 10; dezenas++, num -= 10,console.log(num))
            cedulas10 = dezenas    
            }
        if(num > 5){
            for(var cincos = 0; num > 5; cincos++, num -= 5,console.log(num))
            cedulas5 = cincos    
            }
        if(num > 1){
            for(var uns = 0; num > 1; uns++, num -= 1,console.log(num))
            cedulas1 = uns    
            }
    }
    
    cedulas(x)
    console.log(cedulas100)
    