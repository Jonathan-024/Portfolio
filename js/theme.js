
function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (mode === 'light') {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.removeItem('theme');
    applySystemTheme();
  }
}
function applySystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else if (savedTheme === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  applySystemTheme();
}
document.addEventListener('DOMContentLoaded', () => {
  const switcher = document.getElementById('theme-switcher');
  if (switcher) {
    switcher.addEventListener('change', (e) => setTheme(e.target.value));
    switcher.value = savedTheme || 'system';
  }
});
