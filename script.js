// Add your JavaScript here for interactivity

// Example: Toggle mobile navigation menu
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '☰';
  toggleButton.classList.add('nav-toggle');
  nav.insertBefore(toggleButton, nav.querySelector('.logo'));

  toggleButton.addEventListener('click', () => {
      nav.classList.toggle('nav-open');
  });
});
