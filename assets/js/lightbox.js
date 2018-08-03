function lightbox1(idx) {
    //Show the slider wrapper
    var ninjaSldr = document.getElementById("ninja-slider1");
    ninjaSldr.parentNode.style.display = "block";

    //Then init the slider
    //Note: The { initSliderByCallingInitFunc: true } option in the 
    // ninja-slider.js tells the page not to initiate the slider
    // unless the following init(idx) function is called.
    nslider1.init(idx);

    //Then mimic clicking the fullscreen button to popup the modal
    var fsBtn = document.getElementById("fsBtn1");
    fsBtn.click();
}

function lightbox2(idx) {
    //Show the slider wrapper
    var ninjaSldr = document.getElementById("ninja-slider2");
    ninjaSldr.parentNode.style.display = "block";

    //Then init the slider
    //Note: The { initSliderByCallingInitFunc: true } option in the 
    // ninja-slider.js tells the page not to initiate the slider
    // unless the following init(idx) function is called.
    nslider2.init(idx);

    //Then mimic clicking the fullscreen button to popup the modal
    var fsBtn = document.getElementById("fsBtn2");
    fsBtn.click();
}

function fsIconClick(isFullscreen, ninjaSldr) {
    //Note: fsIconClick is the default event handler of the fullscreen button
    if (isFullscreen) {
        ninjaSldr.parentNode.style.display = "none";
    }
}