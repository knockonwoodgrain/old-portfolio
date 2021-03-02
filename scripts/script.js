const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
  // Swap out the URL for the different stylesheets
  if (theme.getAttribute("href") == "style/dark-theme.css") {
    theme.href = "style/light-theme.css";
  } else {
    theme.href = "style/dark-theme.css";
  }
});