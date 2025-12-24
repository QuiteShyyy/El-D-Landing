/* ============================================
   SCRIPT PARA PÁGINA STORE
   ============================================ */

let allProducts = [];
let currentFilter = 'Todas';

// Esperar a que data.js esté cargado
document.addEventListener('DOMContentLoaded', function() {
    if (typeof PIZZERIA_DATA !== 'undefined') {
        initializeStore();
    } else {
        console.error('PIZZERIA_DATA no cargado');
    }
});

function initializeStore() {
    allProducts = PIZZERIA_DATA.menu;
    
    // Renderizar productos iniciales
    renderProducts(allProducts);
    
    // Agregar event listeners a botones de filtro
    const filterButtons = document.querySelectorAll('.menu-filters__btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterButtons.forEach(b => b.classList.remove('menu-filters__btn--active'));
            
            // Agregar clase activa al botón clickeado
            this.classList.add('menu-filters__btn--active');
            
            // Obtener el filtro
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            
            // Filtrar y renderizar
            const filtered = filterProducts(filter);
            renderProducts(filtered);
        });
    });
}

function filterProducts(category) {
    if (category === 'Todas') {
        return allProducts;
    }
    return allProducts.filter(product => product.category === category);
}

function renderProducts(products) {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    if (products.length === 0) {
        menuGrid.innerHTML = `
            <div class="menu__empty" style="grid-column: 1 / -1;">
                <h3>No hay productos en esta categoría</h3>
                <p>Prueba con otro filtro</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        menuGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    
    // Construir el contenido HTML
    let html = `
        <img src="${product.image}" alt="${product.name}" class="menu-item__image">
        <div class="menu-item__content">
            <div class="menu-item__category">${product.category}</div>
            <h3 class="menu-item__name">${product.name}</h3>
            <p class="menu-item__description">${product.description}</p>
            <div class="menu-item__price">${product.price}</div>
    `;
    
    // Agregar nota si existe
    if (product.note) {
        html += `<div class="menu-item__note">${product.note}</div>`;
    }
    
    html += `
            <a href="https://eldante.alacarta.online" target="_blank" class="menu-item__cta">Ver Detalles</a>
        </div>
    `;
    
    card.innerHTML = html;
    return card;
}
