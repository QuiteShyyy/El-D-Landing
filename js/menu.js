/* ============================================
   RENDERIZADOR DE MENÚ CON FILTROS
   ============================================ */

class MenuRenderer {
    constructor(containerId, filtersId, data, featuredOnly = false) {
        this.container = document.getElementById(containerId);
        this.filtersContainer = document.getElementById(filtersId);
        this.data = data;
        this.currentCategory = 'Todas';
        this.featuredOnly = featuredOnly;
    }

    render() {
        if (!this.container) return;

        if (!this.featuredOnly && this.filtersContainer) {
            this.renderFilters();
        }
        this.renderItems();
    }

    renderFilters() {
        if (!this.filtersContainer) return;

        this.filtersContainer.innerHTML = this.data.categories.map(category => `
            <button class="menu__filter ${category === this.currentCategory ? 'active' : ''}" data-category="${category}">
                ${category}
            </button>
        `).join('');

        this.filtersContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('menu__filter')) {
                document.querySelectorAll('.menu__filter').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.currentCategory = e.target.dataset.category;
                this.renderItems();
            }
        });
    }

    renderItems() {
        let items = this.data.menu;

        if (this.featuredOnly) {
            // Solo mostrar las primeras 6 pizzas
            items = items.slice(0, 6);
        } else if (this.currentCategory !== 'Todas') {
            items = items.filter(item => item.category === this.currentCategory);
        } else {
            // En la página de menú, mostrar solo los primeros 6 productos
            items = items.slice(0, 6);
        }

        this.container.innerHTML = items.map(item => `
            <div class="menu__item">
                <img src="${item.image}" alt="${item.name}" class="menu__item-image">
                <div class="menu__item-content">
                    <p class="menu__item-category">${item.category}</p>
                    <h3 class="menu__item-name">${item.name}</h3>
                    <p class="menu__item-description">${item.description}</p>
                    <p class="menu__item-price">${item.price}</p>
                </div>
            </div>
        `).join('');
    }
}

// Renderizador de carrusel
class CarouselRenderer {
    constructor(trackId, dotsId, data) {
        this.track = document.getElementById(trackId);
        this.dotsContainer = document.getElementById(dotsId);
        this.data = data;
    }

    render() {
        if (!this.track) return;

        // Renderizar items
        this.track.innerHTML = this.data.map(item => `
            <div class="carousel__item">
                <img src="${item.image}" alt="${item.title}" class="carousel__image">
                <div class="carousel__content">
                    <h3 class="carousel__title">${item.title}</h3>
                    <p class="carousel__description">${item.description}</p>
                    <p class="carousel__price">${item.price}</p>
                </div>
            </div>
        `).join('');

        // Renderizar dots
        if (this.dotsContainer) {
            this.dotsContainer.innerHTML = this.data.map((_, index) => `
                <div class="carousel__dot ${index === 0 ? 'active' : ''}"></div>
            `).join('');
        }
    }
}

// Renderizador de testimonios
class TestimonialsRenderer {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
    }

    render() {
        if (!this.container) return;

        this.container.innerHTML = this.data.map(testimonial => `
            <div class="testimonial__card">
                <div class="testimonial__rating">
                    ${Array.from({ length: testimonial.rating }).map(() => '<span class="star">⭐</span>').join('')}
                </div>
                <p class="testimonial__text">${testimonial.text}</p>
                <div class="testimonial__author">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}" class="testimonial__avatar">
                    <div class="testimonial__info">
                        <h3>${testimonial.author}</h3>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Inicializar renderizadores
document.addEventListener('DOMContentLoaded', () => {
    const data = window.PIZZERIA_DATA;

    const menuRenderer = new MenuRenderer('menuGrid', 'menuFilters', data);
    menuRenderer.render();

    const carouselRenderer = new CarouselRenderer('carouselTrack', 'carouselDots', data.specialties);
    carouselRenderer.render();

    const testimonialsRenderer = new TestimonialsRenderer('testimonialsGrid', data.testimonials);
    testimonialsRenderer.render();
});

// Función auxiliar para agregar al carrito (placeholder)
window.addToCart = function(itemId) {
    console.log(`Pizza ${itemId} agregada al carrito`);
    alert(`Pizza agregada al carrito correctamente`);
};

window.MenuRenderer = MenuRenderer;
window.CarouselRenderer = CarouselRenderer;
window.TestimonialsRenderer = TestimonialsRenderer;
