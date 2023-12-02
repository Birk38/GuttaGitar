let startButton = document.getElementById('startButton'); // importere button element
let scrollSpeedInput = document.getElementById('fart'); // importere input element


let scrolling = false;
let scrolldelay;
let scrollSpeed = 25;

// Funksjon autoskroll start
function pageScroll() {
    window.scrollBy(0, 1);
    scrollSpeed = parseInt(scrollSpeedInput.value, 10) || 25;
    scrollSpeed -= 100;
    scrollSpeed *= -1;
    scrolldelay = setTimeout(pageScroll, scrollSpeed);
}

// autoscroll start on click
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

// event listner
startButton.addEventListener('click', toggleAutoScroll);

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



document.addEventListener('DOMContentLoaded', function () {
    // Function to check if the page is scrolled to the bottom
    function isScrolledToBottom() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;

        return scrollPosition + windowHeight >= bodyHeight;
    }

    // Event listener for the scroll event
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

            // Your code to handle reaching the bottom of the page
        }
    });
});
//FJERNER AUTOSCROLL SECTION OVER FOOTER
// Get the elements you want to manipulate
var elementToHide = document.getElementById('Autoscroll_section');
var referenceElement = document.getElementById('Grid_Sang');

// Add a scroll event listener
window.onscroll = function () {
    // Get the offset top of the reference element
    var referenceElementOffset = referenceElement.offsetTop;

    // Get the height of the reference element
    var referenceElementHeight = referenceElement.offsetHeight;

    // Calculate the hide point to be the sum of offset top and height of the reference element
    var hidePoint = referenceElementOffset + referenceElementHeight;

    // Get the bottom position of the viewport
    var bottomPosition = window.innerHeight + window.scrollY;

    // Check if the bottom position is beyond the hidePoint
    if (bottomPosition > hidePoint) {
        // If it is, hide the element
        elementToHide.style.display = 'none';
    } else {
        // If not, show the element
        elementToHide.style.display = 'block';
    }
};
