const dialog = document.querySelector('#notice');
document.querySelectorAll('[data-info], [data-contact]').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.info;
    document.querySelector('#notice-title').textContent = name || 'Get in touch';
    document.querySelector('#notice-text').textContent = name
      ? `${name} is a template placeholder. Add your own ${name.includes('policy') ? 'policy text' : 'profile link'} when personalizing this portfolio.`
      : 'This is the template contact area. Contact details will be added with the portfolio content.';
    dialog.showModal();
  });
});
if (dialog) dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
