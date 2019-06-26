// on-click version - uncomment below
// const hero = document.querySelector('.hero-image');
const heroImg = document.querySelector('.image');
let counter = 0;

changeImg = async () => {
    let responseStatus;
    try {
        const response = await fetch(`./images/hero-image-${[counter]}.jpg`);
        responseStatus = await response.status;
        if (responseStatus === 200) {
            heroImg.style.backgroundImage = `url(./images/hero-image-${[counter]}.jpg)`
            counter++
        };
        if (responseStatus === 404) counter = 0;
    }
    catch (e) {
        alert(e.responseText || "Something went wrong...");
    }
}

carousel = () => {
    // on-click version - uncomment below and comment-out setInterval...
    // hero.addEventListener('click', changeImg);

    setInterval(changeImg, 3000);
}

carousel();