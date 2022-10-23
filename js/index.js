let heading = document.querySelector("h1");
let img = document.querySelector("#myImage");

function changeHeadingColor() {
    console.log("di this work");
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    heading.style.color = bgColor;
    
}
img.addEventListener('click', changeHeadingColor);