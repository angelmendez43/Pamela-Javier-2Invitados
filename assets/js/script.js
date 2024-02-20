document.addEventListener('DOMContentLoaded', () => {
    const fallElements = document.querySelectorAll('.fall-animation');
    fallElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate');
      }, index * 500);
    });
  });
  
  window.addEventListener('scroll', () => {
    const fallElements = document.querySelectorAll('.fall-animation');
    fallElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        el.style.animationPlayState = 'running';
      }
    });
  });
  


  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let indicators = document.getElementsByClassName("indicator");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active-indicator", "");
    }
    slides[slideIndex-1].style.display = "block";
    indicators[slideIndex-1].className += " active-indicator";
  }
  
  // Actualizar moveSlide para utilizar plusSlides
  function moveSlide(n) {
    plusSlides(n);
  }
  


  function confirmAssistance(phone) {
    // var numInvitados = document.getElementById('numInvitados').value;
    var message = encodeURIComponent("Hola confirmo mi asistencia a tu boda");
    window.open("https://wa.me/" + phone + "?text=" + message, "_blank");
  }


