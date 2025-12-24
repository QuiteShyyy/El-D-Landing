/* ============================================
   EJEMPLOS DE EXTENSIÓN Y MEJORAS FUTURAS
   ============================================ */

/**
 * EJEMPLO 1: Agregar un carrito de compras
 * 
 * Coloca esto en un nuevo archivo: js/cart.js
 */

/*
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        this.renderCart();
        window.addToCart = (itemId) => this.addItem(itemId);
    }

    addItem(itemId) {
        const item = PIZZERIA_DATA.menu.find(p => p.id === itemId);
        if (item) {
            this.items.push(item);
            localStorage.setItem('cart', JSON.stringify(this.items));
            console.log(`${item.name} agregado al carrito`);
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + price;
        }, 0);
    }

    renderCart() {
        console.log('Items en carrito:', this.items);
        console.log('Total:', this.getTotal().toFixed(2));
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    new ShoppingCart();
});
*/

/**
 * EJEMPLO 2: Sistema de filtrado de menú
 */

/*
class MenuFilter {
    constructor(data) {
        this.allItems = data;
        this.filteredItems = data;
    }

    filterByCategory(category) {
        if (category === 'all') {
            this.filteredItems = this.allItems;
        } else {
            this.filteredItems = this.allItems.filter(item => item.category === category);
        }
        return this.filteredItems;
    }

    filterByPrice(maxPrice) {
        return this.filteredItems.filter(item => {
            const price = parseFloat(item.price.replace('$', ''));
            return price <= maxPrice;
        });
    }

    search(query) {
        return this.filteredItems.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}

// Uso:
// const filter = new MenuFilter(PIZZERIA_DATA.menu);
// filter.filterByCategory('vegetariana');
// filter.search('BBQ');
*/

/**
 * EJEMPLO 3: Validación de formulario avanzada
 */

/*
class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.errors = {};
    }

    validate() {
        const formData = new FormData(this.form);
        this.errors = {};

        // Validar nombre
        const name = formData.get('name');
        if (!name || name.length < 3) {
            this.errors.name = 'El nombre debe tener al menos 3 caracteres';
        }

        // Validar email
        const email = formData.get('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.errors.email = 'Email inválido';
        }

        // Validar mensaje
        const message = formData.get('message');
        if (!message || message.length < 10) {
            this.errors.message = 'El mensaje debe tener al menos 10 caracteres';
        }

        return Object.keys(this.errors).length === 0;
    }

    showErrors() {
        Object.keys(this.errors).forEach(field => {
            console.error(`${field}: ${this.errors[field]}`);
        });
    }
}
*/

/**
 * EJEMPLO 4: Notificaciones Toast
 */

/*
class Toast {
    static show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast--${type}`;
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Uso:
// Toast.show('¡Operación exitosa!', 'success');
// Toast.show('Error al procesar', 'error');
*/

/**
 * EJEMPLO 5: Lazy Loading de imágenes
 */

/*
class LazyLoadImages {
    static init() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// En el HTML usa: <img data-src="url.jpg" alt="descripción">
// Inicializar: LazyLoadImages.init();
*/

/**
 * EJEMPLO 6: API de geolocalización
 */

/*
class LocationFinder {
    static getCurrentLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        resolve({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        });
                    },
                    error => reject(error)
                );
            } else {
                reject('Geolocalización no soportada');
            }
        });
    }

    static getDistance(lat1, lng1, lat2, lng2) {
        const R = 6371; // Radio de la tierra en km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLng = (lng2 - lng1) * Math.PI / 180;
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    }
}

// Uso:
// LocationFinder.getCurrentLocation().then(location => {
//     console.log(location);
// });
*/

/**
 * EJEMPLO 7: Almacenamiento local avanzado
 */

/*
class Storage {
    static set(key, value, expiresIn = null) {
        const data = {
            value: value,
            expires: expiresIn ? Date.now() + expiresIn : null
        };
        localStorage.setItem(key, JSON.stringify(data));
    }

    static get(key) {
        const data = JSON.parse(localStorage.getItem(key));
        if (!data) return null;

        if (data.expires && Date.now() > data.expires) {
            localStorage.removeItem(key);
            return null;
        }

        return data.value;
    }

    static remove(key) {
        localStorage.removeItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}

// Uso:
// Storage.set('usuario', { name: 'Juan' }, 60000); // Expira en 1 minuto
// Storage.get('usuario');
*/

/**
 * EJEMPLO 8: Analytics simple
 */

/*
class Analytics {
    static track(eventName, data = {}) {
        console.log(`Evento: ${eventName}`, data);
        
        // Aquí puedes enviar a un servidor
        // fetch('/analytics', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ event: eventName, data })
        // });
    }

    static trackPageView(page) {
        this.track('pageview', { page });
    }

    static trackClick(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', () => {
                this.track('click', { elementId });
            });
        }
    }
}

// Uso:
// Analytics.trackPageView('home');
// Analytics.trackClick('submitBtn');
*/

/**
 * EJEMPLO 9: Tema oscuro/claro
 */

/*
class ThemeToggle {
    static init() {
        const isDark = localStorage.getItem('theme') === 'dark';
        if (isDark) {
            document.documentElement.style.colorScheme = 'dark';
        }

        const button = document.createElement('button');
        button.textContent = isDark ? 'Claro' : 'Oscuro';
        button.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
        `;

        button.addEventListener('click', () => {
            const newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            location.reload();
        });

        document.body.appendChild(button);
    }
}
*/

/**
 * EJEMPLO 10: Integración con WhatsApp
 */

/*
class WhatsAppIntegration {
    static sendMessage(phoneNumber, message) {
        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(url);
    }

    static createOrderButton(phoneNumber = '+34123456789') {
        const button = document.createElement('a');
        button.href = `https://wa.me/${phoneNumber}?text=Hola%20quiero%20hacer%20un%20pedido`;
        button.className = 'whatsapp-btn';
        button.innerHTML = 'Ordenar por WhatsApp';
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #25d366;
            color: white;
            padding: 15px 20px;
            border-radius: 50px;
            text-decoration: none;
            z-index: 999;
        `;
        document.body.appendChild(button);
    }
}

// Uso:
// WhatsAppIntegration.createOrderButton('+34123456789');
*/

// ============================================
// Exportar todos los ejemplos
// ============================================

window.ExampleClasses = {
    // ShoppingCart,
    // MenuFilter,
    // FormValidator,
    // Toast,
    // LazyLoadImages,
    // LocationFinder,
    // Storage,
    // Analytics,
    // ThemeToggle,
    // WhatsAppIntegration
};

console.log('Ejemplos de extensión cargados. Descomenta en el código para usar.');
