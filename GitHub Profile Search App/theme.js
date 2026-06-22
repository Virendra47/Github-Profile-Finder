// Theme management

const Theme = {
    init() {
        const theme = Storage.getTheme();
        this.apply(theme);
        this.setupToggle();
    },
    
    apply(theme) {
        document.body.classList.toggle('dark', theme === 'dark');
        const label = document.getElementById('themeLabel');
        if (label) label.textContent = theme === 'dark' ? 'Light' : 'Dark';
        Storage.setTheme(theme);
    },
    
    toggle() {
        const current = Storage.getTheme();
        const next = current === 'light' ? 'dark' : 'light';
        this.apply(next);
    },
    
    setupToggle() {
        const toggle = document.getElementById('themeToggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }
    }
};

// Initialize theme
document.addEventListener('DOMContentLoaded', () => Theme.init());