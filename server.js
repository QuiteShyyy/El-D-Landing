#!/usr/bin/env node

/**
 * Servidor HTTP Simple para Pizzeria Landing Page
 * 
 * Uso: node server.js
 * Luego abre: http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = 'localhost';

// Tipos MIME
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

// Crear servidor
const server = http.createServer((req, res) => {
    // Obtener ruta del archivo
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    
    // Sanitizar ruta
    filePath = path.normalize(filePath);
    if (!filePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    // Leer archivo
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>404 - Archivo no encontrado</h1>');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Error del servidor');
            }
            return;
        }

        // Determinar tipo MIME
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeTypes[ext] || 'application/octet-stream';

        // Enviar archivo
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

// Iniciar servidor
server.listen(PORT, HOST, () => {
    console.log('');
    console.log('╔════════════════════════════════════════╗');
    console.log('║  Pizzeria Landing Page Server     ║');
    console.log('╚════════════════════════════════════════╝');
    console.log('');
    console.log(`✅ Servidor ejecutándose en:`);
    console.log(`   http://${HOST}:${PORT}`);
    console.log('');
    console.log('Archivos sirviendo desde:');
    console.log(`   ${__dirname}`);
    console.log('');
    console.log('⚠️  Presiona Ctrl+C para detener el servidor');
    console.log('');
});

// Manejo de errores
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Puerto ${PORT} ya está en uso`);
        console.error(`   Intenta con otro puerto o cierra la aplicación que lo usa`);
    } else {
        console.error('❌ Error del servidor:', err);
    }
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\nCerrando servidor...');
    server.close(() => {
        console.log('✅ Servidor cerrado');
        process.exit(0);
    });
});
