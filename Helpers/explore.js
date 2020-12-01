// Grab shared variables across pages from localStorage
const shipSel = localStorage.getItem("shipSel");
var score = localStorage.getItem("score");
const planet = localStorage.getItem("planet");
const planetsrc = localStorage.getItem("planetsrc");
const fact1 = localStorage.getItem("fact1");
const fact2 = localStorage.getItem("fact2");
const fact3 = localStorage.getItem("fact3");
const fact4 = localStorage.getItem("fact4");
const planetVisited = localStorage.getItem(planet + "Visited");
var planetScore = 0;
var foundI1 = 0;
var foundI2 = 0;
var foundI3 = 0;
var foundI4 = 0;
console.log(planetsrc);

if (planetVisited == "false") {
  localStorage.setItem(planet + "Score", 0);
  localStorage.setItem(planet + "Visited", true);
  $("#find").html("Find and click on all four tools on the planet to collect data!");
  localStorage.setItem(planet + "I1", 0);
  localStorage.setItem(planet + "I2", 0);
  localStorage.setItem(planet + "I3", 0);
  localStorage.setItem(planet + "I4", 0);
} else {
  planetScore = localStorage.getItem(planet + "Score");
  foundI1 = localStorage.getItem(planet + "I1");
  foundI2 = localStorage.getItem(planet + "I2");
  foundI3 = localStorage.getItem(planet + "I3");
  foundI4 = localStorage.getItem(planet + "I4");
  toolsFound();
}

// Display score
document.getElementById("score").innerText = "Score: " + score + "/32";
document.body.style.backgroundImage = "url(" + planetsrc + ")";

// random percent for placement of object from left, goes to 90 so things are not off the screen
var leftPerMag = Math.floor((Math.random() * 90) + 1);
// random percent for placement of object from top, starts from 2 to account for text at top of screen
var topPerMag = Math.floor((Math.random() * 90) + 13);
var leftPer = leftPerMag.toString() + "%";
var topPer = topPerMag.toString() + "%";
var img = document.createElement("img");
if (foundI1 == 0) {
  img.id = "I1";
  img.src = "../images/magnify.png";
  console.log(img);
  img.height = 100;
  img.width = 100;
  img.style.left = leftPer;
  img.style.top = topPer;
  img.style.position = 'absolute';
  document.body.appendChild(img);
}

// getting new random percents for placement
leftPerTherm = Math.floor((Math.random() * 90) + 1);
topPerTherm = Math.floor((Math.random() * 90) + 13);
while (leftPerTherm < leftPerMag + 10 && leftPerTherm > leftPerMag - 10) {
  leftPerTherm = Math.floor((Math.random() * 90) + 1);
}
while (topPerTherm < topPerMag + 10 && topPerTherm > topPerMag - 10) {
  topPerTherm = Math.floor((Math.random() * 90) + 13);
}
var leftPer = leftPerTherm.toString() + "%";
var topPer = topPerTherm.toString() + "%";
var img2 = document.createElement("img");
if (foundI2 == 0) {
  img2.id = "I2";
  img2.src = "../images/thermometer.png";
  console.log(img2);
  img2.height = 100;
  img2.width = 100;
  img2.style.left = leftPer;
  img2.style.top = topPer;
  img2.style.position = 'absolute';
  document.body.appendChild(img2);
}

// getting new random percents for placement
leftPerClock = Math.floor((Math.random() * 90) + 1);
topPerClock = Math.floor((Math.random() * 90) + 13);
while ((leftPerClock < leftPerMag + 10 && leftPerClock > leftPerMag - 10) ||
		(leftPerClock < leftPerTherm + 10 && leftPerClock > leftPerTherm - 10)) {
  leftPerClock = Math.floor((Math.random() * 90) + 1);
}
while ((topPerClock < topPerMag + 10 && topPerClock > topPerMag - 10) ||
		(topPerClock < topPerTherm + 10 && topPerClock > topPerTherm - 10)) {
  topPerClock = Math.floor((Math.random() * 90) + 13);
}
var leftPer = leftPerClock.toString() + "%";
var topPer = topPerClock.toString() + "%";
var img3 = document.createElement("img");
if (foundI3 == 0) {
  img3.id = "I3";
  img3.src = "../images/clock.png";
  console.log(img3);
  img3.height = 100;
  img3.width = 100;
  img3.style.position = 'absolute';
  img3.style.left = leftPer;
  img3.style.top = topPer;
  document.body.appendChild(img3);
}

// getting new random percents for placement
leftPerTape = Math.floor((Math.random() * 90) + 1);
topPerTape = Math.floor((Math.random() * 90) + 13);
while ((leftPerTape < leftPerMag + 10 && leftPerTape > leftPerMag - 10) ||
		(leftPerTape < leftPerTherm + 10 && leftPerTape > leftPerTherm - 10) ||
		(leftPerTape < leftPerClock + 10 && leftPerTape > leftPerClock - 10)) {
  leftPerTape = Math.floor((Math.random() * 90) + 1);
}
while ((topPerTape < topPerMag + 10 && topPerTape > topPerMag - 10) ||
		(topPerTape < topPerTherm + 10 && topPerTape > topPerTherm - 10) ||
		(topPerTape < topPerClock + 10 && topPerTape > topPerClock - 10)) {
  topPerTape = Math.floor((Math.random() * 90) + 13);
}
var leftPer = leftPerTape.toString() + "%";
var topPer = topPerTape.toString() + "%";
var img4 = document.createElement("img");
if (foundI4 == 0) {
  img4.id = "I4";
  img4.src = "../images/tape.png";
  console.log(img4);
  img4.height = 100;
  img4.width = 100;
  img4.style.left = leftPer;
  img4.style.top = topPer;
  img4.style.position = 'absolute';
  document.body.appendChild(img4);
}

var text = document.createElement('text');
text.type = "text";
text.style.fontSize = "20px";
text.style.fontWeight = "bold";
text.style.backgroundColor = "lightgrey";
text.style.borderRadius = "25px";
text.style.paddingLeft = "25px";
text.style.paddingRight = "25px";

var I1clicked = false;
$('#I1').click(function () {
    text.textContent = fact1;
    text.style.top = img.style.top;
    text.style.left = img.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I1clicked) {
        score++;
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I1clicked = true;
		planetScore++;
		localStorage.setItem(planet + "Score",planetScore);
		localStorage.setItem(planet + "I1", 1);
		toolsFound();
    }
});

var I2clicked = false;
$('#I2').click(function () {
    text.textContent = fact2;
    text.style.top = img2.style.top;
    text.style.left = img2.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I2clicked) {
        score++;
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I2clicked = true;
		planetScore++;
		localStorage.setItem(planet + "Score",planetScore);
		localStorage.setItem(planet + "I2", 1);
		toolsFound();
    }
});

var I3clicked = false;
$('#I3').click(function () {
    text.textContent = fact3;
    text.style.top = img3.style.top;
    text.style.left = img3.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I3clicked) {
        score++;
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I3clicked = true;
		planetScore++;
		localStorage.setItem(planet + "Score",planetScore);
		localStorage.setItem(planet + "I3", 1);
		toolsFound();
    }
});

var I4clicked = false;
$('#I4').click(function () {
    text.textContent = fact4;
    text.style.top = img4.style.top;
    text.style.left = img4.style.left;
    text.style.position = 'absolute';
    document.body.appendChild(text);
    //check if item was already clicked
    if (!I4clicked) {
        score++;
        document.getElementById("score").innerText = "Score: " + score + "/32";
        I4clicked = true;
		planetScore++;
		localStorage.setItem(planet + "Score",planetScore);
		localStorage.setItem(planet + "I4", 1);
		toolsFound();
    }
});

// function for goBack button, keeps score persitant
function goBack() {
  localStorage.setItem("score", score);
  switch (localStorage.getItem("planet")) {
    case "mer":
      localStorage.setItem("merVisited", "true");
      break;
    case "ven":
      localStorage.setItem("venVisited", "true");
      break;
    case "ear":
      localStorage.setItem("earVisited", "true");
      break;
    case "mar":
      localStorage.setItem("marVisited", "true");
      break;
    case "jup":
      localStorage.setItem("jupVisited", "true");
      break;
    case "sat":
      localStorage.setItem("satVisited", "true");
      break;
    case "ura":
      localStorage.setItem("uraVisited", "true");
      break;
    case "nep":
      localStorage.setItem("nepVisited", "true");
      break;
    case "":
      break;
  }
  window.open("planets.html", "_self");
}

function toolsFound() {
  if (planetScore == 0) {
	$("#find").html("Find and click on all four tools on the planet to collect data!");
  } else if (planetScore == 1) {
	$("#find").html("Three more tools to find on this planet!");
  } else if (planetScore == 2) {
	$("#find").html("Two more tools to find on this planet!");
  } else if (planetScore == 3) {
	$("#find").html("One more tool to find on this planet!");
  } else {
	$("#find").html("You have found everything on this planet!");
  }
}
