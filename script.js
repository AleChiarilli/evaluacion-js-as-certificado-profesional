var creditos = 3;
var cartasVolteadas = false; // Variable para controlar si hay cartas volteadas

document.addEventListener("DOMContentLoaded", function () {
  actualizarCreditos();
});

const miArray = [1, 2, 3];

function desordenarArray(array) {
  // Función de comparación aleatoria
  function compararAleatoriamente() {
    return Math.random() - 0.5;
  }

  // Desordenar el array utilizando sort y la función de comparación aleatoria
  array.sort(compararAleatoriamente);

  console.log(array);

  return array;
}

const cartasDesordenadas = desordenarArray(miArray);

function mostrarCarta(carta) {
  // Si ya hay cartas volteadas, no hacemos nada
  if (cartasVolteadas) {
    return;
  }

  const index = carta.querySelector("img").getAttribute("data-index");
  const img = carta.querySelector("img");

  if (cartasDesordenadas[index] === 1) {
    img.src = "img/as.jpg"; // As - Carta ganadora
    creditos++;
    alert("has tenio suerte, vuerve a juga pa que vea");
  } else {
    img.src = "img/ladron.webp"; // Ladron - Carta perdedora
    creditos--;
    alert("la mano es más rápida quer ojo primo");
  }

  if (creditos == 0) {
    alert("le has dado toda la pasta ar primo Drikah");
  }

  // Actualizar créditos
  actualizarCreditos();

  // Deshabilitar el evento de clic después de revelar la carta
  carta.onclick = null;

  // Marcar que hay cartas volteadas
  cartasVolteadas = true;
}

function actualizarCreditos() {
  document.getElementById("creditos").textContent = `Suelto: ${creditos}`;
}

function reiniciarJuego() {
  // Habilitar el evento de clic en todas las cartas
  if (creditos == 0) {
    alert("No puedes jugar, te has quedao sin pasta prin... cipe");
  } else {
    const cartas = document.querySelectorAll(".carta");
    cartas.forEach((carta) => {
      carta.onclick = function () {
        mostrarCarta(carta);
      };
    });
  }

  // Voltear todas las cartas
  const imgs = document.querySelectorAll(".carta img");
  imgs.forEach((img) => {
    img.src = "img/carta-volteada.jpg";
  });

  // Desordenar las cartas nuevamente
  desordenarArray(cartasDesordenadas);

  // Reiniciar variable de cartas volteadas
  cartasVolteadas = false;
}

function volverManana() {
  location.reload();
}
