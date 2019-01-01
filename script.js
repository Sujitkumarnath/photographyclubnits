var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
};



$(document).ready(function(){
    var jum=$(".jum");
     jum.animate({height:'200px'},"slow");
     jum.animate({width:'100%'},"slow");
})

$("#info").on("click",function(){
	$("#js").html("<p>Obiettivo is the official photography club of NIT Silchar that functions under the supreme body of Gymkhana. Creative the name it is, Obiettivo in Italian stands for lens. Presently run under the aegis of the Club secretary head,Kousthavjit Sharma, this club has a promising future. Since being reopened on the 5th of September 2010, the club has been ascending heights of excellence</p>")
    $(".jum2").css("height","300px");
});

