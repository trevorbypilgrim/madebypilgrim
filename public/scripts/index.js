// Enable progressive enhancements
document.body.setAttribute('data-no-js', false);

// Document scripts
function handleDOMContentLoaded() {
  // Interactive DOM elements
  const navLinks = document.querySelectorAll('header > nav a');
  const sections = document.querySelectorAll('main > article > section');
  const contact = document.getElementById('c');
  const form = contact.querySelector('form');

  // Event handler functions
  function handleSubmit(e) {
    e.preventDefault();

    Array.from(form.querySelectorAll('input, select, textarea'))
      .filter(el => (
        el.getAttribute('type') !== 'hidden'
        && el.getAttribute('type') !== 'submit'
      ))
      .forEach(el => {
        el.value = '';
      });

    window.alert('You\'ll be hearing from us soon');
  }
  const handleClicks = Array.from(navLinks).map(l => e => {
    e.preventDefault();

    Array.from(sections).forEach(s => {
      s.classList.toggle('is-active', s.id === l.getAttribute('href').slice(1));
    });
  });

  // Add event listeners
  Array.from(navLinks).forEach((l, i) => {
    l.addEventListener('click', handleClicks[i]);
  });
  form.addEventListener('submit', handleSubmit);
}

// Kick off scripts
window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
