
(() => {
  const sms = document.querySelector('#open-confirmation-sms');
  if (!sms) return;
  const operator = document.body.dataset.operator;
  const isApple = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  sms.setAttribute('href', operator === 'swisscom' ? 'sms:995' : 'sms:995' + (isApple ? '&' : '?') + 'body=OK');
  // The same page language supplies the modal; no language or operator selector is added.
  const billing = new URLSearchParams(location.search).get('billing');
  const lang = document.documentElement.lang.startsWith('fr') ? 'fr' : 'de';
  const split = operator === 'swisscom' || (operator === 'salt' && billing !== '1x15');
  const charges = {
    de: { single: '1 SMS pro Woche à 15 CHF.', split: '3 SMS pro Woche à 5 CHF.' },
    fr: { single: '1 SMS par semaine à 15 CHF.', split: '3 SMS par semaine à 5 CHF.' }
  };
  document.querySelectorAll('[data-confirmation-billing]').forEach(label => {
    label.textContent = charges[lang][split ? 'split' : 'single'];
  });
  const directEntry = document.body.dataset.confirmationEntry === 'true';
  const form = document.querySelector('.offer-form');
  const dialog = document.querySelector('#subscription-confirmation');
  if (!form || !dialog || typeof dialog.showModal !== 'function') return;
  const phone = form.querySelector('input[type=tel]');
  const submit = form.querySelector('button[type=submit]');
  const video = document.querySelector('.media video');
  let returnFocus = submit;
  let resumeVideo = false;
  const updateHash = (hash, replace = false) => {
    const target = new URL(location.href);
    target.hash = hash;
    history[replace ? 'replaceState' : 'pushState'](null, '', target.href);
  };
  const show = () => {
    if (dialog.open) return;
    returnFocus = document.activeElement && document.activeElement !== document.body ? document.activeElement : submit;
    resumeVideo = Boolean(video && !video.paused);
    if (video) video.pause();
    dialog.showModal();
    document.documentElement.classList.add('confirmation-visible');
    if (location.hash !== '#confirm') updateHash('confirm');
  };
  const dismiss = () => { if (dialog.open) dialog.close(); };
  dialog.addEventListener('close', () => {
    document.documentElement.classList.remove('confirmation-visible');
    if (location.hash === '#confirm') updateHash(directEntry ? 'landing' : '', true);
    if (resumeVideo && video && !matchMedia('(prefers-reduced-motion: reduce)').matches) video.play().catch(() => {});
    (returnFocus && returnFocus.isConnected ? returnFocus : submit).focus({preventScroll:true});
  });
  dialog.querySelector('[data-close-confirmation]').addEventListener('click', dismiss);
  phone.addEventListener('input', () => phone.setCustomValidity(''));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const digits = phone.value.replace(/\D/g, '');
    phone.setCustomValidity(digits.length >= 9 && digits.length <= 15 ? '' : phone.dataset.invalid);
    if (form.reportValidity()) show();
  });
  window.addEventListener('hashchange', () => location.hash === '#confirm' ? show() : dismiss());
  if (location.hash === '#confirm' || (directEntry && location.hash !== '#landing')) show();
})();
