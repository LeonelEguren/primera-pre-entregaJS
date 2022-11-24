// Simulador de Plazos fijos en pesos y en dolares
//Primera Pre-entrega JS Leonel Eguren

//varianles
let tazaAnualPesos = 0.30;
let tazaAnualDolares = 0.20;
let tazaMensual = 0;
let montoFinal = 0;
let volverACalcular = false;
let tipoMoneda = "";

//funciones
function depositoF() { deposito = parseFloat(prompt("cuanto dinero queres depositar?")) }
function diasF() { dias = parseInt(prompt("durante cuantos dias queres dejar depositado tu dinero ? ")) }
function interesesGanadosF() {
    if (tipoMoneda == "pesos") {
        interesesGanados = deposito * (tazaAnualPesos * dias / 365)
        alert(" si depositas  " + " $ " + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("el monto final sera : " + " $ " + montoFinal.toFixed(2));

    }
    else if (tipoMoneda == "dolares") {
        interesesGanados = deposito * (tazaAnualDolares * dias / 365)
        alert(" si depositas  " + " u$s" + deposito + " ganaras " + interesesGanados.toFixed(2) + " en intereses")
        montoFinal = interesesGanados + deposito
        alert("el monto final sera : " + " u$s " + montoFinal.toFixed(2));
    }

}

//ciclo

do {

    tipoMoneda = prompt("queres calcular un plazo en pesos o en dolares?").toLowerCase()
    switch (tipoMoneda) {
        case "pesos":
            depositoF()
            diasF()
            interesesGanadosF()
            break;
        case "dolares":
            depositoF()
            diasF()
            interesesGanadosF()
            break;
        default:
            alert(" el tipo de moneda no es correcto")
            break;

    }

    volverACalcular = confirm("deseas calcular otro?")
    //     if (confirm = true) {
    //         alert("Perfecto! comenzaremos de nuevo")

    //     }else{
    //         alert("Muchas gracias! vuelva pronto")
    //     }
    // }

}
while (volverACalcular);