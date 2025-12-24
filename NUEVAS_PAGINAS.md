# Nuevas Páginas - Estilo Guerrin con Catálogo El Dante

## 📄 Archivos Creados

### HTML Pages
1. **home.html** - Página de inicio inspirada en Guerrin
   - Sección Hero con imágenes locales
   - Sección "Acerca de"
   - Secciones destacadas (Experiencia, Menú, Secretos)
   - Links a otras páginas

2. **experience.html** - Página de experiencia
   - Descripción completa del recorrido
   - 4 secciones: Bienvenida, Recorrido, Experiencia Final, CTA
   - Tarjetas de información (duración, ubicación, grupos, etc.)
   - Imágenes asociadas de la carpeta

3. **store.html** - Catálogo de productos (Formato El Dante)
   - Sistema de filtros por categoría
   - Grid de productos dinámico
   - Imágenes y descripciones
   - Precios formateados correctamente
   - Notas especiales (ej: "Por mostrador y en efectivo")

### CSS Files
1. **styles/pages.css** - Estilos para home.html y experience.html
   - Secciones Hero grandes
   - Cards de experiencia
   - Layouts responsive
   - Estilos de CTA

2. **styles/store.css** - Estilos para store.html
   - Sistema de filtros
   - Grid de productos
   - Cards de productos
   - Responsive design

### JavaScript Files
1. **js/store.js** - Lógica para la página store
   - Carga de datos desde PIZZERIA_DATA
   - Sistema de filtros dinámico
   - Renderización de productos
   - Manejo de eventos

## 🎨 Características

### Home Page (home.html)
- Diseño inspirado en Guerrin.com.ar
- Secciones: Hero, Acerca de, Experiencia, Menú, Secretos
- Imágenes locales desde la carpeta `/images`
- CTAs que enlazan a experiencia y catálogo
- Responsive y moderno

### Experience Page (experience.html)
- Estructura narrativa sobre la pizzería
- 4 secciones principales con imágenes
- Información de detalles (duración, ubicación, etc.)
- Diseño similar a Guerrin pero con contenido de El Dante
- Botón para reservar experiencia

### Store Page (store.html)
- Mantiene el formato del catálogo de El Dante
- 30 productos categorizados
- Filtros por categoría
- Grid responsivo (auto-fill)
- Cada producto muestra:
  - Imagen
  - Categoría
  - Nombre
  - Descripción
  - Precio
  - Nota especial (si aplica)
  - Botón "Ver Detalles"

## 📊 Integración de Datos

### PIZZERIA_DATA (data.js)
```javascript
{
    categories: 8 categorías
    menu: 30 productos
    specialties: 6 especialidades
    testimonials: 3 testimonios
}
```

**Categorías:**
- Promos Especiales
- Pizzas
- Pizzas Combinadas
- Extras para Pizza
- Fayna
- Empanadas
- Bebidas

**Cada producto incluye:**
- id, name, category, description, price, image, note (opcional)

## 🖼️ Imágenes Utilizadas

Todas las páginas utilizan las 37 imágenes JPG disponibles:
- Home: IMG_9115, IMG_9119, IMG_8995, IMG_9131, IMG_9100, IMG_9046
- Experience: IMG_9113, IMG_9103, IMG_9114
- Store: Rotación automática de todas las imágenes según productos

## 🔗 Navegación

Todas las páginas están vinculadas:
```
index.html (Original)
├── home.html (Nueva)
├── experience.html (Nueva)
└── store.html (Nueva)
```

El navbar en cada página tiene links a:
- Inicio (index.html)
- Home (home.html)
- Experiencia (experience.html)
- Catálogo (store.html)
- Contacto (#contact)

## 💻 Responsive Design

Todas las páginas incluyen:
- Media queries para mobile (max-width: 768px, 480px)
- Grid layouts responsivos
- Navegación mobile con hamburguesa
- Touch-friendly buttons
- Imágenes optimizadas

## 🚀 Características Técnicas

### Store Page JavaScript
- Event delegation para filtros
- Renderización dinámica de productos
- Manejo de estados (filtro actual)
- Cache de productos
- Manejo de empty states

### CSS Modular
- BEM naming convention
- Variables CSS (colores, espaciados)
- Animations y transitions
- Flexbox y CSS Grid
- Mobile-first approach

## 📝 Notas

- Las imágenes se cargan desde `./images/IMG_XXXX.jpg`
- Todos los precios están en pesos argentinos ($)
- Las promociones especiales incluyen restricciones
- El formato es consistente entre todas las páginas
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)

## 🎯 Próximos Pasos (Opcional)

Si quieres mejorar aún más:
1. Agregar carrito de compras funcional
2. Sistema de búsqueda en store
3. Página de detalles de producto
4. Sistema de reseñas/comentarios
5. Integración con base de datos
6. Sistema de pedidos en línea

---

**Creado: 23/12/2025**
**Versión: 1.0**
