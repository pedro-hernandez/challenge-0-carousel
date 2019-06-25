const hero = document.querySelector('.hero-image');
const heroImg = document.querySelector('.image');
let images = ['hero-image-0.jpg', 'hero-image-1.jpg', 'hero-image-2.jpg', 'hero-image-3.jpg', 'not-found.jpg'];
let counter = 1;

changeImg = () => {
    heroImg.classList.add('fade');
    heroImg.style.backgroundImage = `url(./images/${images[counter]})`;
    if (counter < images.length) counter++;
    if (counter >= images.length) counter = 0;
}

carousel = () => {
    // on-click version
    // hero.addEventListener('click', changeImg);

    setInterval(changeImg, 3000);
}

carousel();