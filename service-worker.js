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
