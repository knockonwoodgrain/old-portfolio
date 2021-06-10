const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function () {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "style/dark-theme.css") {
    theme.href = "style/light-theme.css";
  } else {
    theme.href = "style/dark-theme.css";
  }
});
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  var before = document.getElementById("before")

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

