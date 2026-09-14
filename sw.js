// Service worker minimo. Su unico proposito es cumplir el requisito de
// Chrome/Android para instalar la PWA como app real (WebAPK) en vez de
// un simple acceso directo del navegador: tener un Service Worker
// registrado con un manejador de "fetch". A proposito NO cachea nada
// -los datos de incidencias son en vivo (se piden cada 60s) y servirlos
// desde cache daria informacion obsoleta sin avisar.
self.addEventListener('install', function(e){
  self.skipWaiting();
});

self.addEventListener('activate', function(e){
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request));
});
