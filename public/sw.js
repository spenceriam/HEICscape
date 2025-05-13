// Simple placeholder service worker for PWA support
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

self.addEventListener('fetch', event => {
  // Default: just pass through
  event.respondWith(fetch(event.request));
});
