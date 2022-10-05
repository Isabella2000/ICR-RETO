const usuario = document.getElementById("usuario");
const contra = document.getElementById("contra");
const form1 = document.querySelector(".btn1");


let usuarioBD = "1044610050";
let contraBD = "8500164401";
let extraerU = usuarioBD.slice(0, 1);
let extraerC = contraBD.slice(0, 1);

form1.addEventListener("click", (e)=>  {
  e.preventDefault();
  console.log(usuario.value);
  console.log(contra.value);

  if (usuario.value !== usuarioBD || contra.value !== contraBD) {
    alert("Usuario o Contraseña incorrecta");
    return;
  }
  alert("Por favor realice el captcha para poder ingresar.");
  mostrarCapcha(extraerU, extraerC);
  
});

const mostrarCapcha = (extraerU, extraerC) => {
  console.log(extraerU, extraerC);
  
  const elemento = document.querySelector(".login2");
  elemento.innerHTML =`
  <form class="contenedor2" id="contenedor2">   
  <h3>Suma de comprobacion</h3> 
    <div class="form-field espacio">
      <div id="sumas"></div>
      <input type="number" placeholder="Respuesta" id="suma">
    </div>
    <button class="btn2 btn">Comprobar</button>
  </form> `;
  
    const form2 = document.querySelector(".btn2");
    const sumas = document.querySelector("#sumas");
    sumas.textContent = (`${extraerU}+${extraerC}`);

    form2.addEventListener("click", (e) => {
      e.preventDefault();
      const suma = document.getElementById("suma").value;
      const resultado = Number(extraerU) + Number(extraerC);
      if (suma == resultado) {
        console.log(suma);
        console.log(resultado);
        alert("inicio de sesion");
        mostrarBoton();
        
        return;
      }
      alert("respuesta incorrecta");
      

  });

};

const mostrarBoton=()=>{
// e.preventDefault();
const adivina = document.querySelector(".adivinanza");
adivina.innerHTML =`
  <button class="ghost" id="signUp">Adivinanza</button>`;

  const signUpButton = document.getElementById('signUp');
  const logInButton = document.getElementById('logIn');
  const container = document.getElementById('container');
  
  signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
  });
  
   logInButton.addEventListener('click', () => {
     // const elemento = document.querySelector(".login2");
     // console.log(elemento);
    //  usuario.value="";
    //  contra.value="";
     //  elemento.value="";
     
     
     if (confirm("¿Esta seguro de cerrar sesión?")) {
       
       swal.fire({
         icon: 'success',
         title: ("bye byee"),
         background: "#b4a7d6",
         timer: 3000,
         timerProgressBar: true,
        })
      }
      container.classList.remove("right-panel-active");
      setTimeout(()=>window.location.reload(),
      3000)
      

   });
}

