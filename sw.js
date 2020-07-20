/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// importScripts("./precache-manifest.js");
// each time [npm] workbox.cmd injectManifest is re-run we need to add this line:
// self. + __WB_MANIFEST

self.__precacheManifest = (self.__precacheManifest || []).concat([
  {"revision":"4b10cadcdfede070761ffdb531e3eda2","url":"assets/cassette-opt.svg"},{"revision":"80da6493f89b8b4d6d48d1a14b24d133","url":"assets/JSA_Large_Collage_small.jpg"},{"revision":"763d1124495b5c6afcf7e6b115eb9f53","url":"assets/LLL-cover-2018.jpg"},{"revision":"eb1b99a342e1fbb3696ff99b77c41ca7","url":"assets/SJ-DEBUT-ALBUM-sm.jpg"},{"revision":"a3da750e42c63be7a195faf258eb7f9f","url":"assets/sj-logo-opt.svg"},{"revision":"dc8ff87008acbe1c41bbc566f44eeded","url":"assets/SJ-Logo2018-nav-xm.png"},{"revision":"a6038028bd3a464145dcd2de26541bbe","url":"assets/SJ-Spanish-Fly-EP-small.jpg"},{"revision":"40f9be678f107a3e235de898cc304a8d","url":"assets/sl10.jpg"},{"revision":"77d94d50f1a06d55b399493f29454176","url":"assets/sl11.jpg"},{"revision":"c72cab7514f41e14e237b4a3dd80c64c","url":"assets/sl12.jpg"},{"revision":"1c91f3923e02b29f42e4d4f9710d6d76","url":"assets/sl13.jpg"},{"revision":"5c746202c4bb6c0c150deeb51315eefe","url":"assets/sl14.jpg"},{"revision":"c68ca1fa4f49e60c29b5c5c4ffa13460","url":"assets/sl15.jpg"},{"revision":"e0af0eea211fb82bc95847260e259c56","url":"assets/sl2.jpg"},{"revision":"fed6b85a76fc85da2e50fcad28f6f57d","url":"assets/sl3.jpg"},{"revision":"2459723ba3e8c6aa65f357f179f9461e","url":"assets/sl4.jpg"},{"revision":"b96ce34f02b20137917a5f000f66a48a","url":"assets/sl5.jpg"},{"revision":"7853fe1d3e31a76124e1d2a0a11c0e3e","url":"assets/sl6.jpg"},{"revision":"56edb0d90b839da020f6c396c68cc46f","url":"assets/sl7.jpg"},{"revision":"922fd6cc077921a28b293ae39354be57","url":"assets/sl8.jpg"},{"revision":"6e7b958fc1e817f025063c278bedf182","url":"assets/sl9.jpg"},{"revision":"453718328cae14d26c567c8d2c83e13a","url":"assets/Softcore_collage1_small.jpg"},{"revision":"5bb901b3baabb7e45a6b3cb7daa1a50a","url":"assets/sticker.jpg"},{"revision":"4c56ddc4265e752f36d58ca78a35ef87","url":"assets/Sweet-Jonny-Shirts-2018-sm.jpg"},{"revision":"aad0ea0400988855cf754af1ddd57215","url":"assets/Sweet-Jonny-Shirts-2019-sm.jpg"},{"revision":"8971a3d4bcc434cf8fed607a3e5d0b60","url":"assets/SweetJonny_2020.jpg"},{"revision":"6bea595e76622881fc2c58534f6ab85b","url":"android-chrome-192x192.png"},{"revision":"721d7fcb72cd284b9f9cfbbc4b258ea7","url":"android-chrome-512x512.png"},{"revision":"bd81d51ff9be52f1658f0332a0b697b2","url":"apple-touch-icon.png"},{"revision":"d027c3a66eaadc70034612a53b493327","url":"favicon-16x16.png"},{"revision":"ff09d4fdae1ea8093ef0e93b278e1baf","url":"favicon-32x32.png"},{"revision":"d638027d418a9fb94bd3c23535ef11ac","url":"favicon.ico"},{"revision":"aa320cd2d6efb48093d3e349eaf5fce4","url":"mstile-144x144.png"},{"revision":"a3352a1a41c2dcf0198d29e5026049a1","url":"mstile-150x150.png"},{"revision":"03715b87b2654c10d35f956e5b9214f6","url":"mstile-310x150.png"},{"revision":"a4e587f22d721790823ddb024afc5ab9","url":"mstile-310x310.png"},{"revision":"104e5843a96ecbbb5159ef29135e4a7f","url":"mstile-70x70.png"},{"revision":"0b2d64db82a97a7ff2e15c318e70ee1f","url":"safari-pinned-tab.svg"},{"revision":"97558919432bda80f73752d5068953c3","url":"index.html"},{"revision":"72d24a79ef6af5091b58bb939d9507b9","url":"js/band-bst-4.js"},{"revision":"940272b6e8762a5d5f2e75a26c905b2c","url":"css/band-bst-4.css"},{"revision":"74f5a5024c3cbdf242c4aa6a8739e01e","url":"fonts/facebook.svg"},{"revision":"fbae9d49b5fdd1526b1bb1063a8c4d4a","url":"fonts/instagram.svg"},{"revision":"05ba2c1af026ce8cda9d5e36617dfb3a","url":"fonts/spotify.svg"},{"revision":"93a9fd6aa377d5fe5cb299c3927b8a15","url":"fonts/twitter.svg"},{"revision":"b3f61e3f352ec88fea972663fa79247b","url":"fonts/youtube.svg"}
]);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("./index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
