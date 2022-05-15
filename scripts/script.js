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
  else if (theme.getAttribute("href") == "style/variables-light.css"){
    theme.href = "style/variables-you.css"
  }
  else if (theme.getAttribute("href") == "style/variables-you.css"){
   theme.href = "style/variables-dark.css"
  }
});
$( "#edubutton" ).click(function() {
  $( "#edumore" ).slideToggle("slow");
  var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
            $( "#educationblog" ).removeClass( "reading" );
        } else {
            $this.html("Read more");
            $( "#educationblog" ).addClass( "reading" );
        }      
});
$( "#FOSSbutton" ).click(function() {
  $( "#FOSSmore" ).slideToggle("slow");
  var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
            $( "#FOSSblog" ).removeClass( "reading" );
        } else {
            $this.html("Read more");
            $( "#FOSSblog" ).addClass( "reading" );
        }
});
document.getElementById("body").onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("main1");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  }