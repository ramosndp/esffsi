const CACHE_NAME = "FilmesSI"

this.addEventListener('install', async function() {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
        '/index.html',
        '/main.css',
        '/main.js',
		'/STFinalFrontier.png',
		'/STSearchSpock.png',
		'/STVoyageHome.png',
		'/STWrathKhan.png',
    ])
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
