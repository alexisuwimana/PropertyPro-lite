// Get the modal
 
var modal = document.getElementById('id01');

    
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function signup(){
    document.getElementById('id02').style.display='block'
}

function cancelLogin(){
    document.getElementById('id01').style.display='none'; 
}

function cancelSignup(){
    document.getElementById('id02').style.display='none'
}


function login(){
    document.getElementById('id01').style.display='block'
}

function spanLogin(){
    document.getElementById('id01').style.display='none'
}

function spanSignup(){
    document.getElementById('id02').style.display='none'
}




//single image property

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  
  // map
  
  function myMap() {
  var mapProp = {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
  
  function spanSingle(){
    document.getElementById('id02').style.display='none'
  }