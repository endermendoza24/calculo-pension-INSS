const calcularPension = (promedioSalario = 0, semanasCotizadas = 0) =>{
    const factorBasico = 0.20;
    const factorAplicacion = 0.010;
    const semanaAnual = 52;

    let excesoSemanas = semanasCotizadas - 150;
    let semanas = excesoSemanas / semanaAnual;
    let factorAnual = semanas * factorAplicacion;
    let tasaReemplazo = factorAnual + factorBasico;
    let pension = tasaReemplazo * promedioSalario;
    
    // que no sea menor de 5000

    if(pension < 5000){
        pension = 5000;
    }

    return pension.toFixed(2);
}

console.log(calcularPension(150,1560))

const onClickPension = () =>{
    const semanas = document.getElementById("semanas");
    const semanaCot = semanas.value;
    const salario = document.getElementById("salario");
    const salarioCot = salario.value;

    const valorPension = calcularPension(salarioCot, semanaCot);

    let porcentajePension = (valorPension * 100) / salarioCot;
    
    const pensionFinal = document.getElementById("pension");
    pensionFinal.innerHTML = `Usted obtuvo el <span style="color:red">${porcentajePension.toFixed(2)}%</span> de su salario <br> Su pensión es de: <span style="color:red;">C$ ${valorPension}</<span>`;
}

