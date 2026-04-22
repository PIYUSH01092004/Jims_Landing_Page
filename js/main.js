// JIMS Greater Noida - main js

document.addEventListener('DOMContentLoaded', function() {
  setupNavbar();
  setupMobileMenu();
  handleScrollReveal();
  setupFormValidation();
});

// sticky header on scroll
function setupNavbar() {
  var header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// mobile menu toggle
function setupMobileMenu() {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  var links = mobileNav.querySelectorAll('a');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  links.forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// reveal elements on scroll
function handleScrollReveal() {
  var items = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function(el) { observer.observe(el); });
}

// form handling
function setupFormValidation() {
  var form = document.getElementById('enquiryForm');
  if (!form) return;

  var fields = {
    name: {
      el: document.getElementById('field-name'),
      errorEl: document.getElementById('error-name'),
      validate: function(val) {
        if (!val.trim()) return 'Name is required';
        if (val.trim().length < 2) return 'Name is too short';
        return '';
      }
    },
    email: {
      el: document.getElementById('field-email'),
      errorEl: document.getElementById('error-email'),
      validate: function(val) {
        if (!val.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())) return 'Enter a valid email';
        return '';
      }
    },
    phone: {
      el: document.getElementById('field-phone'),
      errorEl: document.getElementById('error-phone'),
      validate: function(val) {
        if (!val.trim()) return 'Phone number is required';
        if (!/^[6-9]\d{9}$/.test(val.trim())) return 'Enter a valid 10 digit number';
        return '';
      }
    },
    course: {
      el: document.getElementById('field-course'),
      errorEl: document.getElementById('error-course'),
      validate: function(val) {
        if (!val) return 'Please select a course';
        return '';
      }
    }
  };

  // validate on blur
  Object.keys(fields).forEach(function(key) {
    var field = fields[key];
    field.el.addEventListener('blur', function() { checkField(field); });
    field.el.addEventListener('input', function() {
      if (field.el.classList.contains('error')) {
        checkField(field);
      }
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var valid = true;

    Object.keys(fields).forEach(function(key) {
      if (!checkField(fields[key])) valid = false;
    });

    if (valid) {
      document.getElementById('formFields').style.display = 'none';
      document.getElementById('formSuccess').classList.add('visible');
    }
  });
}

function checkField(field) {
  var msg = field.validate(field.el.value);
  if (msg) {
    field.el.classList.add('error');
    field.errorEl.textContent = msg;
    field.errorEl.classList.add('visible');
    return false;
  }
  field.el.classList.remove('error');
  field.errorEl.textContent = '';
  field.errorEl.classList.remove('visible');
  return true;
}
