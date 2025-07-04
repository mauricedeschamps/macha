const CACHE_NAME = 'matcha-knowledge-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/images/matcha-powder.jpg',
    '/images/cultivation.jpg',
    '/images/ceremony.jpg',
    '/images/health.jpg',
    '/images/types.jpg',
    '/images/uses.jpg',
    '/images/global.jpg',
    '/images/regions.jpg',
    '/images/storage.jpg',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                const fetchPromise = fetch(event.request).then(networkResponse => {
                    // Only cache successful responses
                    if (networkResponse.ok) {
                        const cacheCopy = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            cache.put(event.request, cacheCopy);
                        });
                    }
                    return networkResponse;
                }).catch(() => {
                    // If fetch fails, return cached response if available
                    return cachedResponse || new Response('Offline content', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/plain'
                        })
                    });
                });
                
                return cachedResponse || fetchPromise;
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});