// Grab score from localStorage
const score = localStorage.getItem("score");

// Function to go back to planets page
function goBack() {
        window.open("planets.html","_self");
    }

// Write score into text
document.getElementById("final").innerText = "Your final score was " + score + "/32, you didn't collect the data on all the planets.";
