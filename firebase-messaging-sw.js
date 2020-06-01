
importScripts('https://www.gstatic.com/firebasejs/7.9.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.3/firebase-messaging.js');
firebase.initializeApp({
    apiKey: 'AIzaSyA5ig6PAu2aoAd-TVnR5pfF8p4QgbjtLr4',
    appId: '1:979760629927:web:d9b520edde936d20397382',
    messagingSenderId: '979760629927',
    projectId: 'gatsby-pwa-test-project',
});
var messaging = firebase.messaging();
