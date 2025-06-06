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


// -----------------------------
// Funcionalidade para página de contato
// -----------------------------

// Só executa se o formulário de contato existir
const formContato = document.querySelector('form');

if (formContato) {
    formContato.addEventListener('submit', (e) => {
        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (!nome || !email || !mensagem) {
            e.preventDefault(); // impede o envio
            alert('Por favor, preencha todos os campos antes de enviar. 💬');
        } else {
            alert('Mensagem enviada com sucesso! ✨');
        }
    });
}
