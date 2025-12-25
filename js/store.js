/* ============================================
   SCRIPT PARA PÁGINA STORE
   ============================================ */

let allProducts = [];
let currentFilter = 'Todas';

console.log('store.js cargado');

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStore);
} else {
    // DOM ya está listo
    initStore();
}

function initStore() {
    console.log('initStore iniciado');
    
    // Esperar a que PIZZERIA_DATA esté disponible
    let attempts = 0;
    const checkData = setInterval(() => {
        attempts++;
        console.log('Intento ' + attempts + ' para verificar PIZZERIA_DATA');
        
        if (typeof PIZZERIA_DATA !== 'undefined' && PIZZERIA_DATA && PIZZERIA_DATA.menu) {
            console.log('✅ PIZZERIA_DATA encontrado. Productos:', PIZZERIA_DATA.menu.length);
            clearInterval(checkData);
            initializeStore();
        } else if (attempts > 50) {
            console.error('❌ PIZZERIA_DATA no se pudo cargar después de 50 intentos');
            clearInterval(checkData);
            showError('Error al cargar datos');
        }
    }, 200);
}

function initializeStore() {
    console.log('Inicializando store...');
    
    if (!PIZZERIA_DATA || !PIZZERIA_DATA.menu) {
        console.error('PIZZERIA_DATA no es válido');
        showError('Datos inválidos');
        return;
    }
    
    allProducts = PIZZERIA_DATA.menu;
    console.log('Productos cargados:', allProducts.length);
    
    // Renderizar productos iniciales
    renderProducts(allProducts);
    
    // Agregar event listeners a botones de filtro
    const filterButtons = document.querySelectorAll('.menu-filters__btn');
    console.log('Botones de filtro encontrados:', filterButtons.length);
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('menu-filters__btn--active'));
            this.classList.add('menu-filters__btn--active');
            
            const filter = this.getAttribute('data-filter');
            console.log('Filtro seleccionado:', filter);
            currentFilter = filter;
            
            const filtered = filterProducts(filter);
            console.log('Productos filtrados:', filtered.length);
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
    console.log('Renderizando', products.length, 'productos');
    
    const menuGrid = document.getElementById('menuGrid');
    
    if (!menuGrid) {
        console.error('❌ menuGrid no encontrado en el DOM');
        return;
    }
    
    menuGrid.innerHTML = '';
    
    if (products.length === 0) {
        console.log('No hay productos para esta categoría');
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
    
    console.log('✅ Productos renderizados');
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'menu-item';
    
    let html = `
        <img src="${product.image}" alt="${product.name}" class="menu-item__image">
        <div class="menu-item__content">
            <div class="menu-item__category">${product.category}</div>
            <h3 class="menu-item__name">${product.name}</h3>
            <p class="menu-item__description">${product.description}</p>
            <div class="menu-item__price">${product.price}</div>
    `;
    
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

function showError(message) {
    const menuGrid = document.getElementById('menuGrid');
    if (menuGrid) {
        menuGrid.innerHTML = `<div class="menu__empty" style="grid-column: 1 / -1;"><h3>${message}</h3></div>`;
    }
}
