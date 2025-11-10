const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

// === Tema Claro/Oscuro ===
const userTheme = localStorage.getItem('theme');
if (userTheme === 'light') document.body.classList.add('light');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('light') ? 'light' : 'dark'
  );
});

// === Menú Hamburguesa ===
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});
