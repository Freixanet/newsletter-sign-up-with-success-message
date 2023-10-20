// Variables
const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const emailSpan = document.querySelector(".email");
const thanksPage = document.querySelector(".thanks-page");
const content = document.querySelector(".content");
const dismissButton = document.querySelector(".thanks-button");

// Functions
function formValidation() {
  const email = document.querySelector(".form-input").value;
  let hasErrors = false;
  if (email.trim() === "") {
    alert("Please, add your email address.");
    hasErrors = true;
  }

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

function showInitialContent() {
  content.style.display = "flex";
  thanksPage.style.display = "none";
}

// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Previene la presentación del formulario por defecto

  const email = input.value;

  if (formValidation(email)) {
    content.style.display = "none";
    thanksPage.style.display = "flex";
    emailSpan.textContent = email;
  }
});

dismissButton.addEventListener("click", showInitialContent);
