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