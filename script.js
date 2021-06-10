var dropMenu = document.getElementById('nav-mobile-drop');
var closeLayer = document.getElementById('close-layer') 



function dropDown(){
    
    if(dropMenu.style.display == 'block'){
        dropMenu.style.display = 'none'
        closeLayer.style.display = 'none'
    }

    else{
        
        dropMenu.style.display = 'block'
        closeLayer.style.display = 'block'

    }
}

function closeDropDownOnLayer(){
    dropMenu.style.display = 'none'
    closeLayer.style.display = 'none'
}