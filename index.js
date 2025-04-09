const usaBtn = document.getElementById('usa');
const rusBtn = document.getElementById('russia');
const gerBtn = document.getElementById('germany');
const ukBtn = document.getElementById('uk');
const headline = document.getElementById('headline');
const flagimg = document.getElementById('flag');
let flagsrc;
let headtext;

function usa() {
    headtext = "USA";
    flagsrc = "resources/usa.png";
    headline.innerHTML = headtext;
    flagimg.src = flagsrc;
}

function rus() {
    headtext = "Russia";
    flagsrc = "resources/russia.webp";
    headline.innerHTML = headtext;
    flagimg.src = flagsrc;
}

function ger() {
    headtext = "Germany";
    flagsrc = "resources/germany.png";
    headline.innerHTML = headtext;
    flagimg.src = flagsrc;
}

function uk() {
    headtext = "United Kingdom";
    flagsrc = "resources/uk.webp";
    headline.innerHTML = headtext;
    flagimg.src = flagsrc;
}