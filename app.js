const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

const nombre = document.getElementById("Nombre")
const nombreError = document.querySelector('#Nombre + span.error');

const apellido = document.getElementById("Apellido")
const apellidoError = document.querySelector('#Apellido + span.error');

const comentario = document.getElementById('comentario');
const comentarioError = document.querySelector('#comentario + span.error');

const trabajos = document.getElementById('trabajos');
const trabajosError = document.querySelector('#trabajos + span.error');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = ''; 
    emailError.className = 'error'; 
  } else {
    showErrorEmail();
  }
});

nombre.addEventListener('input', function (event) {
  if (nombre.validity.valid) {
    nombreError.innerHTML = ''; 
    nombreError.className = 'error'; 
  } else {
    showErrorNombre();
  }
});

apellido.addEventListener('input', function (event) {
  if (apellido.validity.valid) {
    apellidoError.innerHTML = ''; 
    apellidoError.className = 'error'; 
  } else {
    showErrorApellido();
  }
});


form.addEventListener('submit', function (event) { 
  if(!nombre.validity.valid){
    showErrorNombre();
    event.preventDefault();
  } else if(!apellido.validity.valid){
    showErrorApellido();
    event.preventDefault();
  } else if(!email.validity.valid){
    showErrorEmail();
    event.preventDefault();
  }else if(!comentario.validity.valid){
    showErrorComentario();
    event.preventDefault();
  }else if(document.getElementById("trabajos").value==-1){
    trabajosError.textContent = 'Debe seleccionar una opción.'
    event.preventDefault();}
});


function showErrorEmail() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    emailError.textContent = 'El correo electrónico debe tener al menos '+mail.minLength+' caracteres; ha introducido solo '+mail.value.length+'.';
  }
}
function showErrorNombre() {
  if(nombre.validity.valueMissing) {
    nombreError.textContent = 'Debe introducir un nombre.';
  } else if(nombre.validity.patternMismatch) {
    nombreError.textContent = 'Solo se deben utilizar minúsculas y mayúsuculas.';
  } else if(nombre.validity.tooShort) {
    nombreError.textContent = 'El Nombre debe tener al menos '+nombre.minLength+' carácteres; ha introducido solo '+nombre.value.length+'.';
  }
}

function showErrorApellido() {
  if(apellido.validity.valueMissing) {
    apellidoError.textContent = 'Debe introducir un apellido.';
  } else if(apellido.validity.patternMismatch) {
    apellidoError.textContent = 'Solo se deben utilizar minúsculas y mayúsuculas.';
  } else if(apellido.validity.tooShort) {
    apellidoError.textContent = 'El Apellido debe tener al menos '+apellido.minLength+' carácteres; ha introducido solo '+apellido.value.length+'.';
  }
}

function showErrorComentario() {
  if(comentario.validity.valueMissing) {
    comentarioError.textContent = 'Debe introducir un un comentario.';
  }
}

  emailError.className = 'error activo';
  nombreError.className = 'error activo';
  apellidoError.className = 'error activo';
  trabajosError.className = 'error activo';

