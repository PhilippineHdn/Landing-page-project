let slideIndex = [1,1]; 
let slidesCarroussels = [
  document.getElementsByClassName("slide-carroussel1"),
  document.getElementsByClassName("slide-carroussel2")
];
let dots = [
  document.getElementsByClassName("dot-carroussel1"),
  document.getElementsByClassName("dot-carroussel2")
]; 

function showSlides(n, carrousselIndex) {
  if (n > slidesCarroussels[carrousselIndex].length) {
    slideIndex[carrousselIndex] = 1; 
  }    
  if (n < 1) {
    slideIndex[carrousselIndex] = slidesCarroussels[carrousselIndex].length
  }
  for (let i = 0; i < slidesCarroussels[carrousselIndex].length; i++) {
    slidesCarroussels[carrousselIndex][i].style.display = "none";
  }
  for (let i = 0; i < dots[carrousselIndex].length; i++) {
    dots[carrousselIndex][i].className = dots[carrousselIndex][i].className.replace(" active", "");
  }
  slidesCarroussels[carrousselIndex][slideIndex[carrousselIndex] - 1].style.display = "block";  
  dots[carrousselIndex][slideIndex[carrousselIndex] - 1].className += " active";
}

function plusSlides(n, carrousselIndex) {
  slideIndex[carrousselIndex] += n;
  showSlides(slideIndex[carrousselIndex], carrousselIndex);
}

function currentSlide(n, carrousselIndex) {
  slideIndex[carrousselIndex] = n
  showSlides(slideIndex[carrousselIndex], carrousselIndex);
}

showSlides(1, 0);
showSlides(1, 1);

// HAMBURGER MENU 
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}