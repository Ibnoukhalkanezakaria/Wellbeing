import store from './store';

let revealObserver;

export function closeMenus() {
  document.querySelectorAll('.w--open').forEach(el => el.classList.remove('w--open'));
  document.querySelectorAll('.nav-dropdown-toggle, .menu-button').forEach(el => el.setAttribute('aria-expanded', 'false'));
  document.querySelector('.navigation-wrap')?.classList.remove('mobile-open');
}

export function initializePage() {
  revealObserver?.disconnect();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('[animation]').forEach(el => {
      el.classList.add('reveal-on-scroll');
      revealObserver.observe(el);
    });
  }
  document.querySelectorAll('.nav-dropdown-toggle, .menu-button, .w-slider-arrow-left, .w-slider-arrow-right').forEach(el => {
    el.setAttribute('role', 'button');
    el.setAttribute('tabindex', '0');
    if (el.matches('.nav-dropdown-toggle, .menu-button')) el.setAttribute('aria-expanded', 'false');
  });
  document.querySelectorAll('[data-w-bg-video-control]').forEach(el => el.setAttribute('aria-label', 'Pause background video'));
  document.querySelector('.menu-button')?.setAttribute('aria-label', 'Toggle navigation');
  document.querySelectorAll('.w-slider').forEach(slider => {
    const slides = slider.querySelectorAll('.w-slide');
    slides.forEach(slide => { slide.hidden = false; });
    slider.dataset.index = '0';
    slider.querySelectorAll('.w-slider-arrow-left, .w-slider-arrow-right').forEach(el => {
      el.setAttribute('aria-label', el.matches('.w-slider-arrow-left') ? 'Previous testimonial' : 'Next testimonial');
    });
  });
  document.querySelectorAll('form').forEach(form => {
    form.querySelectorAll('input, textarea, select').forEach(field => {
      if (!field.getAttribute('aria-label') && field.id && !document.querySelector(`label[for="${field.id}"]`)) {
        field.setAttribute('aria-label', field.placeholder || field.name || field.type);
      }
    });
  });
}

export function handleClick(event) {
  const target = event.target;
  const videoControl = target.closest('[data-w-bg-video-control]');
  if (videoControl) {
    const video = document.getElementById(videoControl.getAttribute('aria-controls'));
    if (video) {
      if (video.paused) video.play().catch(() => {});
      else video.pause();
      videoControl.setAttribute('aria-label', video.paused ? 'Play background video' : 'Pause background video');
      const icons = videoControl.querySelectorAll('span');
      icons.forEach((icon, index) => { icon.hidden = video.paused ? index === 0 : index === 1; });
    }
    return;
  }
  const menu = target.closest('.menu-button');
  if (menu) {
    const open = document.querySelector('.navigation-wrap').classList.toggle('mobile-open');
    menu.classList.toggle('w--open', open);
    menu.setAttribute('aria-expanded', String(open));
    return;
  }
  const dropdown = target.closest('.nav-dropdown-toggle');
  if (dropdown) {
    const open = dropdown.parentElement.querySelector('.dropdown-navigation').classList.toggle('w--open');
    dropdown.classList.toggle('w--open', open);
    dropdown.setAttribute('aria-expanded', String(open));
    return;
  }
  if (!target.closest('.nav-dropdown')) {
    document.querySelectorAll('.nav-dropdown .w--open').forEach(el => el.classList.remove('w--open'));
    document.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  }
  if (target.closest('.navigation-wrap a')) closeMenus();
  const faq = target.closest('.faq-tab-link');
  if (faq) {
    event.preventDefault();
    const open = faq.getAttribute('aria-expanded') !== 'true';
    faq.closest('.faq-tabs').querySelectorAll('.faq-tab-link').forEach(el => {
      el.classList.toggle('w--current', el === faq && open);
      el.setAttribute('aria-expanded', String(el === faq && open));
    });
    return;
  }
  const tab = target.closest('.w-tab-link');
  if (tab) {
    event.preventDefault();
    const group = tab.closest('.w-tabs');
    group.querySelectorAll('.w-tab-link').forEach(el => {
      el.classList.toggle('w--current', el === tab);
      el.setAttribute('aria-selected', String(el === tab));
    });
    group.querySelectorAll('.w-tab-pane').forEach(el => el.classList.toggle('w--tab-active', el.dataset.wTab === tab.dataset.wTab));
  }
  const arrow = target.closest('.w-slider-arrow-left, .w-slider-arrow-right');
  if (arrow) {
    const slider = arrow.closest('.w-slider');
    const mask = slider.querySelector('.w-slider-mask');
    const direction = arrow.matches('.w-slider-arrow-left') ? -1 : 1;
    const atEnd = mask.scrollLeft + mask.clientWidth >= mask.scrollWidth - 4;
    const atStart = mask.scrollLeft <= 4;
    if (direction > 0 && atEnd) mask.scrollTo({ left: 0, behavior: 'smooth' });
    else if (direction < 0 && atStart) mask.scrollTo({ left: mask.scrollWidth, behavior: 'smooth' });
    else mask.scrollBy({ left: direction * mask.clientWidth, behavior: 'smooth' });
  }
}

export function handleKey(event) {
  if (event.key === 'Escape') closeMenus();
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[role="button"], [role="tab"]')) {
    event.preventDefault();
    event.target.click();
  }
}

export function handleSubmit(event) {
  const form = event.target;
  if (!form.reportValidity()) return;
  const wrapper = form.closest('.w-form');
  const feedback = wrapper?.querySelector('.w-form-done');
  if (!feedback) return;
  feedback.setAttribute('role', 'status');
  feedback.style.display = 'block';
  if (form.classList.contains('subscribe-form')) {
    const email = form.querySelector('input[type="email"]').value;
    store.commit('saveNewsletterInterest', email);
    feedback.textContent = 'Your interest is saved on this device. Newsletter delivery is not connected yet.';
  } else {
    const values = Array.from(new FormData(form).entries());
    const body = values.map(([name, value]) => `${name}: ${value}`).join('\n\n');
    const link = document.createElement('a');
    link.href = `mailto:hello@wellbeing.studio?subject=${encodeURIComponent('Bloomwell studio enquiry')}&body=${encodeURIComponent(body)}`;
    link.textContent = 'Open your email app to send your message';
    feedback.replaceChildren(document.createTextNode('Your message is ready. '), link);
  }
}
