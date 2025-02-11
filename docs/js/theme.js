(() => {
  const STORAGE_KEY = 'ui-kit-theme';
  const root = document.documentElement;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY)
      || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀ Light mode' : '🌙 Dark mode';
    localStorage.setItem(STORAGE_KEY, theme);
  }

  applyTheme(getTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getTheme());
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    }
  });
})();
