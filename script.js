// Seleccionamos el elemento del footer
const footerText = document.querySelector('footer p');

// Obtenemos el año actual automáticamente del sistema
const currentYear = new Date().getFullYear();

// Inyectamos el texto actualizado en el HTML
footerText.innerHTML = `${currentYear} - Portfolio under construction`;