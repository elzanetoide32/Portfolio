let index = 0;
    const carousel = document.querySelector(".carousel");
    const cards = document.querySelectorAll(".card");
    const totalCards = cards.length;
    const cardWidth = cards[0].offsetWidth + 6; // Ancho de la card + margen

    function moveCarousel1(step) {
      index = (index + step + totalCards) % totalCards; // Movimiento en bucle
      carousel.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    // Mueve el carrusel automáticamente cada 3 segundos
    setInterval(() => moveCarousel1(1), 3000);

    let index2 = 0;
    const carousel2 = document.querySelector(".carousel2");
    const cards2 = document.querySelectorAll(".card2");
    const totalCards2 = cards2.length; // Se usa cards2 en lugar de cards
    const cardWidth2 = cards2[0].offsetWidth + 6; // Ancho de la card + margen, usando cards2

    function moveCarousel2(step) {
      index2 = (index2 + step + totalCards2) % totalCards2; // Movimiento en bucle
      carousel2.style.transform = `translateX(${-index2 * cardWidth2}px)`; // Usar carousel2
    }

    // Mueve el carrusel automáticamente cada 2 segundos
    setInterval(() => moveCarousel2(1), 2000);
