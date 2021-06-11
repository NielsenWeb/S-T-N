

var dropMenu = document.getElementById("nav-mobile-drop");
var closeLayer = document.getElementById("close-layer");
var modalDonation = document.getElementById('modal-donation')
var modalDonation = document.getElementById('modal-donation-screen')


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



function openModalDonation() {
    modalDonation.style.display = 'block'
}

function closeModalDonation(){
    modalDonation.style.display = 'none'
}


