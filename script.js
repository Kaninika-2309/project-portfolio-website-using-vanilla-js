document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links (modern browsers support natively)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Fake contact form submission
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert("✅ Message sent successfully! (Demo only)");
    form.reset();
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
window.addEventListener('scroll', () => {
  const scrollBar = document.querySelector('.scroll-bar');
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  const width = (scrolled / height) * 100;
  scrollBar.style.width = `${width}%`;
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});
