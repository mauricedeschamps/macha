const CACHE_NAME = 'matcha-simple-v2'; // バージョン番号更新
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    '/images/images - 2025-07-08T170013.338.jpeg',
    '/images/images - 2025-07-09T095327.142.jpeg',
    '/images/images - 2025-07-09T104527.767.jpeg',
    '/images/images - 2025-07-09T114616.823.jpeg',
    '/images/images - 2025-07-09T104307.559.jpeg',
    '/images/images - 2025-07-09T095305.707.jpeg',
    '/images/images - 2025-07-08T100625.280.jpeg',
    '/images/images - 2025-07-09T125203.283.jpeg',
    '/images/images - 2025-07-09T133939.736.jpeg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('Cache addAll failed:', err);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
