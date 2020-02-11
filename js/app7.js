"use strict";
let heading = document.getElementById("content");
let button = document.getElementById("clicker");
button.addEventListener("click", () => {
    if (heading.innerHTML === "") {
        heading.innerHTML = "Hej hej";
    }
    else {
        heading.innerHTML = "";
    }
});
