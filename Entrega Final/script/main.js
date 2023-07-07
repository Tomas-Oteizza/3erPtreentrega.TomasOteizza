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
    
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
    
        if ( password === "1234") {
          Swal.fire({
            icon: 'success',
            title: 'Contraseña correcta',
            timer: 2000
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'vuelve a intentarlo',
            timer: 2000
          });
        }
    });
    
}


function dineroIngresado() {
    document.getElementById("depositForm").addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
      let amount = parseFloat(document.getElementById("amount").value);
      if (isNaN(amount) || amount <= 0) {
        document.getElementById("message").innerHTML = "Ingrese un monto válido.";
        return;
      }
  
      depositMoney(amount);
    });
  
    function depositMoney(amount) {
      let previousData = localStorage.getItem("data");
      let currentData = previousData ? JSON.parse(previousData) : { totalAmount: 0 }; // Obtiene los datos previos o establece en 0 si no existen
      currentData.totalAmount += amount; // Suma el nuevo monto al acumulado
  
      localStorage.setItem("data", JSON.stringify(currentData));
      document.getElementById("message").innerHTML = "Su dinero en cuenta es: $" + currentData.totalAmount.toFixed(2);
    }
  
    window.addEventListener("load", function () {
      let previousData = localStorage.getItem("data");
      if (previousData) {
        let currentData = JSON.parse(previousData);
        let totalAmount = currentData.totalAmount;
        document.getElementById("message").innerHTML = "Su dinero en cuenta es: $" + parseFloat(totalAmount).toFixed(2);
      }
    });
  }


  document.addEventListener('DOMContentLoaded', () => {
    const btnConvertir = document.getElementById('btn-convertir');
    const montoPesosInput = document.getElementById('monto-pesos');
    const montoDolaresInput = document.getElementById('monto-dolares');
  
    btnConvertir.addEventListener('click', () => {
      const montoPesos = parseFloat(montoPesosInput.value);
      if (isNaN(montoPesos)) {
        montoDolaresInput.value = ''; // Limpiar el campo de resultado si el monto ingresado no es un número válido
        return;
      }
  
      fetch("https://currency-exchange.p.rapidapi.com/exchange?from=ARS&to=USD&q=1.0'", {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "69244ad5a0mshc8e2df2a3cfb6e8p14707cjsn3945fba80266",
          "x-rapidapi-host": "currency-exchange.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data;
        const resultado = montoPesos * exchangeRate;
  
        montoDolaresInput.value = resultado.toFixed(2); 
      })
      .catch(err => {
        console.error(err);
      });
    });
  });
  



saludo()

inicioSesion ()

dineroIngresado ()

