var dropMenu = document.getElementById('nav-mobile-drop');
var closeLayer = document.getElementById('close-layer');



function dropDown(){
    
    

    if(dropMenu.style.width == '250px'){
        dropMenu.style.width = '0';
        closeLayer.style.display = 'block';
    }

    else{
        closeLayer.style.display = 'none';
        dropMenu.style.width = '250px';
    }
    
}

function closeDropDown(){
    closeLayer.style.display = 'none'
    dropMenu.style.width = '0'
}