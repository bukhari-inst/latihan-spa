importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);

workbox.precaching.precacheAndRoute([
  { url: '/', revision: '1' },
  { url: '/index.html', revision: '1' },
  { url: '/navigasi.html', revision: '1' },
  { url: '/pages/informasi.html', revision: '1' },
  { url: '/pages/kontak.html', revision: '1' },
  { url: '/pages/tentang.html', revision: '1' },
  { url: 'https://inshorts.data.dev/news?category=technology', revision: '1' },
]);

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.staleWhileRevalidate({ cacheName: 'cacheUtama' })
);

workbox.routing.registerRoute(
  new RegExp('https://inshorts.data.dev/news?category=technology'),
  workbox.strategies.staleWhileRevalidate({ cacheName: 'cacheData' })
);

workbox.routing.registerRoute(
  new RegExp('https://static.inshorts.com/'),
  workbox.strategies.staleWhileRevalidate({ cacheName: 'cacheImage' })
);
