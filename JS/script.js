let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let userdata = document.getElementsByClassName("myUserData");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < userdata.length; i++) {
    userdata[i].style.display = "none";  
  }
  if (slideIndex > userdata.length) {slideIndex = 1}     
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  userdata[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


document.getElementById("name").innerText = pname;
function validateForm() {
  var fullname = document.forms["message-form"]["full-name"].value;
  var email = document.forms["message-form"]["email-address"].value;
  var interest = document.forms["message-form"]["int"].value;

  if (fullname == "" || email == "" || interest == "") {
  alert("input tidak boleh kosong");
  return false;    
  }
return false;
}
let fullnameInput= document.getElementById("name-Input");
let fullnameError= document.getElementById("name-error");
let emptyfullnameError= document.getElementById("empty-name");