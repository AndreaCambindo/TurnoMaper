// SW sin cache para evitar problemas en GitHub Pages
self.addEventListener("install", (e) => {
  // Activa inmediatamente
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  // Toma control inmediato
  clients.claim();
});

// Manejo de fetch sin cache (siempre online)
self.addEventListener("fetch", (e) => {

  // No cachear nada del WebApp de Google
  if (e.request.url.includes("script.google.com")) {
    return e.respondWith(fetch(e.request));
  }

  // Tampoco cachear nada general
  return e.respondWith(fetch(e.request));
});
