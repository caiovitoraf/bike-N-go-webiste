document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    
    // Verifica se o botão existe na página antes de continuar
    if (!themeSwitcher) {
        return;
    }

    const themeIcon = themeSwitcher.querySelector('img');
    const sunIconSrc = './img/sun.svg';
    const moonIconSrc = './img/moon.svg';

    // Função para aplicar o tema e atualizar o ícone
    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.setAttribute('data-theme', 'light');
            if (themeIcon) themeIcon.src = moonIconSrc;
            localStorage.setItem('theme', 'light');
        } else {
            document.body.removeAttribute('data-theme');
            if (themeIcon) themeIcon.src = sunIconSrc;
            localStorage.setItem('theme', 'dark');
        }
    };

    // Ao carregar a página, verifica se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem('theme');
    // Aplica o tema salvo ou o padrão do sistema operacional (se for escuro)
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        applyTheme('dark'); // Padrão é escuro se não houver preferência
    }

    // Adiciona o evento de clique no botão
    themeSwitcher.addEventListener('click', (event) => {
        event.preventDefault();
        const currentTheme = document.body.getAttribute('data-theme');
        // Alterna entre os temas
        applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
});