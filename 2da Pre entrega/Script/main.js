//este proyecto pretende ser un homebanking, el cual seguire desarrollando con el avance de las clases y entregas 

function saludo() {
    const fecha = new Date();
    const hora = fecha.getHours();

    const opciones = ["Buenos días", "Buenas tardes", "Buenas noches"];

    let opcionSeleccionada;

    if (hora >= 18 || hora < 6) {
        opcionSeleccionada = opciones[2];
    } else if (hora >= 6 && hora < 12) {
        opcionSeleccionada = opciones[0];
    } else {
        opcionSeleccionada = opciones[1];
    }

    alert (opcionSeleccionada)
}

function inicioSesion () {
let usuario = prompt ("ingrese su usuario por favor")
let contrasenia = parseInt (prompt ("ingrese su contraseña:"))

while (contrasenia != 1234) {
    alert ("contraseña equivocada, por favor vuelva a intentarlo")
    contrasenia = prompt ("vuelva a ingresar la contraseña")
}
}

function dineroIngresado () {
    let ingreso = parseFloat (prompt("ingrese el dinero a ingresar: "))

    if (ingreso >= 1000000) {
        alert ("te va a correr la AFIP")
    }else  {
        alert ("su dinero se ingreso con exito")
    }
}

saludo()

alert ("Este es su HomeBanking")

inicioSesion ()

dineroIngresado ()