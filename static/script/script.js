// script.js


// // Mostrar seccion activa por id.

// document.addEventListener('DOMContentLoaded', () => {

// const inicio = document.getElementById('inicio');
// const local = document.getElementById('local');
// const comollegar = document.getElementById('como_llegar');
// const comentarios = document.getElementById('comentarios');


// const navInicio = document.getElementById('nav_inicio');
// const navLocal = document.getElementById('nav_local');
// const navComollegar = document.getElementById('nav_como_llegar');
// const navComentarios = document.getElementById('nav_comentarios');  


// function mostrarSeccion(seccion) {
  
//   // Ocultar todas las secciones
//   inicio.classList.add('inactivo');
//   local.classList.add('inactivo');
//   comollegar.classList.add('inactivo');
//   comentarios.classList.add('inactivo');
  
//   if (seccion === 'inicio') {
//     inicio.classList.remove('inactivo');
//   }else if (seccion === 'local') {
//     local.classList.remove('inactivo');
//   }else if (seccion === 'comollegar') {
//     comollegar.classList.remove('inactivo');
//   }else if (seccion === 'comentarios') {
//     comentarios.classList.remove('inactivo');
//   }
// };






// //console.log(navLocal);
// console.log(local);
// console.log(inicio);



// navInicio.addEventListener('click', (e) => {
//   e.preventDefault(); // Evita el comportamiento predeterminado del enlace
//   mostrarSeccion('inicio');
// });

// navLocal.addEventListener('click', (e) => {
//   ee.preventDefault(); // Evita el comportamiento predeterminado del enlace
//   mostrarSeccion('local');
// });

// navComollegar.addEventListener('click', (e) => {
//   e.preventDefault(); // Evita el comportamiento predeterminado del enlace
//   mostrarSeccion('comollegar');
// });   

// navComentarios.addEventListener('click', (e) => {
//   e.preventDefault(); // Evita el comportamiento predeterminado del enlace
//   mostrarSeccion('comentarios');
// });

//  mostrarSeccion('inicio'); // Shows the 'inicio' section by default on page load.

// });


// document.addEventListener('DOMContentLoaded', () => {

//   // Almacena todas las secciones en una única variable para facilitar el manejo
//   const secciones = {
//     inicio: document.getElementById('inicio'),
//     local: document.getElementById('local'),
//     comollegar: document.getElementById('comollegar'),
//     comentarios: document.getElementById('comentarios')
//   };

//   // Almacena todos los botones de navegación
//   const navItems = {
//     navInicio: document.getElementById('nav_inicio'),
//     navLocal: document.getElementById('nav_local'),
//     nsvComollegar: document.getElementById('nav_como_llegar'),
//     navComentarios: document.getElementById('nav_comentarios')
//   };

//   function mostrarSeccion(seccionActiva) {
//     // Primero, oculta todas las secciones del array
//     for (const key in secciones) {
//       secciones[key].classList.add('inactivo');
//     }

//     // Luego, muestra solo la sección que se ha seleccionado
//     if (secciones[seccionActiva]) {
//       secciones[seccionActiva].classList.remove('inactivo');
//     }
//   }

//   // Agrega un escuchador de eventos a cada botón de navegación de forma dinámica
//   for (const key in navItems) {
//     navItems[key].addEventListener('click', (e) => {
//       e.preventDefault();
//       // Llama a la función mostrando la sección con la clave correspondiente
//       mostrarSeccion(key);
//     });
//   }

//   // Opcional: Muestra la sección 'inicio' por defecto al cargar la página
//   mostrarSeccion('inicio');
// });

// console.log(seccionActiva)
// script.js

// document.addEventListener('DOMContentLoaded', () => {
//   // Asegúrate de que los IDs de las secciones coincidan exactamente con tu HTML
//   const secciones = {
//     inicio: document.getElementById('inicio'),
//     local: document.getElementById('local'),
//     comollegar: document.getElementById('comollegar'),
//     comentarios: document.getElementById('comentarios')
//   };

//   // Asegúrate de que los IDs de los botones de navegación coincidan con tu HTML
//   const navItems = {
//     inicio: document.getElementById('nav_inicio'),
//     local: document.getElementById('nav_local'),
//     comollegar: document.getElementById('nav_comollegar'),
//     comentarios: document.getElementById('nav_comentarios')
//   };

//   function mostrarSeccion(seccionActiva) {
//     // Si la sección activa no existe en el objeto 'secciones', sal de la función
//     if (!secciones[seccionActiva]) {
//       console.error(`Error: La sección "${seccionActiva}" no existe.`);
//       return; 
//     }

//     // Oculta todas las secciones
//     for (const key in secciones) {
//       secciones[key].classList.add('inactivo');
//     }

//     // Muestra solo la sección seleccionada
//     secciones[seccionActiva].classList.remove('inactivo');
//   }

//   // Añade un 'event listener' a cada botón de navegación
//   for (const key in navItems) {
//     if (navItems[key]) { // Verifica que el elemento exista antes de agregar el evento
//       navItems[key].addEventListener('click', (e) => {
//         e.preventDefault();
//         mostrarSeccion(key);
//       });
//     } else {
//       console.error(`Error: El elemento de navegación con ID "nav_${key}" no fue encontrado.`);
//     }
//   }

//   // Muestra la sección 'inicio' por defecto
//   mostrarSeccion('inicio');
// });


// script.js
// document.addEventListener('DOMContentLoaded', () => {

//   // Obtiene todos los elementos de sección y navegación
//   const secciones = document.querySelectorAll('section.seccion-navegable');
//   const navLinks = document.querySelectorAll('nav a');

//   // Función para ocultar todas las secciones
//   const ocultarTodasLasSecciones = () => {
//     secciones.forEach(seccion => {
//       seccion.classList.add('inactivo');
//     });
//   };

//   // Función para mostrar la sección seleccionada
//   const mostrarSeccion = (id) => {
//     const seccionActiva = document.getElementById(id);
//     if (seccionActiva) {
//       seccionActiva.classList.remove('inactivo');
//     }
//   };

//   // Añade el 'event listener' a cada enlace de navegación
//   navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//       e.preventDefault();

//       const seccionId = e.target.getAttribute('href').substring(1);
      
//       // Oculta todas las secciones antes de mostrar la seleccionada
//       ocultarTodasLasSecciones();
//       mostrarSeccion(seccionId);
//     });
//   });

//   // Muestra la primera sección por defecto al cargar la página
//   if (secciones.length > 0) {
//     ocultarTodasLasSecciones();
//     mostrarSeccion(secciones[0].id);
//   }
// });

// script.js

// document.addEventListener('DOMContentLoaded', () => {

//   const inicio = document.getElementById('inicio');
//   const local = document.getElementById('local');
//   const comollegar = document.getElementById('comollegar');
//   const comentarios = document.getElementById('comentarios');

//   const navInicio = document.getElementById('nav_inicio');
//   const navLocal = document.getElementById('nav_local');
//   const navComollegar = document.getElementById('nav_comollegar');
//   const navComentarios = document.getElementById('nav_comentarios'); 

//   // Función para mostrar una sección y ocultar las demás
//   function mostrarSeccion(seccionId) {
//     // Depuración: Verifica qué ID se está pasando a la función
//     console.log("Sección a mostrar:", seccionId);

//     // Oculta todas las secciones
//     if (inicio) inicio.classList.add('inactivo');
//     if (local) local.classList.add('inactivo');
//     if (comollegar) comollegar.classList.add('inactivo');
//     if (comentarios) comentarios.classList.add('inactivo');

//     // Muestra la sección correspondiente
//     if (seccionId === 'inicio' && inicio) {
//       inicio.classList.remove('inactivo');
//     } else if (seccionId === 'local' && local) {
//       local.classList.remove('inactivo');
//     } else if (seccionId === 'comollegar' && comollegar) {
//       comollegar.classList.remove('inactivo');
//     } else if (seccionId === 'comentarios' && comentarios) {
//       comentarios.classList.remove('inactivo');
//     }
//   }

//   // Agrega los event listeners
//   if (navInicio) navInicio.addEventListener('click', (e) => {
//     e.preventDefault();
//     mostrarSeccion('inicio');
//   });

//   if (navLocal) navLocal.addEventListener('click', (e) => {
//     e.preventDefault();
//     mostrarSeccion('local');
//   });

//   if (navComollegar) navComollegar.addEventListener('click', (e) => {
//     e.preventDefault();
//     mostrarSeccion('comollegar');
//   }); 

//   if (navComentarios) navComentarios.addEventListener('click', (e) => {
//     e.preventDefault();
//     mostrarSeccion('comentarios');
//   });

//   // Muestra la sección inicial al cargar la página
//   mostrarSeccion('inicio');
// });

document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.carousel-slide');
  const images = document.querySelectorAll('.carousel-slide img');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  let currentIndex = 0;
  let intervalId;
  const slideWidth = images[0].clientWidth; // Obtiene el ancho de la primera imagen
  const totalImages = images.length;

  // Actualiza la posición del slide
  function updateSlide() {
    slide.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  // Avanza al siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlide();
  }

  // Retrocede al slide anterior
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlide();
  }

  // Funcionalidad de auto-reproducción
  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  // Eventos de botones
  prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  // Funcionalidad táctil
  let startX = 0;
  let isDragging = false;

  slide.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    stopAutoSlide();
  });

  slide.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) nextSlide();
      else prevSlide();
      isDragging = false;
      startAutoSlide();
    }
  });

  slide.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Inicia el carrusel al cargar la página
  startAutoSlide();
});


/* Menu toogle */

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});