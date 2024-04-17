const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
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

const clickbutton3 = () => {
    rgb1 = hexColor();
    rgb2 = hexColor();
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    text.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}



button1.addEventListener('click', clickbutton1);
button2.addEventListener('click', clickbutton2);
button3.addEventListener('click', clickbutton3);

// Function to copy background code
document.getElementById("copyButton").addEventListener("click", function() {
    const codeToCopy = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    // Create a textarea element
    const textarea = document.createElement("textarea");
    textarea.value = codeToCopy;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px"; // Move the textarea off-screen
    document.body.appendChild(textarea);
    textarea.select();
    // Copy the text inside the textarea to clipboard
    document.execCommand("copy");
    document.body.removeChild(textarea); // Remove the textarea
    alert("Background code copied to clipboard!");
});