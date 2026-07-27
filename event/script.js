/* ── Event Pages – Shared Script ── */

document.addEventListener('DOMContentLoaded', () => {

  /* Site Header Mobile Menu */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const headerNav = document.getElementById('headerNav');
  const menuIconOpen = document.querySelector('.menu-icon-open');
  const menuIconClose = document.querySelector('.menu-icon-close');

  if (mobileMenuBtn && headerNav && menuIconOpen && menuIconClose) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = headerNav.classList.toggle('nav-open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      menuIconOpen.style.display = isOpen ? 'none' : 'block';
      menuIconClose.style.display = isOpen ? 'block' : 'none';
    });
  }

  document.querySelectorAll('.nav-dropdown-btn').forEach(btn => {
    btn.addEventListener('click', event => {
      if (window.innerWidth > 768) return;
      event.preventDefault();
      const dropdown = btn.closest('.nav-dropdown');
      const willOpen = !dropdown.classList.contains('open');

      document.querySelectorAll('.nav-dropdown.open').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      });

      dropdown.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  /* ── Copyright Year ── */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ── FAQ Accordion ── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // toggle clicked
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ── Social Share ── */
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  document.querySelectorAll('.share-btn[data-platform]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const platform = btn.dataset.platform;
      let url = '';
      switch (platform) {
        case 'whatsapp':
          url = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
          break;
        case 'twitter':
          url = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
          break;
        case 'facebook':
          url = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
          break;
        case 'telegram':
          url = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
          break;
        case 'copy':
          navigator.clipboard.writeText(window.location.href).then(() => {
            const orig = btn.innerHTML;
            btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg> Copied!';
            setTimeout(() => { btn.innerHTML = orig }, 2000);
          });
          return;
      }
      if (url) window.open(url, '_blank', 'width=600,height=400,noopener');
    });
  });

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => observer.observe(el));
  }
});
