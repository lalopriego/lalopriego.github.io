/* const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Que pedo maricom!'; */

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/chologoth.jpg') {
      miImage.setAttribute('src','images/chologoth2.jpg');
    } else {
      miImage.setAttribute('src', 'images/chologoth.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');


function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = miNombre + ' es puyul';
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = nombreAlmacenado + ' es puyul';
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}