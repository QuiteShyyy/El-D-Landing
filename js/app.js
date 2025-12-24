/* ============================================
   APLICACIÓN PRINCIPAL
   ============================================ */

class PizzaApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupFormHandling();
        this.renderMenuComponents();
    }

    renderMenuComponents() {
        // Renderizar menú destacado en el home
        const isHomePage = document.getElementById('menuGrid') && !document.querySelector('.menu-page');
        if (isHomePage) {
            const menuRenderer = new MenuRenderer('menuGrid', null, PIZZERIA_DATA, true);
            menuRenderer.render();
        }

        // Renderizar menú completo con filtros
        const isMenuPage = document.querySelector('.menu-page');
        if (isMenuPage) {
            const fullMenuRenderer = new MenuRenderer('menuGrid', 'menuFilters', PIZZERIA_DATA, false);
            fullMenuRenderer.render();
        }

        // Renderizar carrusel
        const carouselTrack = document.getElementById('carouselTrack');
        if (carouselTrack) {
            const carouselRenderer = new CarouselRenderer('carouselTrack', 'carouselDots', PIZZERIA_DATA.specialties);
            carouselRenderer.render();
            this.setupCarousel();
        }

        // Renderizar testimonios
        const testimonialsGrid = document.getElementById('testimonialsGrid');
        if (testimonialsGrid) {
            const testimonialsRenderer = new TestimonialsRenderer('testimonialsGrid', PIZZERIA_DATA.testimonials);
            testimonialsRenderer.render();
        }
    }

    setupCarousel() {
        const carousel = new Carousel();
        carousel.init();
    }

    setupEventListeners() {
        // Event listeners generales
        window.addEventListener('load', () => this.onPageLoad());
        document.addEventListener('DOMContentLoaded', () => this.onDomReady());
    }

    setupFormHandling() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const form = e.target;

        // Validación básica
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (!this.validateForm(name, email, message)) {
            alert('Por favor completa todos los campos correctamente');
            return;
        }

        // Simular envío de formulario
        console.log('Formulario enviado:', { name, email, message });
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        form.reset();
    }

    validateForm(name, email, message) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return name.trim() !== '' && emailRegex.test(email) && message.trim() !== '';
    }

    onDomReady() {
        console.log('DOM está listo');
    }

    onPageLoad() {
        console.log('Página cargada completamente');
    }
}

// Inicializar aplicación
const app = new PizzaApp();
window.PizzaApp = app;
