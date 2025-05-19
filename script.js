// Adicionando classe 'scrolled' quando o usuário rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
// Função para rolagem suave ao clicar no botão "Conheça Nossos Serviços"
document.getElementById('scrollToServices').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById('servicos').scrollIntoView({
        behavior: 'smooth', // Faz a rolagem suave
        block: 'start' // Faz a rolagem até o início da seção
    });
});

// Função para rolagem suave ao clicar no botão "Conheça Nossos Serviços" no Hero
document.getElementById('scrollToServicesBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    document.getElementById('servicos').scrollIntoView({
        behavior: 'smooth', // Faz a rolagem suave
        block: 'start' // Faz a rolagem até o início da seção
    });
});


// Carrossel automático de depoimentos
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
const carousel = document.querySelector('.testimonial-carousel');

function showNextTestimonial() {
    index = (index + 1) % testimonials.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Inicia o carrossel a cada 5 segundos
setInterval(showNextTestimonial, 5000);

// Seleciona o botão de menu e a barra de navegação
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

// Adiciona evento de clique para mostrar/ocultar o menu
menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('show'); // Alterna a classe 'show' para exibir ou esconder o menu
});

let lastScrollTop = 0; // Variável para armazenar a posição do último scroll

// Função que lida com o evento de rolagem
window.addEventListener("scroll", function() {
    const header = document.querySelector('header'); // Seleciona o header
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Verifica se o usuário rolou para baixo
    if (currentScroll > lastScrollTop) {
        header.classList.add("hidden"); // Adiciona a classe para esconder o header
    } else {
        header.classList.remove("hidden"); // Remove a classe para mostrar o header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Impede que o valor de scroll seja negativo
});

