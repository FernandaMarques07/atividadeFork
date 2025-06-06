// Animação suave no título ao carregar a página
window.addEventListener('load', () => {
    const titulo = document.querySelector('header h1');
    titulo.style.opacity = 0;
    titulo.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        titulo.style.transition = 'all 1s ease';
        titulo.style.opacity = 1;
        titulo.style.transform = 'translateY(0)';
    }, 200);
});

// Efeito de hover nos links do menu
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffd6e7'; // tom de rosa claro
        link.style.textShadow = '0 0 5px #ff69b4';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white';
        link.style.textShadow = 'none';
    });
});

// Alerta de boas-vindas
setTimeout(() => {
    alert('Seja bem-vinde ao nosso projeto rosa super estiloso! 🌸');
}, 500);

