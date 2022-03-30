const calcularPension = (promedioSalario = 0, semanasCotizadas = 0) =>{
    const factorBasico = 0.20;
    const factorAplicacion = 0.010;
    const semanaAnual = 52;

    // primer caso
    if(semanasCotizadas < 750){
        if(semanasCotizadas >= 250 && semanasCotizadas <= 349){
            return 'Usted puede optar a una pensión minima de: <div style="color:red"><strong>C$ 1,910</strong></div>'
        }else if(semanasCotizadas >= 350 && semanasCotizadas <= 449){
            return 'Usted puede optar a una pensión minima de: <div style="color:red"><strong>C$ 2,356</strong></div>'
        }else if(semanasCotizadas >= 450 && semanasCotizadas <= 549){
            return 'Usted puede optar a una pensión minima de: <div style="color:red"><strong>C$ 2,884</strong></div>'
        }else if(semanasCotizadas >= 550 && semanasCotizadas <= 649){
            return 'Usted puede optar a una pensión minima de: <div style="color:red"><strong>C$ 3,290</strong></div>'
        }else if(semanasCotizadas >= 650 && semanasCotizadas < 750){
            return 'Usted puede optar a una pensión minima de: <div style="color:red"><strong>C$ 3,656</strong></div>'
        }else{
            return '<b>Lo sentimos, las semanas que usted cotizó no son suficnetes para optar a una pensión de vejez ni a pensión reducida</b>';
        }
    }else{
        if(semanasCotizadas >= 750){
            let excesoSemanas = semanasCotizadas - 150;
            let semanas = excesoSemanas / semanaAnual;
            let factorAnual = semanas * factorAplicacion;
            let tasaReemplazo = factorAnual + factorBasico;
            let pension = tasaReemplazo * promedioSalario;
            
            // que no sea menor de 5000
        
            if(pension < 5000){
                pension = 5000;
            }else if(pension >= 53811.56){
                pension = 53811.56
            }
        
            return `Usted obtuvo el <span style="color:red; font-weight:bolder;">${(tasaReemplazo*100).toFixed(2)}%</span> de su salario <br> Su pensión es de: <span style="color:red;font-weight:bolder">C$ ${pension.toFixed(2)}</<span>`; 
        }else{
            return '<strong>La cantidad de semanas cotizadas no es suficiente para aplicar a una pensión</strong>';
        }
    }
}

function limpiarControles(){
    const semanas = document.getElementById("semanas");    
    const salario = document.getElementById("salario");
    semanas.value = '';
    salario.value = '';
}
console.log(calcularPension(150,1560))

const onClickPension = () =>{
    const semanas = document.getElementById("semanas");
    const semanaCot = semanas.value;
    const salario = document.getElementById("salario");
    const salarioCot = salario.value;

    const valorPension = calcularPension(salarioCot, semanaCot);

    const pensionFinal = document.getElementById("pension");
    pensionFinal.innerHTML = valorPension;
    limpiarControles();
    

}

/*250-349 semanas: 1910
  350-449: 2356
  450-549: 2884
  550-649:3290
  650-749:3656
*/