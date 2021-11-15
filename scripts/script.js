const btn = document.querySelector(".btn-toggle");
const btnn = document.querySelector(".btn-toggle-phone");
const theme = document.querySelector("#theme-link");
const device = document.querySelector("#device")
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width<=900){
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
  }else {
    theme.href = "style/variables-dark.css"
  }
})
$( "#myBtn" ).click(function() {
  $( "#edumore" ).slideToggle("slow");
  var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
        } else {
            $this.html("Read more");
        }      
});
$( "#FOSSbutton" ).click(function() {
  $( "#FOSSmore" ).slideToggle("slow");
  var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
        } else {
            $this.html("Read more");
        }
});
