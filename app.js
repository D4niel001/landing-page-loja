function menuMobile() {
    const navLinks = document.querySelectorAll('.nav li a');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const nav = document.querySelector('.nav');

    menuHamburguer.addEventListener('click', () => {
        nav.classList.toggle('ativo');
    });


    // Scroll suave ao clicar no link

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o comportamento padrão da âncora

            const targetId = link.getAttribute('href').substring(1); // Pega o ID (remove o #)
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const menuHeight = document.querySelector('.menu').offsetHeight; // Altura do menu fixo
                const targetPosition = targetSection.offsetTop - menuHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Fecha o menu no mobile
            nav.classList.remove('ativo');
        });
    });

}

menuMobile();