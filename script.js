const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileToggle.classList.remove('active');
  });
});

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.style.borderBottomColor = 'rgba(185, 28, 28, 0.12)';
  } else {
    navbar.style.borderBottomColor = 'rgba(185, 28, 28, 0.08)';
  }

  lastScroll = currentScroll;
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll(
    '.stat-card, .product-card, .value-item, .mission-text, .section-title-dark, .section-title-light, .cta-title'
  );

  animateElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});

const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .product-card.fade-in {
    transition-delay: calc(var(--i, 0) * 0.1s);
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.product-card').forEach((card, i) => {
  card.style.setProperty('--i', i);
});
