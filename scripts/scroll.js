const header = document.getElementById("header-nav");
let sticky;

function setUp() {
  if (header) {
    sticky = header.offsetTop;
    window.onscroll = function() {setSticky()};
  }
}

setUp();

function setSticky() {

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}