self.addEventListener('install', (e)=> {
  e.waitUntil(caches.open('ccf-rpg-v02').then(cache => cache.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './assets/icon-192.png',
    './assets/icon-512.png'
  ])));
});
self.addEventListener('fetch', (e)=> {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});