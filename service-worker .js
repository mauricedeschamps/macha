const CACHE_NAME = 'matcha-simple-v1';
const urlsToCache = [
    
    '/index.html',
    '/styles.css',
    '/app.js',
    'images - 2025-07-08T170013.338.jpeg',
    'images - 2025-07-09T095327.142.jpeg',
    'images - 2025-07-09T104527.767.jpeg',
    'images - 2025-07-09T114616.823.jpeg',
    '/images/uses.jpg',
    '/images/global.jpg',
    '/images/regions.jpg',
    '/images/storage.jpg',
    '/images/summary.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
});
