function handleSubscribeForm() {
  const form = document.getElementById('subscribeForm');
  const thanksMessage = document.getElementById('thanksMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    thanksMessage.style.display = 'block';
    form.reset();
  });
}

function handleThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function setTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
      themeIcon.src = 'images/sun.png';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      themeIcon.src = 'images/moon.png';
      localStorage.setItem('theme', 'dark');
    }
  }

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  });

  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
}

window.addEventListener('DOMContentLoaded', () => {
  handleSubscribeForm();
  handleThemeToggle();
});
