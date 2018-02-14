
var gbr, eu, bg, usd;

init();

function init() {

    gbr = document.getElementById("GBR");
    eu = document.getElementById("EU");
    bg = document.getElementById("BG");
    usd = document.getElementById("USD");
}

function poundConverter() {

    eu.value = parseFloat(gbr.value) * 1.17540;
    bg.value = parseFloat(gbr.value) * 2.29855;
    usd.value = parseFloat(gbr.value) * 1.24415 ;
}

function euroConverter() {

    gbr.value = parseFloat(eu.value) * 0.85080;
    bg.value = parseFloat(eu.value) * 1.95600;
    usd.value = parseFloat(eu.value) * 1.06000;
}

function bgConverter() {

    gbr.value = parseFloat(bg.value) * 0.43501;
    eu.value = parseFloat(bg.value) * 0.51124;
    usd.value = parseFloat(bg.value) * 0.54200;
}

function dollarConverter() {

    gbr.value = parseFloat(usd.value) * 0.80379 ;
    eu.value = parseFloat(usd.value) * 0.94320;
    bg.value = parseFloat(usd.value) * 1.84500;
}

