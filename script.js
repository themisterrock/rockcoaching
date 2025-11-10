// =============================
// Rock Coaching – Shared Script
// =============================
// Handles: mobile nav toggle, theme toggle, reveal animations

// --- Mobile Nav ---
const header = document.querySelector('.site-header');
const mobileToggle = document.querySelector('.mobile-toggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
}

// --- Theme Toggle ---
const root = document.documentElement;
const btnTheme = document.querySelector('.theme-toggle');
if (btnTheme) {
  btnTheme.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  });
}

// --- Reveal Animations ---
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  reveals.forEach(el => observer.observe(el));
} else {
  // Fallback if IntersectionObserver not supported
  reveals.forEach(el => el.classList.add('reveal--visible'));
}

// --- Accessibility / Cleanup ---
// Close mobile nav when link clicked (mobile UX)
const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (header.classList.contains('nav-open')) {
      header.classList.remove('nav-open');
    }
  });
});