document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as seções que devem ter a animação
    const animatedSections = document.querySelectorAll('.content-section');

    // Verifica se há seções para animar
    if (animatedSections.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                // Quando o elemento entra na área de visualização
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Opcional: Para a animação ocorrer apenas uma vez,
                    // removemos o elemento da observação após ele se tornar visível.
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1 // A animação dispara quando 10% da seção está visível
        });

        // Inicia a observação para cada seção
        animatedSections.forEach(section => {
            observer.observe(section);
        });
    }
});