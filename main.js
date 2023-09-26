// Get the menu toggle element
const menuToggle = document.querySelector('.menu-toggle');

// Get the navigation links container
const navLinks = document.querySelector('.nav-links');

// Toggle the 'menu-active' class when the menu is clicked
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('menu-active');
});
