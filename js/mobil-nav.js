let headerMain = document.querySelector(".header-main");
let headerMobil = document.querySelector(".mobil-meny");

let isMenyOpen = false;

headerMobil.onclick = function() {
    if (!isMenyOpen) {
        headerMain.style.display = "flex";
        isMenyOpen = true;
    }
    else if (isMenyOpen) {
        headerMain.style.display = "none";
        isMenyOpen = false;
    }
}

