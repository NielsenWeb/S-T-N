

var dropMenu = document.getElementById("nav-mobile-drop");
var closeLayer = document.getElementById("close-layer");

var modalDonation = document.getElementById('modal-donation')
var modalDonationScreen = document.getElementById('modal-donation-screen')



/* mobile Dropdown */

function dropDown() {
  if (dropMenu.style.width == "150px") {
    dropMenu.style.width = "0";
    closeLayer.style.display = "none";
  } else {
    closeLayer.style.display = "block";
    dropMenu.style.width = "150px";
  }
}

function closeDropDown() {
  closeLayer.style.display = "none";
  dropMenu.style.width = "0";
}


/* modal for donations */
function openModalDonation() {
    modalDonation.style.display = 'block'
}

function closeModalDonation(){
    modalDonation.style.display = 'none'
}

function openModalDonationScreen(){
  modalDonationScreen.style.display = 'block'
}

function closeModalDonationScreen(){
  modalDonationScreen.style.display = 'none'
}

/* Slideshow */

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000);
}

fadeOut();

function fadeOut() {
  if (document.getElementById('fading').style.opacity == '1') {

  console.log('test')
  }

}