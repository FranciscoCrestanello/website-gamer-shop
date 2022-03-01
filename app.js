let images = ['/Images/img1.jfif','/Images/img2.png','/Images/img3.jpg'];
let cont = 0, time = 2500;

window.addEventListener('load',function(){
    setInterval(cambiarImg, time);
});

cambiarImg = () => {
    if(cont < 2){
        cont++;
    }
    else {
        cont = 0;
    }
    document.getElementById("carouselImg").src = images[cont];
    document.getElementById("carouselImg2").src = images[cont];
}

showOrHideMenu = () => {
    if(document.getElementById("Menu").style.visibility == "visible"){
        document.getElementById("Menu").style.visibility = "hidden";
    }
    else {
        document.getElementById("Menu").style.visibility = "visible";
    }
    
}