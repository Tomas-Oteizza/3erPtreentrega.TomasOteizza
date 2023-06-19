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

    
    let saludoElemento = document.getElementById("titulo");
    saludoElemento.textContent = opcionSeleccionada + " Este es su homebanking"
 
}

function inicioSesion () {
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        if ( password === "1234") {
            document.getElementById("message").innerHTML = "Inicio de sesión exitoso.";
        } else {
            document.getElementById("message").innerHTML = "Credenciales inválidas. Inténtalo de nuevo.";
        }
    });
    
}


function dineroIngresado () {
    document.getElementById("depositForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
        let amount = parseFloat(document.getElementById("amount").value);
        if (isNaN(amount) || amount <= 0) {
            document.getElementById("message").innerHTML = "Ingrese un monto válido.";
            return;
        }
    
        depositMoney(amount);
    });
    
    function depositMoney(amount) {
        let previousAmount = localStorage.getItem("amount");
        let currentAmount = previousAmount ? parseFloat(previousAmount) + amount : amount;
    
        localStorage.setItem("amount", currentAmount);
        document.getElementById("message").innerHTML = "Su dinero en cuenta es: $" + currentAmount.toFixed(2);
    }
    
    window.addEventListener("load", function() {
        let previousAmount = localStorage.getItem("amount");
        if (previousAmount) {
            document.getElementById("message").innerHTML = "Su dinero en cuenta es: $" + parseFloat(previousAmount).toFixed(2);
        }
    });
    
    
}

saludo()

inicioSesion ()

dineroIngresado ()