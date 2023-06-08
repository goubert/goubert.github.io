// When the user scrolls the page, execute myFunction
window.onscroll = function() {headerFix()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerFix() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".main-menu li a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".main-menu li a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}
/*
$('.menu-mobile').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('act');
  $('.menu-mobile-modal').slideToggle("fast");
  
});

$('.btn-modal').on('click', function(event){
  event.preventDefault();
  $('.menu-mobile-modal').slideToggle("fast");
})



anime({
  targets: '.main-text',
  translateX: 250
});*/






