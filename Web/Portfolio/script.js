document.addEventListener('DOMContentLoaded', function(){
  // Set copyright year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if(!expanded){
        primaryNav.style.display = 'block';
      } else {
        primaryNav.style.display = '';
      }
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId.length > 1){
        const target = document.querySelector(targetId);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
          // close nav on mobile
          if(window.innerWidth <= 640 && primaryNav){
            primaryNav.style.display = '';
            if(navToggle) navToggle.setAttribute('aria-expanded','false');
          }
        }
      }
    });
  });

  // Contact form: open mailto fallback
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        if(status) status.textContent = 'Please complete all fields.';
        return;
      }

      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const mailto = `mailto:you@example.com?subject=${subject}&body=${body}`;

      // Try to open mail client
      window.location.href = mailto;
      if(status) status.textContent = 'Opening your email client...';
      form.reset();
    });
  }
});
