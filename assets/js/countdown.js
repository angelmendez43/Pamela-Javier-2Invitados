function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const weddingDate = new Date('April 20, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = weddingDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
  }
  

  setInterval(updateCountdown, 1000);
  