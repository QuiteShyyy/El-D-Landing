/* ============================================
   ANIMACIONES Y OBSERVADOR DE INTERSECCIÓN
   ============================================ */

class AnimationManager {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        this.init();
    }

    init() {
        this.setupIntersectionObserver();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.addAnimationClass(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observar elementos animables
        document.querySelectorAll('.menu__item, .testimonial__card, .carousel__item').forEach(el => {
            observer.observe(el);
        });
    }

    addAnimationClass(element) {
        element.classList.add('slide-in-up');
    }
}

// Efecto Parallax
class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('.hero__image');
        this.init();
    }

    init() {
        if (this.elements.length === 0) return;

        window.addEventListener('scroll', () => this.updateParallax());
    }

    updateParallax() {
        const scrollY = window.scrollY;

        this.elements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = scrollY * speed;
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Smooth Scroll para navegación
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Animación de números (contador)
class CounterAnimation {
    constructor(element, finalNumber, duration = 2000) {
        this.element = element;
        this.finalNumber = finalNumber;
        this.duration = duration;
        this.currentNumber = 0;
        this.startTime = null;
    }

    animate(currentTime) {
        if (!this.startTime) this.startTime = currentTime;
        const elapsed = currentTime - this.startTime;
        const progress = Math.min(elapsed / this.duration, 1);

        this.currentNumber = Math.floor(this.finalNumber * progress);
        this.element.textContent = this.currentNumber;

        if (progress < 1) {
            requestAnimationFrame((time) => this.animate(time));
        }
    }

    start() {
        requestAnimationFrame((time) => this.animate(time));
    }
}

// Ripple Effect para botones
class RippleEffect {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => this.createRipple(e));
        });
    }

    createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    }
}

// Inicializar todos los efectos
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
    new ParallaxEffect();
    new SmoothScroll();
    new RippleEffect();
});

window.AnimationManager = AnimationManager;
window.ParallaxEffect = ParallaxEffect;
window.SmoothScroll = SmoothScroll;
window.CounterAnimation = CounterAnimation;
window.RippleEffect = RippleEffect;
