importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "elements/daube-header/daube-header.html",
    "revision": "ac2267d0faf13c952f51e7442a7d1902"
  },
  {
    "url": "elements/daube-user-icon/daube-user-icon.html",
    "revision": "2b178b410ad4760a1f016684296f9b75"
  },
  {
    "url": "elements/daube-user-menu/daube-user-menu.html",
    "revision": "de67af3b57c9a67993b495aaeb588969"
  },
  {
    "url": "elements/room-home.html",
    "revision": "3dcb9c81d6497d6287862eb022819210"
  },
  {
    "url": "elements/shared.css",
    "revision": "b3060d99b3a71e51a5881bac7c1468f4"
  },
  {
    "url": "images/daubedesign.ico",
    "revision": "24512db0081f46a91b8fdce36c155669"
  },
  {
    "url": "images/google.png",
    "revision": "116d7abaea20868404cb366b611c69b7"
  },
  {
    "url": "images/manifest/daubedesign-144x144.png",
    "revision": "d851bfbbde0c69fd55d2bda6a9029780"
  },
  {
    "url": "images/manifest/daubedesign-192x192.png",
    "revision": "0d48fe25d41ac2525e700253079c77bd"
  },
  {
    "url": "images/manifest/daubedesign-48x48.png",
    "revision": "b3a2ade5ce8c2dde247bd6309e8b28f9"
  },
  {
    "url": "images/manifest/daubedesign-512x512.png",
    "revision": "a9acaf6158ddae45bacbb1fe9a1e2aea"
  },
  {
    "url": "images/manifest/daubedesign-72x72.png",
    "revision": "7d7818d22bb0917954b810ceb36df923"
  },
  {
    "url": "images/manifest/daubedesign-96x96.png",
    "revision": "42c8b57174ff192635100bf0115651d5"
  },
  {
    "url": "images/user_avatar.png",
    "revision": "889ee0461e8341ab1362eee21a2ba764"
  },
  {
    "url": "index.html",
    "revision": "6b1eddb46ae45ea49b8a392bcca2c166"
  },
  {
    "url": "manifest.json",
    "revision": "f7d80f6af80a7876aef3b22b6fdf777d"
  },
  {
    "url": "scripts/idb.js",
    "revision": "6c76ebc82c2d7220fd7fbe2fa8d2b53a"
  },
  {
    "url": "scripts/initfirebase.html",
    "revision": "4a3bba0cdd8438079b23524b1af19775"
  },
  {
    "url": "scripts/main.js",
    "revision": "59011f9899d0f3973c45beed90bc181d"
  },
  {
    "url": "webcomponentsjs/webcomponents-lite.js",
    "revision": "92471d86a35d74c7ed6bf2d1153a71cb"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
