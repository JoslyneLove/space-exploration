// Declare variables
var canvas = document.getElementById("space");
var plan = canvas.getContext("2d");
var ship = new Image();
var mer = new Image();
var ven = new Image();
var ear = new Image();
var mar = new Image();
var jup = new Image();
var sat = new Image();
var ura = new Image();
var nep = new Image();
var sun = new Image();
var xPos = 60;
var yPos = 60;
var loc = "";
var aX = canvas.width - 150;
var aY = Math.floor(Math.random() * (canvas.height - 1));
var x = new Number();
var y = new Number();
// Get shared variables across pages from localStorage
const shipSel = localStorage.getItem("shipSel");
const score = localStorage.getItem("score");

// Choose ship image based on shipSel
switch (shipSel) {
    case "rocket":
        ship.src = "../images/rocket.png";
        break;
    case "shuttle":
        ship.src = "../images/shuttle.png";
        break;
    case "pirate":
        ship.src = "../images/pirate.png";
        break;
    case "fighter":
        ship.src = "../images/fighter.png";
        break;
    case "ufo":
        ship.src = "../images/ufo.png";
        break;
    case "starship":
        ship.src = "../images/starship.png";
        break;
}
// Define images for planets
mer.src = "../images/mercury_sm.jpg";
ven.src = "../images/venus_sm.jpg";
ear.src = "../images/earth_sm.jpg";
mar.src = "../images/mars_sm.jpg";
jup.src = "../images/jupiter_sm.jpg";
sat.src = "../images/saturn_sm.jpg";
ura.src = "../images/uranus_sm.jpg";
nep.src = "../images/neptune_sm.jpg";
sun.src = "../images/sun.jpg";

// Text displayed in canvas
plan.font = "30px Arial";
plan.fillStyle = "yellow";

// Display score
document.getElementById("score").innerText = "Score: " + score + "/32";

// Event to listen for mouse activity
document.addEventListener("mousemove", shipMove, false);

// Event to listen for enter key
document.addEventListener("keydown", gotoPlanet, false);

// Timer to draw asteroid
var intervalID = window.setInterval(drawAsteroid, 20, true);

// Display Win Page if score is 32
if (score == 32) {
            window.open("win.html", "_self");
}

// Function to go to planets when user hits enter key
function gotoPlanet(e) {
    if (e.keyCode == 13) {
        switch (loc) {
            case "mer":
              localStorage.setItem("planet", "mer");
              localStorage.setItem("planetsrc", "../images/mercury_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Mercury is the closest planet to the Sun");
              localStorage.setItem("fact2", "Average Temperature, 800 deg F during the day, -290 deg F at night");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 88 earth days");
              localStorage.setItem("fact4", "Diameter, 2158.64 miles");
              window.open("explore.html", "_self");
              break;
            case "ven":
              localStorage.setItem("planet", "ven");
              localStorage.setItem("planetsrc", "../images/surface_venus.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Venus is the third brightest object in the Earth's sky after the Sun and Moon");
              localStorage.setItem("fact2", "Average Temperature, 880 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 225 earth days");
              localStorage.setItem("fact4", "Diameter, 7521 miles");
              window.open("explore.html", "_self");
              break;
            case "ear":
              localStorage.setItem("planet", "ear");
              localStorage.setItem("planetsrc", "../images/earth_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Earth is the densest planet in the solar system at 5,513 kg/m3");
              localStorage.setItem("fact2", "Average Temperature, 61 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 365 earth days");
              localStorage.setItem("fact4", "Diameter, 7926 miles");
              window.open("explore.html", "_self");
              break;
            case "mar":
              localStorage.setItem("planet", "mar");
              localStorage.setItem("planetsrc", "../images/mars_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Mars has the tallest mountain known in the solar system at 68,897 ft high");
              localStorage.setItem("fact2", "Average Temperature, -20 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 687 earth days");
              localStorage.setItem("fact4", "Diameter, 4212.275 miles");
              window.open("explore.html", "_self");
              break;
            case "jup":
              localStorage.setItem("planet", "jup");
              localStorage.setItem("planetsrc", "../images/jupiter_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Jupiter has the shortest day of the planets in the solar system, rotating once every 9 hours and 55 minutes");
              localStorage.setItem("fact2", "Average Temperature, -162 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 4,333 earth days");
              localStorage.setItem("fact4", "Diameter, 88,846 miles");
              window.open("explore.html", "_self");
              break;
            case "sat":
              localStorage.setItem("planet", "sat");
              localStorage.setItem("planetsrc", "../images/saturn_surface.png");
              localStorage.setItem("fact1", "Interesting Fact, Saturn has the fastest winds of any other planet in the solar system at 1,100 miles per hour");
              localStorage.setItem("fact2", "Average Temperature, -218 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 10,759 earth days");
              localStorage.setItem("fact4", "Diameter, 74,897.6 miles");
              window.open("explore.html", "_self");
              break;
            case "ura":
              localStorage.setItem("planet", "ura");
              localStorage.setItem("planetsrc", "../images/uranus_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Uranus has 13 known rings, though these rings are quite narrow so they are less visible than Saturn's ring");
              localStorage.setItem("fact2", "Average Temperature, -320 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 30,687 earth days");
              localStorage.setItem("fact4", "Diameter, 31,518.43 miles");
              window.open("explore.html", "_self");
              break;
            case "nep":
              localStorage.setItem("planet", "nep");
              localStorage.setItem("planetsrc", "../images/neptune_surface.jpg");
              localStorage.setItem("fact1", "Interesting Fact, Only one spacecraft has flown past Neptune, Voyager 2 in 1989");
              localStorage.setItem("fact2", "Average Temperature, -331 deg F");
              localStorage.setItem("fact3", "Year length (Earth Days to travel around the sun), 60,190 earth days");
              localStorage.setItem("fact4", "Diameter, 30,598.8 miles");
              window.open("explore.html", "_self");
              break;
            case "":
              break;
        }
    }
}

// Function to move ship with mouse and call drawPlanets()
function shipMove(event) {
    var loc = false;

    if (event.x != undefined && event.y != undefined) {
        x = event.x;
        y = event.y;
        // Firefox method
    } else {
        x = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    xPos = x - (ship.width / 2);
    yPos = y - (ship.height / 2);

    plan.clearRect(0, 0, canvas.width, canvas.height);
    drawPlanets(x, y, true);
}

// Function to draw planets and detect planet hover
// check parameter keeps drawPlanets and drawAsteroid from calling each other infinitely
function drawPlanets(x, y, check) {
    merX = (canvas.width / 2) + mer.width - 110;
    merY = (canvas.height / 2) - (sun.height / 2) - mer.height;
    venX = (canvas.width / 2) - (sun.width / 2) - ven.width;
    venY = (canvas.height / 2) + (ven.height / 2);
    earX = (canvas.width / 2) + ear.width;
    earY = (canvas.height / 2) + (ear.height / 2);
    marX = (canvas.width / 2) - mar.width - 150;
    marY = 20;
    jupX = 0;
    jupY = canvas.height - jup.height;
    satX = canvas.width - sat.width;
    satY = 0;
    uraX = 0;
    uraY = 0;
    nepX = canvas.width - nep.width;
    nepY = canvas.height - nep.height;
    plan.drawImage(mer, merX, merY);
    plan.drawImage(ven, venX, venY);
    plan.drawImage(ear, earX, earY);
    plan.drawImage(mar, marX, marY);
    plan.drawImage(jup, jupX, jupY);
    plan.drawImage(sat, satX, satY);
    plan.drawImage(ura, uraX, uraY);
    plan.drawImage(nep, nepX, nepY);
    plan.drawImage(sun, (canvas.width / 2) - (sun.width / 2), (canvas.height / 2) - (sun.height / 2));
    drawShip();
    if (check == true) {
        drawAsteroid(false);
    }

    // Find out if mouse is hovering over a planet
    var fX = canvas.width / 2 - 150;
    var fY = canvas.height - 20;
    if (x > merX && x < merX + mer.width && y > merY && y < merY + mer.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Mercury!", fX, fY);
        loc = "mer";
    } else if (x > venX && x < venX + ven.width && y > venY && y < venY + ven.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Venus!", fX, fY);
        loc = "ven";
    } else if (x > earX && x < earX + ear.width && y > earY && y < earY + ear.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Earth!", fX, fY);
        loc = "ear";
    } else if (x > marX && x < marX + mar.width && y > marY && y < marY + mar.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Mars!", fX, fY);
        loc = "mar";
    } else if (x > jupX && x < jupX + jup.width && y > jupY && y < jupY + jup.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Jupiter!", fX, fY);
        loc = "jup";
    } else if (x > satX && x < satX + sat.width && y > satY && y < satY + sat.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Saturn!", fX, fY);
        loc = "sat";
    } else if (x > uraX && x < uraX + ura.width && y > uraY && y < uraY + ura.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Uranus!", fX, fY);
        loc = "ura";
    } else if (x > nepX && x < nepX + nep.width && y > nepY && y < nepY + nep.height) {
        plan.fillStyle = "yellow";
        plan.fillText("Press Enter to land on Neptune!", fX, fY);
        loc = "nep";
    } else {
        loc = "";
    }
}

// Function to draw the ship
function drawShip() {
    plan.drawImage(ship, xPos, yPos);
}

// Draw asteroid
function drawAsteroid(increment) {
    if (aX < -150 && increment == true) {
        aX = canvas.width;
        aY = Math.floor(Math.random() * (canvas.height - 1));
    }
    var aRad = 10;
    if (increment == true) {
        plan.clearRect(0, 0, canvas.width, canvas.height);
        drawPlanets(x, y, false);
    }
    plan.beginPath();
    plan.moveTo(aX, aY - aRad);
    plan.lineTo(aX, aY + aRad);
    plan.lineTo(aX + 100, aY + aRad);
    plan.closePath();
    plan.fillStyle = 'red';
    plan.fill();
    plan.stroke();
    plan.beginPath();
    plan.moveTo(aX, aY - aRad);
    plan.lineTo(aX, aY + aRad);
    plan.lineTo(aX + 100, aY - aRad);
    plan.closePath();
    plan.fillStyle = 'red';
    plan.fill();
    plan.stroke();
    plan.beginPath();
    plan.moveTo(aX, aY - aRad);
    plan.lineTo(aX, aY + aRad);
    plan.lineTo(aX + 150, aY);
    plan.closePath();
    plan.fillStyle = 'orange';
    plan.fill();
    plan.stroke();
    plan.beginPath();
    plan.arc(aX, aY, aRad, 0, 2 * Math.PI);
    plan.fillStyle = 'gray';
    plan.fill();
    plan.stroke();
    if (increment == true) {
        aX -= 3;
    }
    if (aX > x - (ship.width / 2) && aX < x + (ship.width / 2) && aY > y - (ship.height / 2) && aY < y + (ship.height / 2)) {
        window.open("gameover.html", "_self");
    }
}
