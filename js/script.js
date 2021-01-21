// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA9KTDCDBU3l1mdsb8jyuXbnr8Q5xwD9bQ",
    authDomain: "suggestion-app-fc99e.firebaseapp.com",
    projectId: "suggestion-app-fc99e",
    storageBucket: "suggestion-app-fc99e.appspot.com",
    messagingSenderId: "702116035518",
    appId: "1:702116035518:web:41a91e22d7789f6cd157ef",
    measurementId: "G-2YXZDF7RVP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// jQuery to redirect home page to other pages
$(document).ready(function () {
    $("#pick-suggestion").click(function () {
        window.location.href = "PickSuggestion.html";
    });

    $("#make-suggestion").click(function () {
        window.location.href = "make-suggestion.html";
    });

    $("#mental-health").click(function () {
        window.location.href = "categories/mental-health.html";
    });
    $("#diy").click(function () {
        window.location.href = "categories/diy.html";
    });
    $("#how-to").click(function () {
        window.location.href = "categories/how-to.html";
    });
    $("#physical-activities").click(function () {
        window.location.href = "categories/physical-activities.html";
    });
    $("#other").click(function () {
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

// Firebase: listen for submit 

//Reference content collection
let mhSuggestionInfo = firebase.database().ref("mental-health-suggestion");
let diySuggestionInfo = firebase.database().ref("diy-suggestion");
let htSuggestionInfo = firebase.database().ref("how-to-suggestion");
let paSuggestionInfo = firebase.database().ref("physical-activity-suggestion");
let otherSuggestionInfo = firebase.database().ref("other-suggestion");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let dbMessage;

    var mhMessage;
    var diyMessage;
    var htMessage;
    var paMessage;
    var otherMessage;
    //check if mental health suggestion box is empty
    if (!document.querySelector(".mh-suggestion")) {
        mhMessage = "";
        // console.log("mh value is null");
    }
    else {
        mhMessage = document.querySelector(".mh-suggestion").value;
        console.log(mhMessage);
        dbMessage = mhMessage;
        // saveInfo(dbMessage);
        let mhSuggestion = mhSuggestionInfo.push();
        mhSuggestion.set({
            suggestion: dbMessage
        });
    }

    if (!document.querySelector(".diy-suggestion")) {
        diyMessage = "";
    }
    else {
        diyMessage = document.querySelector(".diy-suggestion").value;
        console.log(diyMessage);
        dbMessage = diyMessage;
        let diySuggestion = diySuggestionInfo.push();
        diySuggestion.set({
            suggestion: dbMessage
        });
    }

    //check if how to suggestion box is empty
    if (!document.querySelector(".ht-suggestion")) {
        htMessage = "";
        // console.log("ht value is null");
    }
    else {
        htMessage = document.querySelector(".ht-suggestion").value;
        console.log(htMessage);
        dbMessage = htMessage;
        // saveInfo(dbMessage);
        let htSuggestion = htSuggestionInfo.push();
        htSuggestion.set({
            suggestion: dbMessage
        });
    }

    if (!document.querySelector(".pa-suggestion")) {
        paMessage = "";
    }
    else {
        paMessage = document.querySelector(".pa-suggestion").value;
        console.log(paMessage);
        dbMessage = paMessage;
        let paSuggestion = paSuggestionInfo.push();
        paSuggestion.set({
            suggestion: dbMessage
        });
    }

    if (!document.querySelector(".other-suggestion")) {
        otherMessage = "";
    }
    else {
        otherMessage = document.querySelector(".other-suggestion").value;
        console.log(otherMessage);
        dbMessage = otherMessage;
        let otherSuggestion = otherSuggestionInfo.push();
        otherSuggestion.set({
            suggestion: dbMessage
        });
    }

}

//Save info to firebase
// function saveInfo(dbMessage) {
//     let mhSuggestion = mhSuggestionInfo.push();

//     mhSuggestion.set({
//         suggestion: dbMessage
//     });

//     let htSuggestion = htSuggestionInfo.push();
//     htSuggestion.set({
//         suggestion: dbMessage
//     });
// }