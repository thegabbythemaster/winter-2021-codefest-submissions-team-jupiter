// jQuery to redirect home page to pick suggestion page
const faders = document.querySelectorAll('.rules');
const sliders = document.querySelectorAll(".slide-in");

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

var mentalH = ["dont stress", "self-improve", 
"Meditate",
"Listen to some music",
"Compliment yourself today!",
"Write down some daily affirmations",
"Call a friend and say hi!",
"Eat an apple!",
"Drink 3 cups of water!! NOW!", 
"Talk about your feelings with a friend", 
"Take a 5 minutes silence break, just for you.", 
"Accept who are you",
"Start your day with a cup of coffee",
"Work your strengths", 
"Boost brainpower by treating yourself to a couple pieces of dark chocolate every few days",
"Feeling anxious?  Take a trip down memory lane and do some coloring",
"Take time to laugh", 
"Dance around while you do your housework.",
"Relax in a warm bath",
"Has something been bothering you? Let it all out…on paper.",
"List down names of people who inspire you "
];


var dIY = ["face mask at home", 
"hand sanitizer at home",

];

var physical = ["10 push-ups", "20 sit-ups","bike riding", 
];


var how2 = ["how to make chicken teriyaki", "how to make chicken salad",
];
var otter = ["diet plan", "sleeping schedule",

];

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
