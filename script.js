// smooth scroll للروابط
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// تظليل الرابط النشط
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollPos = window.scrollY + 100;
  sections.forEach(sec => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});
