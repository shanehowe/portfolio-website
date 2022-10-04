// Create pop up for when hamburger is clicked multiple times 
const hamburger = document.getElementById("burger");
const span = document.getElementsByClassName("close")[0];
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");

const toggleModal = () => {
    modal.classList.toggle("show-modal");
}

closeButton.addEventListener("click", toggleModal);

let count = 0;
hamburger.addEventListener("click", () => {
    count++;
    if (count === 10) 
    {
        toggleModal();
    }
});


// Hello animation
const speed = 80;
const helloMessage = "Hello, I'm";
const helloElement = document.getElementById("hello-animation");
let j = 0;

const helloAnimation = () => {
    if (j < helloMessage.length)
    {
        helloElement.innerHTML += helloMessage[j];
        j++;
        setTimeout(helloAnimation, speed);
    }
}


// Name animation
const nameToFill = document.getElementById("name-animation")
const myName = "Shane Howe.";
let i = 0

const nameAnimation =  () => {
    if (i < myName.length)
    {
        nameToFill.innerHTML += myName[i];
        i++;
        setTimeout(nameAnimation, speed);
    }
}

// Welcome animation
const welcomeToFill = document.getElementById("welcome-animation");
const welcomeMessage = "Welcome to my portfolio.";
let k = 0;

const welcomeAnimation = () => {
    if (k < welcomeMessage.length)
    {
        welcomeToFill.innerHTML += welcomeMessage[k];
        k++;
        setTimeout(welcomeAnimation, speed);
    }
}

// Function calls to animate text
helloAnimation();
setTimeout(() => nameAnimation(), 1200);
setTimeout(() => welcomeAnimation(), 2400);