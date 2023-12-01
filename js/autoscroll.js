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
scrollSpeedInput.addEventListener('input', function() {
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
  
 

document.addEventListener('DOMContentLoaded', function() {
    // Function to check if the page is scrolled to the bottom
    function isScrolledToBottom() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight;

        return scrollPosition + windowHeight >= bodyHeight;
    }

    // Event listener for the scroll event
    window.addEventListener('scroll', function() {
        if (isScrolledToBottom()) {
            sleep(1000).then(() => { scrolling=false
                autoscrollText.style.animation = 'none';
                scrollSpeed = 0;
                clearTimeout(scrolldelay); });
            
            
            // The page is scrolled to the bottom
            console.log('Scrolled to the bottom!');
            
            // Your code to handle reaching the bottom of the page
        }
    });
});