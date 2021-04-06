// Add event listeners / handlers here...
const redbutton = document.querySelector("#redbutton");
const yellowbutton = document.querySelector("#yellowbutton");
const skybluebutton = document.querySelector("#skybluebutton");
const tealbutton = document.querySelector("#tealbutton");


redButton.addEventListener("click", function redScheme() {
    document.querySelector("body").className = "red-scheme";
})

skyblueButton.addEventListener("click",function skyBlueScheme(){
    document.querySelector("body").className = "skyblue-scheme";
})

yellowButton.addEventListener("click",function yellowScheme(){
    document.querySelector("body").className = "yellow-scheme";
})

tealButton.addEventListener("click",function tealscheme(){
    document.querySelector("body").className = "teal-scheme";
})
// Extra credit: make the border bigger on the selected circle
// Extra credit: add a reset button - turns background white