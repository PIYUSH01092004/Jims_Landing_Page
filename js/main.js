/* ============================================
   JIMS Greater Noida — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initFormValidation();
});

/* ---------- Sticky Navbar ---------- */
function initNavbar() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileLinks = mobileNav.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

/* ---------- Form Validation ---------- */
function initFormValidation() {
  const form = document.getElementById('enquiryForm');
  if (!form) return;

  const fields = {
    name: {
      el: document.getElementById('field-name'),
      errorEl: document.getElementById('error-name'),
      validate(val) {
        if (!val.trim()) return 'Full name is required.';
        if (val.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      }
    },
    email: {
      el: document.getElementById('field-email'),
      errorEl: document.getElementById('error-email'),
      validate(val) {
        if (!val.trim()) return 'Email address is required.';
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(val.trim())) return 'Please enter a valid email.';
        return '';
      }
    },
    phone: {
      el: document.getElementById('field-phone'),
      errorEl: document.getElementById('error-phone'),
      validate(val) {
        if (!val.trim()) return 'Phone number is required.';
        const pattern = /^[6-9]\d{9}$/;
        if (!pattern.test(val.trim())) return 'Enter a valid 10-digit Indian mobile number.';
        return '';
      }
    },
    course: {
      el: document.getElementById('field-course'),
      errorEl: document.getElementById('error-course'),
      validate(val) {
        if (!val) return 'Please select a course.';
        return '';
      }
    }
  };

  // Real-time validation on blur
  Object.values(fields).forEach(field => {
    field.el.addEventListener('blur', () => validateField(field));
    field.el.addEventListener('input', () => {
      if (field.el.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    Object.values(fields).forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (isValid) {
      // Hide form, show success
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').classList.add('visible');
    }
  });
}

function validateField(field) {
  const msg = field.validate(field.el.value);
  if (msg) {
    field.el.classList.add('error');
    field.errorEl.textContent = msg;
    field.errorEl.classList.add('visible');
    return false;
  } else {
    field.el.classList.remove('error');
    field.errorEl.textContent = '';
    field.errorEl.classList.remove('visible');
    return true;
  }
}
