/* ============================================
   CONTROLADOR DE NAVBAR
   ============================================ */

class NavbarController {
    constructor() {
        this.toggle = document.getElementById('navToggle');
        this.menu = document.getElementById('navMenu');
        this.links = document.querySelectorAll('.navbar__link');

        this.init();
    }

    init() {
        if (!this.toggle || !this.menu) return;

        // Toggle menu
        this.toggle.addEventListener('click', () => this.toggleMenu());

        // Cerrar menu al hacer click en un link
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Cerrar menu al hacer scroll
        window.addEventListener('scroll', () => this.closeMenu());
    }

    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.menu.classList.toggle('active');
    }

    closeMenu() {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
    }
}

// Inicializar navbar controller
document.addEventListener('DOMContentLoaded', () => {
    new NavbarController();
});
