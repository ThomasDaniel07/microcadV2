$(document).ready(function(){
  $('.slider').bxSlider({
    slideWidth:800,
    responsive:true
  });
});

document.getElementById("formulario").addEventListener("submit",(event)=>{
  event.preventDefault()
  window.location.href = "thanks.html"
})