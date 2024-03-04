function mostrarResposta(id) {
    var resposta = document.getElementById(id);
    if (resposta.style.display === 'none') {
        resposta.style.display = 'block';
    } else {
        resposta.style.display = 'none';
    }
}

function scrollToSection(targetPosition, duration) {
    const startingPosition = window.pageYOffset;
    const distance = targetPosition - startingPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = ease(timeElapsed, startingPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função para suavizar a rolagem
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Seleciona todos os links do menu
const linksMenu = document.querySelectorAll('.links-menu a');

// Adiciona um evento de clique a cada link do menu
linksMenu.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        // Obtém o id da seção correspondente ao link clicado
        const sectionId = this.getAttribute('href');

        // Obtém a posição da seção correspondente
        const sectionPosition = document.querySelector(sectionId).offsetTop;

        // Define a duração da rolagem suave (em milissegundos)
        const duration = 1000; // Altere este valor para ajustar a velocidade (quanto maior, mais lento)

        // Faz a rolagem suave até a seção correspondente
        scrollToSection(sectionPosition, duration);
    });
});




