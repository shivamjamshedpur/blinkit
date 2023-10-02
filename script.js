const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;
const visibleCards = 4;

function updateCarousel() {
    const translateX = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();
