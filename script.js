let CSS = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let copyBtn = document.getElementById("copyBtn");
let copyText = document.createElement("button");

function setGradient(){
    body.style.background = "linear-gradient(45deg, " 
    + color1.value 
    + ", " 
    + color2.value
   + ") no-repeat fixed" ;

   CSS.textContent = "Gradient: " + body.style.background + ";";
}

function copyButton(){
    copyText.appendChild(document.createTextNode("Copy Code"));
    copyBtn.appendChild(copyText);
    copyBtn.addEventListener("click", function(){
      navigator.clipboard.writeText(body.style.background + ";");
      alert("Code Copied!");
    })
 }
 
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

copyButton();


