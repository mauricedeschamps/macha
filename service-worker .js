const CACHE_NAME = 'matcha-simple-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/images/definition.jpg',
    '/images/history.jpg',
    '/images/health.jpg',
    '/images/types.jpg',
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