// script.js

// Navbar background change on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,0.95)";
        header.style.boxShadow = "0 3px 20px rgba(255,0,0,0.5)";

    }
    else{

        header.style.background = "rgba(0,0,0,0.7)";
        header.style.boxShadow = "none";

    }

});


// Typing effect for placeholder

const input = document.querySelector("input");

const words = [
    "Search for Biryani...",
    "Search for Pizza...",
    "Search for Burger...",
    "Search for Cakes...",
    "Search for South Indian..."
];

let wordIndex = 0;
let charIndex = 0;

function typePlaceholder(){

    if(charIndex <= words[wordIndex].length){

        input.setAttribute(
            "placeholder",
            words[wordIndex].substring(0, charIndex)
        );

        charIndex++;

        setTimeout(typePlaceholder, 100);

    }
    else{

        setTimeout(erasePlaceholder, 1500);

    }

}

function erasePlaceholder(){

    if(charIndex >= 0){

        input.setAttribute(
            "placeholder",
            words[wordIndex].substring(0, charIndex)
        );

        charIndex--;

        setTimeout(erasePlaceholder, 50);

    }
    else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typePlaceholder, 300);

    }

}

typePlaceholder();


// Search bar glow effect

input.addEventListener("mouseenter", () => {

    input.style.boxShadow = "0 0 25px rgba(255,0,0,0.8)";

});

input.addEventListener("mouseleave", () => {

    input.style.boxShadow = "none";

});


// Enter key search animation

input.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        input.style.transform = "scale(0.97)";

        setTimeout(() => {

            input.style.transform = "scale(1)";

            alert("Searching for: " + input.value);

        }, 150);

    }

});


// Logo click animation

const logo = document.querySelector(".logo img");

logo.addEventListener("click", () => {

    logo.style.transform = "rotate(360deg)";

    setTimeout(() => {

        logo.style.transform = "rotate(0deg)";

    }, 1000);

});