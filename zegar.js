setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("zegar").innerHTML = d.toLocaleTimeString();
}