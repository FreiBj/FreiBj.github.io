var clicks = 0;
var multiplier = 1;
var body = document.getElementsByTagName('body')[0];

function load() {
    document.getElementById("para").innerHTML = clicks;
    document.getElementById("xxx").innerHTML = "Multiplier: " + multiplier + "x";
    document.addEventListener('contextmenu', event => event.preventDefault());
}
window.onload = load();

function myFunction() {
    clicks = clicks + multiplier;
    document.getElementById("para").innerHTML = "Clicks: " + clicks;
    document.getElementById("xxx").innerHTML = "Multiplier: " + multiplier + "x";
}

function upgrade() {
    if (clicks >= 50) {
        if (multiplier > 10) {
            multiplier++;
            clicks = clicks - 50;
        } else if (multiplier <= 10) {
            multiplier++;
            clicks = clicks - 50;
        }
        load();
    }
    
}