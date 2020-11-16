console.log('This is your service-worker.js file!');

const filesToCache = [
    '/db.js',
    '/index.html',
    '/index.js',
    '/styles.css',
    '/manifest.webmanifest',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1"