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

function openLoginForm() {
    document.body.classList.add("showLoginForm");
}
function closeLoginForm() {
    document.body.classList.remove("showLoginForm");
    console.log("close modal with x button");
}

function openSignupForm() {
    document.body.classList.add("showSignupForm");
}
function closeSignupForm() {
    document.body.classList.remove("showSignupForm");
}

// Get the modal
var modal = document.getElementById("login");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        document.body.classList.remove("showLoginForm");
        console.log("close modal");
    }
}
