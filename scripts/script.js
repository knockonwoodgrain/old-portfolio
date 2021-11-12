const btn = document.querySelector(".btn-toggle");
const btnn = document.querySelector(".btn-toggle-phone");
const theme = document.querySelector("#theme-link");
const device = document.querySelector("#device-link")
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width<900){
  device.href = "style/phone.css"
}
btn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "style/variables-dark.css") {
    theme.href = "style/variables-light.css";
  }
  else {
    theme.href = "style/variables-dark.css"
  }
});
btnn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "style/variables-dark.css") {
    theme.href = "style/variables-light.css";
  }
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var before = document.getElementById("before");
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var overlay = document.getElementById("overlay")
  console.log(width);
  if (width >= 700) {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      before.style.fontSize = "1.05vw";
      dots.style.fontSize = "1.05vw";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      moreText.style.fontSize = "1.2vw";
      dots.style.fontSize = "1.2vw";
      before.style.fontSize = "1.2vw"
    }
  }
  else {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      before.style.fontSize = "3vw";
      dots.style.fontSize = "3vw";
      overlay.style.minHeight = "100%"
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      moreText.style.fontSize = "3.2vw";
      dots.style.fontSize = "3.2vw";
      before.style.fontSize = "3.2vw"
      overlay.style.minHeight = "450%"
    }
  }
}


