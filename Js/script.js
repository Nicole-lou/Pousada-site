const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelectorAll('.carousel-dot');
let currentItem = 0;

function showSlide(index) {
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
})};

carouselDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
});
function goToSlide(index) {
    currentItem = index;
    showSlide(currentItem);
}

function nextSlide() {
    currentItem = (currentItem + 1) % carouselItems.length;
    showSlide(currentItem);
}

showSlide(currentItem);
setInterval(nextSlide, 5000);