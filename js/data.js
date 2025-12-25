/* ============================================
   DATOS DE LA PIZZERÍA
   ============================================ */

const PIZZERIA_DATA = {
    categories: ['Todas', 'Pizzas', 'Pizzas Combinadas', 'Extras para Pizza', 'Fayna', 'Empanadas', 'Bebidas'],
    
    menu: [
        // PIZZAS
        {
            id: 1,
            name: 'Muzzarella',
            category: 'Pizzas',
            description: 'Tomate, queso mozzarella - La clásica porteña',
            price: 'Grande $13.500 | Individual $7.000',
            image: './images/muzza_gd.jpg',
            imageAlt: './images/muzza_ind.jpg'
        },
        {
            id: 2,
            name: 'Fugazza',
            category: 'Pizzas',
            description: 'Cebolla de verdeo, tomate y queso',
            price: 'Grande $15.200 | Individual $7.800',
            image: './images/fugazza_gd.jpg'
        },
        {
            id: 3,
            name: 'Napolitana',
            category: 'Pizzas',
            description: 'Tomate, mozzarella, anchoas y orégano',
            price: 'Grande $18.000 | Individual $9.200',
            image: './images/napo_gd.jpg'
        },
        {
            id: 4,
            name: 'Jamón',
            category: 'Pizzas',
            description: 'Tomate, mozzarella y jamón cocido',
            price: 'Grande $16.500 | Individual $8.500',
            image: './images/jamon_gd.jpg'
        },
        {
            id: 5,
            name: 'Pepperoni',
            category: 'Pizzas',
            description: 'Pepperoni y queso',
            price: 'Grande $18.000 | Individual $9.200',
            image: './images/pepperoni_gd.jpg',
            imageAlt: './images/pepperoni_ind.jpg'
        },
        {
            id: 6,
            name: 'Calabresa',
            category: 'Pizzas',
            description: 'Calabresa y queso',
            price: 'Grande $17.500 | Individual $9.000',
            image: './images/calabreza_gd.jpg',
            imageAlt: './images/calabreza_ind.jpg'
        },
        {
            id: 7,
            name: 'Roquefort',
            category: 'Pizzas',
            description: 'Queso roquefort, nueces y cebolla',
            price: 'Grande $19.000 | Individual $9.800',
            image: './images/roquefort_gd.jpg'
        },
        {
            id: 8,
            name: 'Jamón y Morrón',
            category: 'Pizzas',
            description: 'Jamón, morrón y cebolla',
            price: 'Grande $17.800 | Individual $9.200',
            image: './images/jamonymorron_gd.jpg'
        },
        {
            id: 9,
            name: 'Huevo y Jamón',
            category: 'Pizzas',
            description: 'Jamón cocido y huevos duros',
            price: 'Grande $19.500 | Individual $10.000',
            image: './images/huevo_y_jamon_gd.jpg'
        },
        
        // PIZZAS COMBINADAS
        {
            id: 10,
            name: 'Carne a Cuchillo',
            category: 'Pizzas Combinadas',
            description: 'Carne a cuchillo, cebolla y pimiento',
            price: 'Grande $21.000 | Individual $10.800',
            image: './images/carne_cuchillo.jpg'
        },
        {
            id: 11,
            name: 'Carne Suave',
            category: 'Pizzas Combinadas',
            description: 'Carne molida, tomate y especias',
            price: 'Grande $19.500 | Individual $10.000',
            image: './images/carne_suave.jpg'
        },
        {
            id: 12,
            name: 'Diabla',
            category: 'Pizzas Combinadas',
            description: 'Picante con calabresa y ají',
            price: 'Grande $19.200 | Individual $9.900',
            image: './images/diabla.jpg'
        },
        {
            id: 13,
            name: 'Caprese',
            category: 'Pizzas Combinadas',
            description: 'Tomate, mozzarella fresca, rúcula y albahaca',
            price: 'Grande $20.500 | Individual $10.500',
            image: './images/capresse.jpg'
        },
        {
            id: 14,
            name: 'Pollo',
            category: 'Pizzas Combinadas',
            description: 'Pollo desmenuzado, cebolla y pimiento',
            price: 'Grande $19.800 | Individual $10.200',
            image: './images/pollo.jpg'
        },
        
        // EXTRAS PARA PIZZA
        {
            id: 15,
            name: 'Queso Extra',
            category: 'Extras para Pizza',
            description: 'Porción extra de mozzarella',
            price: '$3.500',
            image: './images/muzzarella.jpg'
        },
        {
            id: 16,
            name: 'Jamón Extra',
            category: 'Extras para Pizza',
            description: 'Jamón cocido adicional',
            price: '$4.000',
            image: './images/jamon.jpg'
        },
        {
            id: 17,
            name: 'Calabresa Extra',
            category: 'Extras para Pizza',
            description: 'Calabresa adicional',
            price: '$4.500',
            image: './images/calabresa.jpg'
        },
        {
            id: 18,
            name: 'Huevo Extra',
            category: 'Extras para Pizza',
            description: 'Huevo duro adicional',
            price: '$2.500',
            image: './images/huevo.jpg'
        },
        {
            id: 19,
            name: 'Morrón Extra',
            category: 'Extras para Pizza',
            description: 'Morrón adicional',
            price: '$3.000',
            image: './images/morron.jpg'
        },
        
        // FAYNA
        {
            id: 20,
            name: 'Fayna Simple',
            category: 'Fayna',
            description: 'Fayna simple',
            price: '$2.500',
            image: './images/faina_rellena.jpg'
        },
        {
            id: 21,
            name: 'Fayna Rellena',
            category: 'Fayna',
            description: 'Fayna rellena de jamón y queso',
            price: '$2.500',
            image: './images/faina_rellena.jpg'
        },
        
        // EMPANADAS
        {
            id: 22,
            name: 'Empanada de Humita',
            category: 'Empanadas',
            description: 'Salsa blanca y choclo en grano amarillo',
            price: '$2.500',
            image: './images/humita.jpg'
        },
        {
            id: 23,
            name: 'Empanada de Roquefort',
            category: 'Empanadas',
            description: 'Roquefort y queso muzzarella',
            price: '$2.500',
            image: './images/roquefort.jpg'
        },
        {
            id: 24,
            name: 'Empanada de Carne Suave',
            category: 'Empanadas',
            description: 'Carne picada con cebolla, morrones y especias',
            price: '$2.500',
            image: './images/carne_suave.jpg'
        },
        {
            id: 25,
            name: 'Empanada de Pollo',
            category: 'Empanadas',
            description: 'Suprema de pollo con finas hierbas, cebolla y morrones rehogada',
            price: '$2.500',
            image: './images/pollo.jpg'
        },
        {
            id: 26,
            name: 'Empanada de Jamón y Queso',
            category: 'Empanadas',
            description: 'Jamón cocido y queso mozzarella',
            price: '$2.500',
            image: './images/jamonyqueso.jpg'
        },
        {
            id: 27,
            name: 'Empanada de Diabla',
            category: 'Empanadas',
            description: 'Calabresa, queso y especias',
            price: '$2.500',
            image: './images/diabla.jpg'
        },
        {
            id: 28,
            name: 'Empanada de Caprese',
            category: 'Empanadas',
            description: 'Queso mozzarella, albahaca y tomates',
            price: '$2.500',
            image: './images/capresse.jpg'
        },
        {
            id: 29,
            name: 'Empanada de Bolognesa',
            category: 'Empanadas',
            description: 'Canasita rellena de carne con salsa boloñesa',
            price: '$2.500',
            image: './images/bolognesa.jpg'
        },
        
        // BEBIDAS
        {
            id: 30,
            name: 'Coca Cola',
            category: 'Bebidas',
            description: 'Refresco Coca Cola Original 2.25lt',
            price: '$5.000',
            image: './images/coca225.jpg'
        },
        {
            id: 31,
            name: 'Cerveza Schneider',
            category: 'Bebidas',
            description: 'Cerveza Schneider Premium - Bebida alcohólica',
            price: '340ml $2.500 | 500ml $3.500',
            image: './images/schneider.png'
        },
        {
            id: 32,
            name: 'Jugo Levite Manzana',
            category: 'Bebidas',
            description: 'Jugo de manzana Levite',
            price: '1.5L $3.500',
            image: './images/levite_manzana.webp'
        },
        {
            id: 33,
            name: 'Jugo Levite Pera',
            category: 'Bebidas',
            description: 'Jugo de pera Levite',
            price: '1.5L $3.500',
            image: './images/levite_pera.webp'
        }
    ],
    
    specialties: [
        {
            id: 1,
            title: 'Muzzarella',
            description: 'La clásica porteña con ingredientes frescos',
            image: './images/muzza_gd.jpg'
        },
        {
            id: 2,
            title: 'Napolitana',
            description: 'Con anchoas y orégano, receta tradicional',
            image: './images/napo_gd.jpg'
        },
        {
            id: 3,
            title: 'Empanadas Caseras',
            description: 'Preparadas diariamente con los mejores ingredientes',
            image: './images/humita.jpg'
        },
        {
            id: 4,
            title: 'Jamón y Morrón',
            description: 'Combinación fresca y sabrosa',
            image: './images/jamonymorron_gd.jpg'
        },
        {
            id: 5,
            title: 'Roquefort',
            description: 'Sabor único con queso roquefort premium',
            image: './images/roquefort_gd.jpg'
        },
        {
            id: 6,
            title: 'Calabresa',
            description: 'El sabor auténtico argentino',
            image: './images/calabreza_gd.jpg'
        }
    ],
    testimonials: [
        {
            id: 1,
            text: 'Excelente calidad en las pizzas. Muy fresco todo, recomiendo especialmente la muzzarella con huevo.',
            rating: 5,
            author: 'María Fernández',
            role: 'Cliente verificado',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
        },
        {
            id: 2,
            text: 'Las empanadas son increíbles, rellenas y a buen precio. Llevo pidiendo años a El Dante.',
            rating: 5,
            author: 'Juan Carlos López',
            role: 'Cliente verificado',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan'
        },
        {
            id: 3,
            text: 'Atención al cliente excelente. Las pizzas salen bien cocidas y los ingredientes son frescos.',
            rating: 5,
            author: 'Patricia Gómez',
            role: 'Cliente verificado',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia'
        }
    ]
};

// Exportar datos para usar en otros módulos
window.PIZZERIA_DATA = PIZZERIA_DATA;
