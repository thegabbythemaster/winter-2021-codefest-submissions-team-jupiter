// jQuery to redirect home page to pick suggestion page
$(document).ready(function () {
    $("#pick-suggestion").click(function () {
        // alert("button clicked.");
        window.location.href = "PickSuggestion.html";
    });
});

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById("daily-challenge").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "sample.txt", true);
    xhttp.send();
}
//-------------------------------------------------------------------------------------------

var mentalH = ["dont stress", "self-improve"];
var dIY = ["face mask at home", "hand sanitizer at home"];
var physical = ["10 push-ups", "20 sit-ups"];
var how2 = ["how to make chicken teriyaki", "how to make chicken salad"];
var otter = ["diet plan", "sleeping schedule"];
var rand = ["show your family love", "show your pets love"];

function randomSuggestion(id) {
    if (id === "mH") {
        document.getElementById("mH").textContent = mentalH[Math.floor(mentalH.length * Math.random())];
    } else if (id === "diy") {
        document.getElementById("diy").textContent = dIY[Math.floor(dIY.length * Math.random())];
    } else if (id === "phys") {
        document.getElementById("phys").textContent = physical[Math.floor(physical.length * Math.random())];
    } else if (id === "h-t") {
        document.getElementById("h-t").textContent = how2[Math.floor(how2.length * Math.random())];
    } else if (id === "oth") {
        document.getElementById("oth").textContent = otter[Math.floor(otter.length * Math.random())];
    } else if (id === "ran") {
        document.getElementById("ran").textContent = rand[Math.floor(rand.length * Math.random())];
    }
}

//------------------------------------------------------------------------------------------