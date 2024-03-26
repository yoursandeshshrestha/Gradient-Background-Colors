const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
let text = document.querySelector(".text");

let rgb1 = "#000";
let rgb2 = "#fff";

const hexColor = function generateColor(){
    let hex = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors = colors + hex[Math.floor(Math.random() * 16)];
    }
    return colors;
};

const clickbutton1 = () => {
    rgb1 = hexColor();
    document.body.style.backgroundImage = 
    `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    text.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

const clickbutton2 = () => {
    rgb2 = hexColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    text.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}




button1.addEventListener('click', clickbutton1);
button2.addEventListener('click', clickbutton2);