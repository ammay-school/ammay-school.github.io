// Cookie tracker
function checkVisit() {
    let lastVisit = getCookie("lastVisit");
    if (lastVisit === "") {
        document.getElementById("welcomeMessage").innerHTML =
            "Welcome to my homepage for the first time!";
    } else {
        document.getElementById("welcomeMessage").innerHTML =
            "Welcome back! Your last visit was " + lastVisit;
    }
    let now = new Date().toString();
    document.cookie =
        "lastVisit=" + now + "; max-age=31536000";
}
function getCookie(name) {
    let cookieName = name + "=";
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) === 0) {
            return c.substring(cookieName.length);
        }
    }
    return "";
}

checkVisit();

// show email using Jquery
$("#showEmailBtn").click(function () {
    $("#email").toggle();
    if ($("#email").text() === "") {
        $("#email").text("yourname@email.com");
    }
});

// Digital Clock
function updateDigitalClock() {
    let now = new Date();
    document.getElementById("digitalClock").innerHTML =
        now.toLocaleTimeString();
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();

// Analog Clock
window.onload = function () {
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    drawClock();
    setInterval(drawClock, 1000);
    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }
};

// Joke API
$.get("https://v2.jokeapi.dev/joke/Programming?type=single",
  function(result) {
    if (result.length == 0) return;
    console.log("From jokeAPI: " + JSON.stringify(result));
    $("#response" ).html( "a programming joke of the day: " + result.joke)
  })


// Random Dog

function loadDog() {
    $.get("https://dog.ceo/api/breeds/image/random",
        function(result) {
            if (!result.message) return;
            console.log("From Dog API: " + JSON.stringify(result));
            $("#dogImage").attr("src", result.message);
        }
    );
}
loadDog();
$("#newDogBtn").click(function() {
    loadDog();
});
loadDog();
document
    .getElementById("newDogBtn")
    .addEventListener("click", loadDog);
