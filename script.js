// Aktuelles Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scroll für interne Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
      // Menü auf Mobil schließen
      nav.classList.remove('open');
    }
  });
});

// Intersection Observer für Fade-In-Effekt
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.observe').forEach(el => observer.observe(el));

// Mobiles Menü
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

