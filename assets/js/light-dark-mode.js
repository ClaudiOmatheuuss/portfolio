// script para light e dark mode

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme');
    const themeToggleButton = document.querySelector('.theme-toggle');

    document.body.setAttribute('data-theme', currentTheme);

    themeToggleButton.addEventListener('click', () => {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateImageSource()
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateImageSource()
        }
    });

    // elimina texto no botão ao ser clicado
    const toggle_btn_textElement = themeToggleButton.querySelector('span');

    themeToggleButton.addEventListener("click", () => {
        toggle_btn_textElement.textContent = '';
    })
});

function updateImageSource() {
    const currentTheme = localStorage.getItem('theme');
    const imgElement = document.querySelector('.theme-indicator');

    if (currentTheme === 'light') {
        imgElement.src = './assets/img/icons/moon.png';
    } else if (currentTheme === '' || currentTheme === 'dark') {
        imgElement.src = './assets/img/icons/sun.png';
    }
}

window.onload = updateImageSource();