importScripts('cache-polyfill/serviceworker-cache-polyfill.js');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/blog/sw.js', {
    scope: '/blog/'
  }).then(function(registration) {
    console.log('서비스워커 등록 성공 ', registration.scope);
  }).catch(function(err) {
    console.log('서비스워커 등록 실패: ', err);
  });
}
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-name').then(function(cache) {
      return cache.addAll([
        '/blog/',
        '/blog/assets/js/scripts.min.js',
        '/blog/images/nhnent.png'
           ]);
    }).then(function(){
      console.log('설치완료');
    }).catch(function(){
      console.log('설치실패');
    })
  );
});
