// Elementos HTML que se usaran en javascript
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

function validateName() {
    const name = nameInput.value.trim();//trim sirve para eliminar espacios
    if (name === "") {
        nameError.textContent = "Name cannot be empty";
        return false;
    } else {
        nameError.textContent = "";// Borra el mensaje de error si el nombre es correcto
        return true;
    }
}

function validateEmail() {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para emails
    if (!emailPattern.test(email)) {                   // test busca las ocurrencias y se asegura que el email este correcto
        emailError.textContent = "Invalid email format";
        return false;
    } else {
        emailError.textContent = ""; //Borra el error si el email esta correcto
        return true;
    }
}

function validatePhone() {
    const phone = phoneInput.value.trim();
    const phonePattern = /^[0-9]{10}$/; // Solo permite 10 dígitos numéricos
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Phone must be 10 digits";
        return false;
    } else {
        phoneError.textContent = ""; // Borra el error si el numero es correcto
        return true;
    }
}

function validateForm() {               // Habilita o deshabilita el boton
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();

    submitBtn.disabled = !(isNameValid && isEmailValid && isPhoneValid);//Valida si todos los campos son validos
}

nameInput.addEventListener("input", validateForm);//Validacion en tiempo real
emailInput.addEventListener("input", validateForm);
phoneInput.addEventListener("input", validateForm);

// Evento para enviar el formulario 
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    alert("Form submitted successfully!");
});