let deposito = 0;
let tazaAnualPesos = 0.30;
let tazaAnualDolares = 0.20;
let dias = 0;
let tazaMensual = 0;
let montoFinal = 0;
let volverACalcular = false;
let tipoMoneda = "";
function interesesGanadosF(){
    if (tipoMoneda == "pesos") {
        interesesGanados = deposito * (tazaAnualPesos * dias / 365)
        alert(" si depositas  " +" $ "+ deposito  + " ganaras " + interesesGanados.toFixed(2)  + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("el monto final sera : " + " $ "+montoFinal.toFixed(2));
    
    }
    else if(tipoMoneda =="dolares"){
        interesesGanados = deposito * (tazaAnualDolares * dias / 365)
        alert(" si depositas  "+" u$s" + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("el monto final sera : " +" u$s " + montoFinal.toFixed(2));
    }
 
}

do {

    tipoMoneda =  prompt ("queres calcular un plazo en pesos o en dolares?")
    switch (tipoMoneda) {

        case "pesos" :
            deposito = parseFloat(prompt("cuanto dinero queres depositar?"))
            dias = parseInt(prompt("durante cuantos dias queres dejar depositado tu dinero ? "))
            interesesGanadosF()
            break;

        case "dolares":
            deposito = parseFloat(prompt("cuanto dinero queres depositar?"))
            dias = parseInt(prompt("durante cuantos dias queres dejar depositado tu dinero ? "))
            interesesGanadosF()
            break;

            default:
                alert(" el tipo de moenda no es correcto")
                break;

    }

    volverACalcular = confirm("deseas calcular otro?")
}
while (volverACalcular);