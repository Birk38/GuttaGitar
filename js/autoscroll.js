let startButton = document.getElementById('startButton'); // importere button element
let scrollSpeedInput = document.getElementById('fart'); // importere input element


let scrolling = false;
let scrolldelay;
let scrollSpeed = 25;

// Funksjon autoskroll start
function pageScroll() {
    window.scrollBy(0, 1);
    scrollSpeed = parseInt(scrollSpeedInput.value, 10) || 25;
    scrollSpeed -= 50;
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
