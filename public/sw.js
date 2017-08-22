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
    "url": "elements/daube-button/daube-button.html",
    "revision": "6d3074b66ab910ffa2ee05afae93cd95"
  },
  {
    "url": "elements/daube-card/daube-card.html",
    "revision": "5a91cdd9a3171a4780705a315625f5b4"
  },
  {
    "url": "elements/daube-dialog/daube-dialog.html",
    "revision": "f07f238645ef0daac5bf87bb5483ea5d"
  },
  {
    "url": "elements/daube-gcal-api/daube-gcal-api.html",
    "revision": "79c72343dbadf9fa5bce52564b52ec8a"
  },
  {
    "url": "elements/daube-header/daube-header.html",
    "revision": "e3b5e4f1af5ed83de10cd457ed73c8b6"
  },
  {
    "url": "elements/daube-table/daube-table.html",
    "revision": "f15232663d834c1f7fa411314946dc50"
  },
  {
    "url": "elements/daube-user-icon/daube-user-icon.html",
    "revision": "2b178b410ad4760a1f016684296f9b75"
  },
  {
    "url": "elements/daube-user-menu/daube-user-menu.html",
    "revision": "4374717da3eb6b6f02597fde7467a82d"
  },
  {
    "url": "elements/room-home.html",
    "revision": "d21250eda5d6eb4100566d7312c04ebb"
  },
  {
    "url": "elements/shared.css",
    "revision": "fcacd553f553a336579534ea347a0224"
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
    "revision": "24cef59445fe1aca3bfe80957037635d"
  },
  {
    "url": "manifest.json",
    "revision": "4f4a3ffd1aade30b7a27425a5dcf1c1b"
  },
  {
    "url": "scripts/date.js",
    "revision": "497166e7f447a56c7b279271c6c6e6c8"
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
    "revision": "a54a38a842e524047add8cf3e93b7fe2"
  },
  {
    "url": "webcomponentsjs/webcomponents-lite.js",
    "revision": "92471d86a35d74c7ed6bf2d1153a71cb"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
