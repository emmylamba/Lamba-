function showMessage() {
    alert("Hello Emmanuel! You clicked the button!");
}


function changeText() {
    document.getElementById("message").innerHTML =
        "JavaScript is working!";
}


let isRed = false;

function changeColor() {

    let text = document.getElementById("colorText");

    if (isRed === false) {

        text.style.color = "red";
        isRed = true;

    } else {

        text.style.color = "blue";
        isRed = false;

    }
}
let isHidden = false;

function toggleText() {
    let message = document.getElementById("secretText");
    let button = document.getElementById("toggleButton");

    if (isHidden === false) {
        message.style.display = "none";
        button.innerHTML = "Show Message";
        isHidden = true;
    } else {
        message.style.display = "block";
        button.innerHTML = "Hide Message";
        isHidden = false;
    }
}

function hideText() {
    document.getElementById("secretText").style.display = "none";
}


function followMe() {
    alert("Thanks for following Emmylamba!");
}
function greetUser() {
    let nameInput = document.getElementById("nameInput");
    let name = nameInput.value;

    if (name === "") {
        document.getElementById("greeting").innerHTML =
            "Please enter your name!";
    } else {
        document.getElementById("greeting").innerHTML =
            "Hello " + name + "!";

        nameInput.value = "";
    }
}