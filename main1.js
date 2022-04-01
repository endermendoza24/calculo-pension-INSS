//Constantes segun la ley de Nicaragua

const factorBasico = 0.2;
const factorAplicacion = 0.01;
const semanaAnual = 52;
let pension = 0;

const pensionReducida = (semanasCotizadas) => {
  if (semanasCotizadas >= 250 && semanasCotizadas <= 349) {
    pension = 1910;
  } else if (semanasCotizadas >= 350 && semanasCotizadas <= 449) {
    pension = 2356;
  } else if (semanasCotizadas >= 450 && semanasCotizadas <= 549) {
    pension = 2884;
  } else if (semanasCotizadas >= 550 && semanasCotizadas <= 649) {
    pension = 3290;
  } else if (semanasCotizadas >= 650 && semanasCotizadas <= 749) {
    pension = 3656;
  } else {
    return "<b>Las semanas que usted cotizó no son suficientes para optar a una pensión. <br>El mínimo es 250 semanas</b>";
  }

  return `<b>Usted puede optar a una pensión reducida de: <span style="color:red; font-weight:700;">C$ ${pension}.00</span></b>`;
};

const pensionVejez = (promedioSalario = 0, semanasCotizadas = 0) => {
  let excesoSemanas = semanasCotizadas - 150;
  let semanas = excesoSemanas / semanaAnual;
  let factorAnual = semanas * factorAplicacion;
  let tasaReemplazo = factorAnual + factorBasico;
  let pension = tasaReemplazo * promedioSalario;

  //que no sea menor de 5000

  if (pension < 5000) {
    pension = 5000;
  } else if (pension >= 53811.56) {
    pension = 53811.56;
  }

  return `<b>Usted obtuvo el <span style="color:red; font-weight:bolder;">${(
    tasaReemplazo * 100
  ).toFixed(
    2
  )}%</span> de su salario <br> Su pensión es de: <span style="color:red;font-weight:bolder">C$ ${pension.toFixed(
    2
  )}</<span></b>`;
};

// esta funcion pasa como parametros los elementos del html a las funciones de arriba.
const onClickPension = () => {
  const semanas = document.getElementById("semanas");
  const semanaCot = semanas.value;
  const salario = document.getElementById("salario");
  const salarioCot = salario.value;

  if (semanaCot < 750) {
    const valorPension = pensionReducida(semanaCot);

    const pensionFinal = document.getElementById("pension");
    pensionFinal.innerHTML = valorPension;
  } else if (semanaCot >= 750) {
    const valorPension = pensionVejez(salarioCot, semanaCot);

    const pensionFinal = document.getElementById("pension");
    pensionFinal.innerHTML = valorPension;
  } else {
    return alert("no pension");
  }
  limpiarControles();
};

const limpiarControles = () => {
  const semanas = document.getElementById("semanas");
  const salario = document.getElementById("salario");
  semanas.value = "";
  salario.value = "";
};
