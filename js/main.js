// Desplazamiento Pricing
const precios = document.querySelector("#precios");
const pricing = document.querySelector("#pricing");

precios.addEventListener("click", desplegarMenu);
function desplegarMenu() {
  pricing.classList.replace("d-none", "d-block");
  if (pricing.classList.contains("d-block")) {
    pricing.classList.remove("d-block");
  } else {
    pricing.classList.add("d-none");
  }
}

// Formulario
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputEmail = document.querySelector("#email");
const inputTextarea = document.querySelector("#textarea");
const formulario = document.querySelector("#enviar-mail");

//Btn
const btnEnviar = document.querySelector("#enviar");

eventListeners();
function eventListeners() {
  // Cuando la app arranca
  document.addEventListener("DOMContentLoaded", iniciarApp);

  // Campos del formulario
  inputNombre.addEventListener("blur", validarFormulario);
  inputApellido.addEventListener("blur", validarFormulario);
  inputEmail.addEventListener("blur", validarFormulario);
  inputTextarea.addEventListener("blur", validarFormulario);
  formulario.addEventListener("submit", enviarEmail);
}

function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add("bg-secondary");
}

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    // Elimina los errores.
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }

    e.target.classList.remove("errorr");
    e.target.classList.add("great");
  } else {
    e.target.classList.remove("great");
    e.target.classList.add("errorr");
    mostrarError("All fields are required");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }

      e.target.classList.remove("errorr");
      e.target.classList.add("great");
    } else {
      e.target.classList.remove("great");
      e.target.classList.add("errorr");
      mostrarError("The email is invalid");
    }
  }
  if (
    er.test(email.value) &&
    inputNombre.value !== "" &&
    inputApellido.value !== "" &&
    inputTextarea.value !== ""
  ) {
    btnEnviar.disabled = false;
    btnEnviar.classList.remove("bg-secondary");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "bg-danger",
    "text-white",
    "text-center",
    "p-2",
    "my-4",
    "offset-md-2",
    "text-uppercase",
    "error"
  );

  const errores = document.querySelectorAll(".error");

  if (errores.length === 0) {
    formulario.insertBefore(mensajeError, document.querySelector(".msj"));
  }
}

// Enviar el Mail
function enviarEmail(e) {
  e.preventDefault();

  // Mostrar Spinner
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";

    const parrafo = document.createElement("p");
    parrafo.textContent = "The message was sent correctly";
    parrafo.classList.add(
      "text-center",
      "bg-success",
      "text-white",
      "fw.bold",
      "p-2",
      "mt-2",
      "mb-4",
      "text-uppercase",
      "offset-md-2"
    );

    // Inserta el parrafo antes del spinner
    formulario.insertBefore(parrafo, spinner);

    setTimeout(() => {
      parrafo.remove();
      formulario.reset();
      iniciarApp();
    }, 3000);
  }, 5000);
}

window.sr = ScrollReveal();

sr.reveal('.category', {
   duration: 3000,
   origin: 'top',
   distance: '-100px'
});

sr.reveal('.news', {
  duration: 2000,
  origin: 'top',
  distance: '-150px'
});

sr.reveal('.scroll-text', {
  duration: 3000,
  origin: 'top',
  distance: '-300px',
});

sr.reveal('.scroll-controller', {
  duration: 3000,
  origin: 'top',
  distance: '-300px',
});

