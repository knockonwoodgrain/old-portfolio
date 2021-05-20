const btn = document.querySelector(".btn-toggle");
const btnphone = document.querySelector(".btn-toggle-phone")
const theme = document.querySelector("#theme-link");
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width <= 700){
  theme.href = "style/dark-theme-phone.css"
}
btnphone.addEventListener("click", function (){
  if (theme.getAttribute("href") == "style/dark-theme-phone.css") {
    theme.href = "style/light-theme-phone.css"
  }else if (theme.getAttribute("href") == "style/light-theme-phone.css") {
    theme.href = "style/dark-theme-phone.css"
  }
});
btn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "style/dark-theme.css") {
    theme.href = "style/light-theme.css";
  }else if (theme.getAttribute("href") == "style/dark-theme-phone.css") {
    theme.href = "style/light-theme-phone.css"
  }else if (theme.getAttribute("href") == "style/light-theme-phone.css") {
    theme.href = "style/dark-theme-phone.css"
  }
  else {
    theme.href = "style/dark-theme.css";
  }
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var before = document.getElementById("before");
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  console.log(width);
  if (width >= 700) {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      before.style.fontSize = "1vw";
      dots.style.fontSize = "1vw";
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
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      moreText.style.fontSize = "3.2vw";
      dots.style.fontSize = "3.2vw";
      before.style.fontSize = "3.2vw"
    }
  }
}

