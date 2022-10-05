const Adivinanza = document.querySelector(".adivina");

var min = 0;
var max = 10;

var numAleatorio = Math.floor(Math.random() * max - min + 1) + min;
console.log(numAleatorio);
var intentos = 0;
var numero;

Adivinanza.addEventListener("submit", function (e) {
  e.preventDefault();
  numero = document.querySelector(".ingresar").value;

  if (numero >= min && numero <= max) {
    if (numero < numAleatorio) {
      intentos = intentos + 1;
      const debajo = document.querySelector(".seccion");
      debajo.innerHTML = `
              <div class="mss error">
                <div class="img"><i class="bi bi-x-circle"></i></div>
                <h2>Incorrecto</h2>
                <p>Estas por debajo</p>
              </div>
        `;

      setTimeout(() => {
        debajo.textContent = "";
      }, 2000);
    } else if (numero > numAleatorio) {
      intentos = intentos + 1;
      const pasado = document.querySelector(".seccion");
      pasado.innerHTML = `
              <div class="mss error">
                <div class="img"><i class="bi bi-x-circle"></i></div>
                <h2>Incorrecto</h2>
                <p>Estas por encima</p>
              </div>
        `;

      setTimeout(() => {
        pasado.textContent = "";
      }, 2000);
    }
  } else {
    const inter = document.querySelector(".seccion");
    inter.innerHTML = `
            <div class="mss error">
              <div class="img"><i class="bi bi-x-circle"></i></div>
              <h2>Incorrecto</h2>
              <p>Esta fuera del intervalo 1-10</p>
            </div>`;

    setTimeout(() => {
      inter.textContent = "";
    }, 2000);
  }
  if (numero == numAleatorio) {
    numAleatorio = Math.floor(Math.random() * max - min + 1) + min;
    console.log(numAleatorio);
    const correcto = document.querySelector(".seccion");
    correcto.innerHTML = `
            <div class="mss bueno">
              <div class="img"><i class="bi bi-check2-circle"></i></div>
              <h2>Correcto siu</h2>
              <p>Adivinaste en ${intentos + 1} intentos</p>
              <p><b>Se ha generado otro numero aleatorio para un nuevo juego, sino cierre sesion.</b></p>
            </div>
      `;

    setTimeout(() => {
      correcto.textContent = "";
    }, 4000);
  }
});
