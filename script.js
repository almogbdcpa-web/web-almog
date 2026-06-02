// Navbar: add shadow + background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-in on scroll via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Contact form → open WhatsApp with message
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name    = form.name.value.trim();
  const phone   = form.phone.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  const text = encodeURIComponent(
    `שלום אלמוג, שמי ${name}.\n` +
    (subject ? `נושא: ${subject}\n` : '') +
    (message ? `${message}\n` : '') +
    `טלפון: ${phone}`
  );

  window.open(`https://wa.me/972XXXXXXXXX?text=${text}`, '_blank');
}
