// Seleccionar las luces del semáforo
const luzRoja = document.getElementById('rojo');
const luzAmarilla = document.getElementById('amarillo');
const luzVerde = document.getElementById('verde');

// Seleccionar los botones
const botonRojo = document.getElementById('botonRojo');
const botonAmarillo = document.getElementById('botonAmarillo');
const botonVerde = document.getElementById('botonVerde');

// Función para apagar todas las luces
function apagarLuces() {
    luzRoja.style.backgroundColor = 'grey';
    luzAmarilla.style.backgroundColor = 'grey';
    luzVerde.style.backgroundColor = 'grey';
}

// Evento para el botón rojo
botonRojo.addEventListener('click', function() {
    apagarLuces(); // Apagamos todas las luces primero
    luzRoja.style.backgroundColor = 'red'; // Encendemos la luz roja
});

// Evento para el botón amarillo
botonAmarillo.addEventListener('click', function() {
    apagarLuces();
    luzAmarilla.style.backgroundColor = 'yellow'; // Encendemos la luz amarilla
});

// Evento para el botón verde
botonVerde.addEventListener('click', function() {
    apagarLuces();
    luzVerde.style.backgroundColor = 'green'; // Encendemos la luz verde
});
