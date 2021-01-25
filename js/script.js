// jQuery to redirect home page to pick suggestion page
const faders = document.querySelectorAll('.rules');
const sliders = document.querySelectorAll(".slide-in");

$(document).ready(function () {
    $("#pick-suggestion").click(function () {
        // alert("button clicked.");
        window.location.href = "PickSuggestion.html";
    });

    $("#make-suggestion").click(function () {
        window.location.href = "make-suggestion.html";
        // alert("clicks");
    });

    $("#mh-button").click(function () {
        window.location.href = "categories/mental-health.html";
        // alert("button clicked.");
    });
    $("#diy-button").click(function () {
        window.location.href = "categories/diy.html";
    });
    $("#ht-button").click(function () {
        window.location.href = "categories/how-to.html";
    });
    $("#phys-button").click(function () {
        window.location.href = "categories/physical-activities.html";
    });
    $("#oth-button").click(function () {
        window.location.href = "categories/other.html";
    });
});

// displays challenge after button is clicked
$(document).ready(function () {
    $("#challenge-button").click(function () {
        $("#daily-challenge").animate({
            height: 'toggle'
        });

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                document.getElementById("content").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "challenge.html", true);
        xhttp.send();
    });
});


//-------------------------------------------------------------------------------------------

//Login/Signup form popup control
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
