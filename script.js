/* Navbar hide */
var prevScrollpos = window.pageYOffset;
var navSreen = document.getElementById("navbar-screen");
var navMobile = document.getElementById("navbar-mobile");

/* DropDown  */
var dropMenu = document.getElementById("nav-mobile-drop");
var closeLayer = document.getElementById("close-layer");

/* Donation modal */
var modalDonation = document.getElementById("modal-donation");
var modalDonationScreen = document.getElementById("modal-donation-screen");

var slideIndex = 0;

/*contact validate */
var mailformat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var submitButton = document.getElementById("form-submit");
var emailInput = document.getElementById("email-input");
var fnameInput = document.getElementById("fname-input");
var lnameInput = document.getElementById("lname-input");

showSlides();

/* navbar hide */

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navSreen.style.top = "0";
    navMobile.style.top = "0";
  } else {
    navSreen.style.top = "-50px";
    navMobile.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

/* mobile Dropdown */

function dropDown() {
  if (dropMenu.style.width == "200px") {
    dropMenu.style.width = "0";
    closeLayer.style.display = "none";
    closeDropDown();
  } else {
    closeLayer.style.display = "block";
    dropMenu.style.width = "200px";
  }
}

function closeDropDown() {
  closeLayer.style.display = "none";
  dropMenu.style.width = "0";
}

/* modal for donations */
function openModalDonation() {
  modalDonation.style.display = "block";
}

function closeModalDonation() {
  modalDonation.style.display = "none";
}

function openModalDonationScreen() {
  modalDonationScreen.style.display = "block";
}

function closeModalDonationScreen() {
  modalDonationScreen.style.display = "none";
}

/* Slideshow */

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 15000);
}

/* contact form validation */

submitButton.addEventListener("click", function (event) {});

function validateLname() {
  if (document.contact.lname.value == "") {
    lnameInput.style.borderStyle = "solid";
    lnameInput.style.borderColor = "red";
    document.contact.lname.focus();
    lnameInput.style.backgroundColor = "lightsalmon";
    event.preventDefault();
    return false;
  } else {
    lnameInput.style.borderStyle = "none";
    lnameInput.style.backgroundColor = "#354463";
  }
}

function validateFname() {
  if (document.contact.fname.value == "") {
    fnameInput.style.borderStyle = "solid";
    fnameInput.style.borderColor = "red";
    document.contact.fname.focus();
    event.preventDefault();
    fnameInput.style.backgroundColor = "lightsalmon";
    return false;
  } else {
    fnameInput.style.borderStyle = "none";
    fnameInput.style.backgroundColor = "#354463";
  }
}

function ValidateEmail(inputText) {
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    event.preventDefault();
    document.contact.email.focus();
    emailInput.style.borderStyle = "solid";
    emailInput.style.borderColor = "red";
    emailInput.style.backgroundColor = "lightsalmon";

    return false;
  }
}
