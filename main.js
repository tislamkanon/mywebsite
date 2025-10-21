const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark');
    toggle.checked = true;
}

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", () => {
    setTimeout(() => {
        preloader.classList.add("hidden");
    }, 500);
});