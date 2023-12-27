'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "34449ce3618662c225c84772127fa1b9",
"index.html": "979341b7ae14974eac7d7e2d70b13ae4",
"/": "979341b7ae14974eac7d7e2d70b13ae4",
"main.dart.js": "14d2387c46fca4d68305213258f28872",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon11.png": "e98e13d00c7adbabc1127fff0325a13c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f2f64cf491ae335c497a7ea854912b04",
"assets/AssetManifest.json": "8e8e9e671239960e1eb4fc85f4d21f9e",
"assets/NOTICES": "17a561984f158c1b1974a0aee7b00004",
"assets/FontManifest.json": "6ca282b0d8fa8895b5dcc2b63c37bcf8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8e51f7be6b24a4759ac35492a9f95a5f",
"assets/fonts/MaterialIcons-Regular.otf": "8a33be8566f23f90336a9ef5f45ce9a4",
"assets/assets/translation/en.json": "18b18f6c70ea3e6987985b890c0d4b13",
"assets/assets/translation/ar.json": "7d1f32bcbe395a8a8a3a6611c8672f79",
"assets/assets/images/forward-arrow.png": "cc0358959c255711e28919b552bb575e",
"assets/assets/images/login.png": "29d3296222c036e532fb6a9f6d8c3446",
"assets/assets/images/1.5x/login.png": "3fe17ad3e9d7d8f42a9fa43ea7f412c6",
"assets/assets/images/1.5x/config.png": "8a6c3453ed8e34d6a7e10d20539477b3",
"assets/assets/images/1.5x/scan.png": "3fa9e482b71ac724e622fac0299e089d",
"assets/assets/images/IIM.jpg": "b28193ce43ea33c455296b30d9d5b778",
"assets/assets/images/IIM.png": "68db3d675dde4711c5a918a1f5150fed",
"assets/assets/images/2.0x/login.png": "79e1fafeeb6b9c23a77f575f2cd3243b",
"assets/assets/images/2.0x/config.png": "cd2e3620a1965ffa574b24d3813d585e",
"assets/assets/images/2.0x/scan.png": "0d72c9df0ada552681a0c4f8c0bbfaa8",
"assets/assets/images/logout.png": "7ecbaa0f2d70d9b183df78953c4c8fb1",
"assets/assets/images/test_details.png": "cdbd6144d7f1e1c5c929abc7b5fe1a12",
"assets/assets/images/qr-scanner.png": "921778f89f7eb819f2e0ef5df7b1c8b6",
"assets/assets/images/scan-price-checker.png": "e59132b8293aff39c090ac9f26b1fb86",
"assets/assets/images/3.0x/login.png": "297c5f09b83915b522b34926181af039",
"assets/assets/images/3.0x/config.png": "9e7f00c8efe0766db65950821b4fd7ca",
"assets/assets/images/3.0x/scan.png": "b7acfe56ed841d1aba1c33ebc3b1124c",
"assets/assets/images/config.png": "a36d061ce8c4fe10ce9a8e99bd8d7184",
"assets/assets/images/localization.png": "bed4fb5888fcfd446947b90f771307d1",
"assets/assets/images/4.0x/login.png": "5f8d660a33580eee91c5eaaaf1528384",
"assets/assets/images/4.0x/config.png": "30405689ae72cf32f62efe8a7d488f5c",
"assets/assets/images/4.0x/scan.png": "82432000787622108b8f795b015dfd0e",
"assets/assets/images/white%2520icon.png": "f1b57535909d8e1a4e856d8c2b8e3536",
"assets/assets/images/cover.png": "b76fc7ec662bbb42ce5c73f7b74daa74",
"assets/assets/images/side-menu.png": "29d6ce5ccc294b02faa1a8e441732291",
"assets/assets/images/barcod.png": "2d253633f0a1b043a509bccb4b275a9b",
"assets/assets/images/warehouse.png": "b94f8458d3ae611b07294b5f94dbb390",
"assets/assets/images/noInternet.png": "1188488ef91dc58d1d4f1c64491ac810",
"assets/assets/images/splash_logo.png": "b6679f1e7b297a2fdbcd9177abea56f0",
"assets/assets/images/scan.png": "bdf43b8166697cc84f59e1bce4d21d29",
"assets/assets/images/padlock.png": "79fbc83ab4df678a04c9af0a5bcbf6ab",
"assets/assets/images/close.png": "118fd860c45e916159a8b02f17db10ac",
"assets/assets/fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"assets/assets/fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
