const themeToggle = document.querySelector('.theme-toggle');

if (themeToggle) {
    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;

        const isDark = theme === 'dark';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
        themeToggle.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
        themeToggle.innerHTML = `<i class='bx bx-${isDark ? 'sun' : 'moon'}' aria-hidden="true"></i>`;
    }

    applyTheme(document.documentElement.dataset.theme);

    themeToggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
        localStorage.setItem('bookmark-manager-theme', nextTheme);
    });

    window.addEventListener('storage', (event) => {
        if (event.key === 'bookmark-manager-theme' && (event.newValue === 'light' || event.newValue === 'dark')) {
            applyTheme(event.newValue);
        }
    });
}
