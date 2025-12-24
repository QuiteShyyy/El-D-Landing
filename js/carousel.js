/* ============================================
   CARRUSEL (CAROUSEL)
   ============================================ */

class Carousel {
    constructor(trackSelector, dotsSelector, prevBtnSelector, nextBtnSelector) {
        this.track = document.querySelector(trackSelector);
        this.dotsContainer = document.querySelector(dotsSelector);
        this.prevBtn = document.querySelector(prevBtnSelector);
        this.nextBtn = document.querySelector(nextBtnSelector);
        this.currentIndex = 0;
        this.itemWidth = 0;

        this.init();
    }

    init() {
        if (!this.track || !this.prevBtn || !this.nextBtn) return;

        this.attachEventListeners();
        this.updateCarousel();
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());

        // Auto play carousel
        setInterval(() => this.next(), 8000);
    }

    attachEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        if (this.dotsContainer) {
            this.dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('carousel__dot')) {
                    const index = Array.from(this.dotsContainer.children).indexOf(e.target);
                    this.goToSlide(index);
                }
            });
        }
    }

    handleResize() {
        const items = this.track.querySelectorAll('.carousel__item');
        if (items.length > 0) {
            this.itemWidth = items[0].offsetWidth;
        }
    }

    updateCarousel() {
        const items = this.track.querySelectorAll('.carousel__item');
        const totalItems = items.length;

        // Actualizar posición del track
        const offset = -this.currentIndex * this.itemWidth;
        this.track.style.transform = `translateX(${offset}px)`;

        // Actualizar dots
        if (this.dotsContainer) {
            const dots = this.dotsContainer.querySelectorAll('.carousel__dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
    }

    next() {
        const items = this.track.querySelectorAll('.carousel__item');
        const totalItems = items.length;

        this.currentIndex = (this.currentIndex + 1) % totalItems;
        this.updateCarousel();
    }

    prev() {
        const items = this.track.querySelectorAll('.carousel__item');
        const totalItems = items.length;

        this.currentIndex = (this.currentIndex - 1 + totalItems) % totalItems;
        this.updateCarousel();
    }

    goToSlide(index) {
        const items = this.track.querySelectorAll('.carousel__item');
        this.currentIndex = Math.min(index, items.length - 1);
        this.updateCarousel();
    }
}

// Inicializar carrusel cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new Carousel(
        '#carouselTrack',
        '#carouselDots',
        '#prevBtn',
        '#nextBtn'
    );
});

window.Carousel = Carousel;
