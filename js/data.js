/* ============================================
   DATOS DE LA PIZZERÍA
   ============================================ */

const PIZZERIA_DATA = {
    categories: ['Todas', 'Pizzas', 'Promos Especiales', 'Pizzas Combinadas', 'Extras para Pizza', 'Fayna', 'Empanadas', 'Bebidas'],
    
    menu: [
        // PROMOS ESPECIALES
        {
            id: 1,
            name: 'Combo 1 - 3 Pre-Pizzas de tomate',
            category: 'Promos Especiales',
            description: '3 Pre-Pizzas de tomate Grande - POR MOSTRADOR Y EN EFECTIVO',
            price: '$5.000',
            image: './images/IMG_9105.jpg',
            note: 'Por mostrador y en efectivo'
        },
        {
            id: 2,
            name: 'Combo 2 - 2 Pre-pizzas + 500grs Muzzarella',
            category: 'Promos Especiales',
            description: '2 Pre-pizzas de tomate + 500 grs de muzzarella - POR MOSTRADOR Y EN EFECTIVO',
            price: '$9.000',
            image: './images/IMG_9131.jpg',
            note: 'Por mostrador y en efectivo'
        },
        {
            id: 3,
            name: 'Pre-pizza x unidad',
            category: 'Promos Especiales',
            description: '1 prepizza de tomate - POR MOSTRADOR Y EN EFECTIVO',
            price: '$2.000',
            image: './images/IMG_9137.jpg',
            note: 'Por mostrador y en efectivo'
        },
        {
            id: 4,
            name: 'Gde Napolitana (8 porciones)',
            category: 'Pizzas',
            description: '1 pizza gde napolitana 8 porcion - Promocion valida por mostrador y en efectivo',
            price: '$14.400',
            image: './images/IMG_9100.jpg',
            note: 'Por mostrador y en efectivo'
        },
        
        // PIZZAS
        {
            id: 5,
            name: 'Muzzarella',
            category: 'Pizzas',
            description: 'Tomate, queso mozzarella',
            price: 'Grande $13.500 | Individual $7.000',
            image: './images/IMG_8995.jpg'
        },
        {
            id: 6,
            name: 'Muzzarella c/ Huevo',
            category: 'Pizzas',
            description: 'Muzzarella con huevos duros',
            price: 'Grande $15.500 | Individual $8.000',
            image: './images/IMG_8999.jpg'
        },
        {
            id: 7,
            name: 'Muzzarella c/ Morrón',
            category: 'Pizzas',
            description: 'Muzzarella con morrones frescos',
            price: 'Grande $19.700 | Individual $10.000',
            image: './images/IMG_9007.jpg'
        },
        {
            id: 8,
            name: 'Fugazetta',
            category: 'Pizzas',
            description: 'Cebolla de verdeo, tomate y queso',
            price: 'Grande $15.200 | Individual $7.800',
            image: './images/IMG_9011.jpg'
        },
        {
            id: 9,
            name: 'Fugazetta c/ Jamón',
            category: 'Pizzas',
            description: 'Fugazetta tradicional con jamón cocido',
            price: 'Grande $19.600 | Individual $10.000',
            image: './images/IMG_9017.jpg'
        },
        {
            id: 10,
            name: 'Jamón',
            category: 'Pizzas',
            description: 'Tomate, mozzarella y jamón cocido',
            price: 'Grande $18.000 | Individual $9.200',
            image: './images/IMG_9027.jpg'
        },
        {
            id: 11,
            name: 'Jamón y Huevo',
            category: 'Pizzas',
            description: 'Jamón cocido y huevos duros',
            price: 'Grande $22.000 | Individual $11.200',
            image: './images/IMG_9031.jpg'
        },
        {
            id: 12,
            name: 'Napolitana',
            category: 'Pizzas',
            description: 'Tomate, mozzarella, anchoas y orégano',
            price: 'Grande $18.000 | Individual $9.200',
            image: './images/IMG_9043.jpg'
        },
        {
            id: 13,
            name: 'Napolitana c/ Jamón',
            category: 'Pizzas',
            description: 'Pizza napolitana con jamón cocido',
            price: 'Grande $25.000',
            image: './images/IMG_9046.jpg'
        },
        
        // PIZZAS COMBINADAS
        {
            id: 14,
            name: 'Pizza Combinada',
            category: 'Pizzas Combinadas',
            description: 'Elige 2 sabores de pizza entre todas nuestras variedades',
            price: 'Consulta en mostrador',
            image: './images/IMG_9115.jpg',
            note: 'Personalizable'
        },
        
        // EXTRAS PARA PIZZA
        {
            id: 15,
            name: 'Agregado de Muzza',
            category: 'Extras para Pizza',
            description: 'Agregado de 400 grs más de queso muzzarella',
            price: 'Grande $5.000 | Chico $2.500',
            image: './images/IMG_9086.jpg'
        },
        {
            id: 16,
            name: 'Extra Salsa',
            category: 'Extras para Pizza',
            description: 'Agregado de doble salsa artesanal de tomates',
            price: 'Grande $2.000 | Chico $1.200',
            image: './images/IMG_9092.jpg'
        },
        {
            id: 17,
            name: 'Agregado de Morrón',
            category: 'Extras para Pizza',
            description: 'Agregado de morrones frescos',
            price: 'Grande $4.500 | Chico $2.300',
            image: './images/IMG_9094.jpg'
        },
        {
            id: 18,
            name: 'Huevos',
            category: 'Extras para Pizza',
            description: 'Agregado de huevos duros',
            price: 'Grande $3.400 | Chico $1.500',
            image: './images/IMG_9098.jpg'
        },
        {
            id: 19,
            name: 'Jamón',
            category: 'Extras para Pizza',
            description: 'Agregado de jamón cocido',
            price: 'Grande $3.000 | Chico $2.000',
            image: './images/IMG_9099.jpg'
        },
        
        // FAYNA
        {
            id: 20,
            name: 'Fayna Simple',
            category: 'Fayna',
            description: 'Fayna simple de queso',
            price: '$2.000',
            image: './images/IMG_9113.jpg'
        },
        {
            id: 21,
            name: 'Fayna Rellena JyQ',
            category: 'Fayna',
            description: 'Fayna rellena de jamón y queso',
            price: '$2.500',
            image: './images/IMG_9114.jpg'
        },
        
        // EMPANADAS
        {
            id: 22,
            name: 'Carne Suave',
            category: 'Empanadas',
            description: 'Carne picada con cebolla, morrones y especias',
            price: '$2.500',
            image: './images/IMG_9047.jpg'
        },
        {
            id: 23,
            name: 'Pollo',
            category: 'Empanadas',
            description: 'Suprema de pollo con finas hierbas, cebolla y morrones rehogada',
            price: '$2.500',
            image: './images/IMG_9055.jpg'
        },
        {
            id: 24,
            name: 'Jamón y Queso',
            category: 'Empanadas',
            description: 'Jamón cocido y queso mozzarella',
            price: '$2.500',
            image: './images/IMG_9061.jpg'
        },
        {
            id: 25,
            name: 'Diabla',
            category: 'Empanadas',
            description: 'Calabresa, queso y especias',
            price: '$2.500',
            image: './images/IMG_9066.jpg'
        },
        {
            id: 26,
            name: 'Caprese',
            category: 'Empanadas',
            description: 'Queso mozzarella, albahaca y tomates',
            price: '$2.500',
            image: './images/IMG_9074.jpg'
        },
        
        // BEBIDAS
        {
            id: 27,
            name: 'Fanta 2,25lts',
            category: 'Bebidas',
            description: 'Bebida refrescante Fanta',
            price: '$5.000',
            image: './images/IMG_9077.jpg'
        },
        {
            id: 28,
            name: 'Levite Manzana 1,5lts',
            category: 'Bebidas',
            description: 'Jugo Levite sabor manzana',
            price: '$3.500',
            image: './images/IMG_9082.jpg'
        },
        {
            id: 29,
            name: 'Coca Cola Original 2.25lt',
            category: 'Bebidas',
            description: 'Refresco Coca Cola original',
            price: '$5.000',
            image: './images/IMG_9078.jpg'
        },
        {
            id: 30,
            name: 'Levite Pera 1.5lt',
            category: 'Bebidas',
            description: 'Jugo Levite sabor pera',
            price: '$3.500',
            image: './images/IMG_9083.jpg'
        }
    ],
    
    specialties: [
        {
            id: 1,
            title: 'Combo 1 - 3 Pre-Pizzas',
            description: '3 Pre-Pizzas de tomate - POR MOSTRADOR Y EN EFECTIVO',
            price: '$5.000',
            image: './images/IMG_9105.jpg'
        },
        {
            id: 2,
            title: 'Combo 2 - 2 Pre-pizzas + Muzzarella',
            description: '2 Pre-pizzas de tomate + 500 grs de muzzarella - POR MOSTRADOR Y EN EFECTIVO',
            price: '$9.000',
            image: './images/IMG_9131.jpg'
        },
        {
            id: 3,
            title: 'Gde Napolitana (8 porciones)',
            description: 'Pizza gde napolitana 8 porcion - Promocion valida por mostrador y en efectivo',
            price: '$14.400',
            image: './images/IMG_9100.jpg'
        },
        {
            id: 4,
            title: 'Jamón y Huevo',
            description: 'Jamón cocido y huevos duros en una pizza cremosa',
            price: 'Grande $22.000 | Individual $11.200',
            image: './images/IMG_9103.jpg'
        },
        {
            id: 5,
            title: 'Fugazetta c/ Jamón',
            description: 'Fugazetta tradicional con jamón cocido',
            price: 'Grande $19.600 | Individual $10.000',
            image: './images/IMG_9113.jpg'
        },
        {
            id: 6,
            title: 'Napolitana c/ Jamón',
            description: 'Pizza napolitana con jamón cocido, anchoas y orégano',
            price: 'Grande $25.000',
            image: './images/IMG_9104.jpg'
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
