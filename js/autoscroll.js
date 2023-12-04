//AUTOSKROLLFUNKSJON/KNAPP
let startButton = document.getElementById('startButton'); // importere button element
let scrollSpeedInput = document.getElementById('fart'); // importere input element

//definere variabler
let scrolling = false;
let scrolldelay;
let scrollSpeed = 25;

// definere funksjon pageScroll
function pageScroll() {
    window.scrollBy(0, 1);
    scrollSpeed = parseInt(scrollSpeedInput.value, 10) || 25;

    //det vi endrer på er faktisk hvor lenge den skal vente mellom scrollinga. Derfor må scrollspeedinput gjøres om til det speila tallet
    scrollSpeed -= 100;
    scrollSpeed *= -1;
    scrolldelay = setTimeout(pageScroll, scrollSpeed);
}

// event listner
startButton.addEventListener('click', toggleAutoScroll);

// autoscroll start på klikk
function toggleAutoScroll() {
    if (!scrolling) {
        // live oppdatering
        pageScroll();
        scrolling = true;
        autoscrollText.style.animation = "pulse 1s infinite"
    } else {
        clearTimeout(scrolldelay);
        scrolling = false;
        autoscrollText.style.animation = 'none';
    }
}

// dynamisk scroll event listner
scrollSpeedInput.addEventListener('input', function () {
    // Update scrollSpeed with the current input value
    scrollSpeed = parseInt(scrollSpeedInput.value, 10) || 25;

    // dersom scrolling aktiv oppdater med ny fart
    if (scrolling) {
        clearTimeout(scrolldelay);
        pageScroll();
    }
});

//definere pause funksjon for venting
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



document.addEventListener('DOMContentLoaded', function () {
    // Funksjon for skjermposisjon
    function isScrolledToBottom() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;

        return scrollPosition + windowHeight >= bodyHeight;
    }

    // if test bunn av siden=sant
    window.addEventListener('scroll', function () {
        if (isScrolledToBottom()) {
            sleep(2000).then(() => {
                scrolling = false
                autoscrollText.style.animation = 'none';
                scrollSpeed = 0;
                clearTimeout(scrolldelay);
            });


            // The page is scrolled to the bottom
            console.log('Scrolled to the bottom!');

        }
    });
});
//FJERNER AUTOSCROLL SECTION OVER FOOTER
// Importere elementer
var elementToHide = document.getElementById('Autoscroll_section');
var referenceElement = document.getElementById('Grid_Sang');

// Event listner
window.onscroll = function () {
    // Importere offset
    var referenceElementOffset = referenceElement.offsetTop;

    //høyde på referanseelement
    var referenceElementHeight = referenceElement.offsetHeight;

    // Summen av offset top høyden på elementet + elementets margin bottom
    var hidePoint = referenceElementOffset + referenceElementHeight+88
    // Bunnpunkt skjerm,
    var bottomPosition = window.innerHeight + window.scrollY;

    // if test
    if (bottomPosition > hidePoint) {
        elementToHide.style.display = 'none';
    } else {
        elementToHide.style.display = 'block';
    }
};
