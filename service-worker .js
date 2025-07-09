const CACHE_VERSION = 'v4';
const CACHE_NAME = `matcha-app-${CACHE_VERSION}`;
const OFFLINE_PAGE = '/macha/offline.html';
const BASE_URL = 'https://mauricedeschamps.github.io/macha/';

// キャッシュするリソースのリスト（絶対URLを使用）
const urlsToCache = [
  BASE_URL,
  `${BASE_URL}index.html`,
  `${BASE_URL}styles.css`,
  `${BASE_URL}app.js`,
  `${BASE_URL}manifest.json`,
  `${BASE_URL}offline.html`,
  `${BASE_URL}images/images - 2025-07-08T170013.338.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T095327.142.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T104527.767.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T114616.823.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T104307.559.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T095305.707.jpeg`,
  `${BASE_URL}images/images - 2025-07-08T100625.280.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T125203.283.jpeg`,
  `${BASE_URL}images/images - 2025-07-09T133939.736.jpeg`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] キャッシュをオープン');
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting());
      })
      .catch(error => {
        console.error('[Service Worker] キャッシュ追加失敗:', error);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // GitHub Pagesへのリクエストのみ処理
  if (!event.request.url.startsWith(BASE_URL)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // キャッシュがあれば返却
        if (cachedResponse) {
          return cachedResponse;
        }

        // ネットワークリクエスト
        return fetch(event.request)
          .then((response) => {
            // レスポンスが有効ならキャッシュ
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseToCache));
            }
            return response;
          })
          .catch(() => {
            // オフライン時はオフラインページを表示
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_PAGE);
            }
            return new Response('オフラインです', { status: 503 });
          });
      })
  );
});
