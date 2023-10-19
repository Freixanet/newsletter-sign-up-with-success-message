const form = document.querySelector(".form");
const input = document.querySelector(".form-input");

form.addEventListener("submit", (e) => {
  let email = input.value;
  let emailSpan = document.querySelector(".email");
  if (!formValidation()) {
    e.preventDefault();
  } else {
    document.querySelector(".content").style.display = "none";
    document.querySelector(".thanks-page").style.display = "flex";
    emailSpan.textContent = email;
  }
});

function formValidation() {
  // Retorna true si la validación es exitosa, o false si falla
  // Obtén los valores de los campos del formulario
  const email = document.querySelector(".form-input").value;

  // Inicializa una variable para rastrear errores
  let hasErrors = false;

  // Realiza las validaciones
  if (email.trim() === "") {
    alert("Please, add your email address.");
    hasErrors = true;
  }

  // Valida el formato del correo electrónico utilizando una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    const invalidLabel = document.querySelector(".input-label-invalid");
    invalidLabel.style.display = "initial";
    input.classList.toggle("form-input");
    input.classList.toggle("form-input-invalid");
    hasErrors = true;
  }

  return !hasErrors;
}
