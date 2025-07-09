const CACHE_VERSION = 'v3';
const CACHE_NAME = `matcha-app-${CACHE_VERSION}`;
const OFFLINE_PAGE = '/offline.html';

// キャッシュするリソースのリスト
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/offline.html',
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

// インストールイベント - キャッシュの作成
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] キャッシュをオープン');
        return cache.addAll(urlsToCache)
          .then(() => {
            console.log('[Service Worker] すべてのリソースをキャッシュ');
            return self.skipWaiting();
          });
      })
      .catch((error) => {
        console.error('[Service Worker] インストール失敗:', error);
      })
  );
});

// アクティベートイベント - 古いキャッシュの削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] 古いキャッシュを削除:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[Service Worker] クライアントをコントロール');
      return self.clients.claim();
    })
  );
});

// フェッチイベント - ネットワークまたはキャッシュからリソースを取得
self.addEventListener('fetch', (event) => {
  // 外部リクエストまたは非GETリクエストは無視
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // キャッシュがあれば返却
        if (cachedResponse) {
          console.log(`[Service Worker] キャッシュから提供: ${event.request.url}`);
          return cachedResponse;
        }

        // ネットワークリクエスト
        return fetch(event.request)
          .then((response) => {
            // レスポンスが有効かチェック
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // レスポンスをクローンしてキャッシュ
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                console.log(`[Service Worker] キャッシュに追加: ${event.request.url}`);
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('[Service Worker] フェッチ失敗:', error);
            // ナビゲーションリクエストの場合はオフラインページを表示
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_PAGE);
            }
            return new Response('オフラインです', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// メッセージイベント - キャッシュの更新など
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
