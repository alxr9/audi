// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Obtenemos el elemento de la barra de navegación
  var navbar = document.getElementById("navbar");

  // Si el scroll es mayor a 80px
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // Añadimos la clase para encoger la barra (el CSS hará el resto)
    navbar.classList.add("navbar-chica");
  } else {
    // Quitamos la clase para que vuelva a su estado original (definido en el CSS)
    navbar.classList.remove("navbar-chica");
  }
}





function openCar(evt, carName) {
    // 1. Prevenimos el comportamiento por defecto del enlace (el salto brusco)
    evt.preventDefault();

    // --- El código que ya tenías para mostrar/ocultar tabs ---
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(carName).style.display = "block";
    evt.currentTarget.parentElement.className += " active"; // Ligeramente ajustado para que funcione en el <a>

    // --- NUEVA SECCIÓN PARA EL SCROLL CONTROLADO ---

    // 2. Definimos el offset (el espacio que quieres dejar arriba)
    const offset = 150; // ¡Puedes cambiar este valor a 120, 150, etc.!

    // 3. Obtenemos el elemento al que queremos ir
    const elementoDestino = document.getElementById(carName);

    // 4. Calculamos la posición a la que debemos hacer scroll
    // Posición del elemento + scroll actual - el offset
    const posicionReal = elementoDestino.getBoundingClientRect().top + window.pageYOffset - offset;

    // 5. Hacemos el scroll de forma suave a esa posición
    window.scrollTo({
        top: posicionReal,
        behavior: "smooth"
    });
}




function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    if (menu.style.width === "100%") {
        menu.style.width = "0%";
    } else {
        menu.style.width = "100%";
    }
}