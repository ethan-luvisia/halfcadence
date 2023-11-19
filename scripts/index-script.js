// Hamburger Menu

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', () => {
      console.log("clicked!");
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  });