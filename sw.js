const CACHE = 'ccf-v02';
const ASSETS = ['.', './index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
const ASSETS = [
  './','./index.html','./manifest.json','./icon-192.png','./icon-512.png',
  './imagens/kael.png','./imagens/selene.png','./imagens/darian.png',
  './imagens/elyne.png','./imagens/lyra.jpg','./imagens/borin.jpg'
];
