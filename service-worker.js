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

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1d95909275547d0d1785486a9720e06b"
  },
  {
    "url": "assets/css/0.styles.85d18feb.css",
    "revision": "6fc03a98608d54ef0f51fba0a183d979"
  },
  {
    "url": "assets/img/background.jpg",
    "revision": "bed1f44de6b82a8309cb25868cb95498"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "fad8424f537885e623d373b306f2419d"
  },
  {
    "url": "assets/img/user.png",
    "revision": "bfe53943e44e278c78e402d9f0f42881"
  },
  {
    "url": "assets/js/1.f1f5dd21.js",
    "revision": "cfff4740b84ea263714d04e13d720c5f"
  },
  {
    "url": "assets/js/10.12345786.js",
    "revision": "45dbd93e0fa9ec699e15e92a9289782d"
  },
  {
    "url": "assets/js/11.0163dc94.js",
    "revision": "c1728ae3ba9fdc8780bd284c077387bc"
  },
  {
    "url": "assets/js/12.47045407.js",
    "revision": "abe6df329a70cc925f6d8179af13b0a8"
  },
  {
    "url": "assets/js/13.845998fc.js",
    "revision": "d137db0c187db529c7e7185beb2dcaf8"
  },
  {
    "url": "assets/js/14.fbd70b53.js",
    "revision": "684256e6c2f6bd9d91c2ca8cb7bf49be"
  },
  {
    "url": "assets/js/15.61566dfe.js",
    "revision": "2fc04cff7794633474c990b89e045b24"
  },
  {
    "url": "assets/js/16.9e736e50.js",
    "revision": "0f9bb8c42ade17072b0b293721a6edc1"
  },
  {
    "url": "assets/js/17.514de8f0.js",
    "revision": "d0c9e0bbc54e9b956061225244f5536f"
  },
  {
    "url": "assets/js/18.2df4b2f3.js",
    "revision": "43c9d3ce3eaea9fe8c3e4367c4b2cffc"
  },
  {
    "url": "assets/js/19.81bf263d.js",
    "revision": "c70f4627f412a3f43dc43385a6348190"
  },
  {
    "url": "assets/js/20.d7cbafbe.js",
    "revision": "d58b7deaa616749056a2eb3788426ff7"
  },
  {
    "url": "assets/js/21.86f89b49.js",
    "revision": "6f6f1ec216364c2dc4a3cdddf5dc24ce"
  },
  {
    "url": "assets/js/22.5daf6fdd.js",
    "revision": "1c90d97477d816d1abbbedc29ffc5b14"
  },
  {
    "url": "assets/js/23.5202da3d.js",
    "revision": "062c3f2f1f7544dd96ab4a5bf23620c4"
  },
  {
    "url": "assets/js/24.1d27e2d2.js",
    "revision": "c058588aea80e4defc06b117efa7e46d"
  },
  {
    "url": "assets/js/25.5ce4353b.js",
    "revision": "38151ab6b943d85ef37d589079cea303"
  },
  {
    "url": "assets/js/26.a8926fcc.js",
    "revision": "fca0141b144a2f17ebb6e4d2cea8a619"
  },
  {
    "url": "assets/js/27.a4ab804f.js",
    "revision": "a2919164eec8649f2a9d878daee9118d"
  },
  {
    "url": "assets/js/28.7fc7cf45.js",
    "revision": "2290e3df0ec2a25c619afacfd97117d4"
  },
  {
    "url": "assets/js/29.7ff050e8.js",
    "revision": "817a009dbd2279a11b4aada2458d8afa"
  },
  {
    "url": "assets/js/3.6a7c9835.js",
    "revision": "bf80d898b9b870f4b59b907d6dc2b13a"
  },
  {
    "url": "assets/js/30.7a9ca647.js",
    "revision": "a7818ea5fe61f81ec3430c048ba50987"
  },
  {
    "url": "assets/js/31.cc497155.js",
    "revision": "1cefc76fd47e0b5a3bea474888d68d56"
  },
  {
    "url": "assets/js/32.778f100f.js",
    "revision": "b43aee14079c4438639fd6050396e328"
  },
  {
    "url": "assets/js/33.7092da09.js",
    "revision": "8eebfe16d7b99196be12b6f076762efe"
  },
  {
    "url": "assets/js/34.417d60ce.js",
    "revision": "e12f1f0655b0c58f51b0ea2fd07bf776"
  },
  {
    "url": "assets/js/35.96810473.js",
    "revision": "8f55c6a98bb0de418fbba681365589e8"
  },
  {
    "url": "assets/js/36.79b57abd.js",
    "revision": "731ccb44d9a5fd9df698ea519d494ce2"
  },
  {
    "url": "assets/js/37.f84eb5b9.js",
    "revision": "64170b2efa9a27e4d516f8c417f3a7fb"
  },
  {
    "url": "assets/js/38.259bf3bb.js",
    "revision": "30faf403b575d802d80c469b5adeacf8"
  },
  {
    "url": "assets/js/39.07a721e2.js",
    "revision": "90a7c0b55a4742d1b321f9cd425c8f66"
  },
  {
    "url": "assets/js/4.0f28c5e7.js",
    "revision": "a1e63a05167993a589a44eda3955b7d5"
  },
  {
    "url": "assets/js/40.9d96150d.js",
    "revision": "bec8496b806a52e12cfbddcb8d8b02c6"
  },
  {
    "url": "assets/js/41.3e74adee.js",
    "revision": "227c8b6f6ec652a91970fd728b802ceb"
  },
  {
    "url": "assets/js/42.41908c41.js",
    "revision": "7bf52b4316a61e293981fc25240ea384"
  },
  {
    "url": "assets/js/43.23fe2d8e.js",
    "revision": "f7b2d4de5677ad6f5a71b4124678feff"
  },
  {
    "url": "assets/js/44.361e503c.js",
    "revision": "f5836b8395230ce951a2ab9173b78fe5"
  },
  {
    "url": "assets/js/45.0addf09a.js",
    "revision": "3e95d758f148a6fe189e3e8334215a8b"
  },
  {
    "url": "assets/js/46.cc7f5faf.js",
    "revision": "5ccf1de16b997d2d116f1b2c9fe44bfb"
  },
  {
    "url": "assets/js/47.ffd993c1.js",
    "revision": "3c2b2156b429f11b8ede14c9ab8eba6b"
  },
  {
    "url": "assets/js/48.12a48ca2.js",
    "revision": "40d1c940407ec0c06e5cd5818e7edef3"
  },
  {
    "url": "assets/js/49.40973271.js",
    "revision": "97a03bb10740fd0066f55b764ece17fe"
  },
  {
    "url": "assets/js/5.d0743884.js",
    "revision": "da066226cde000607f49a2e99b4619c8"
  },
  {
    "url": "assets/js/50.878bb86c.js",
    "revision": "2d111bf7b5b253fae8533a1d79f25ef1"
  },
  {
    "url": "assets/js/51.6f54ca17.js",
    "revision": "7de55d38dc7fe108925c680ec3a7e68c"
  },
  {
    "url": "assets/js/52.bdeb1d2c.js",
    "revision": "0cdee641894bc3294d3b51d681f94b97"
  },
  {
    "url": "assets/js/53.ff1b02d8.js",
    "revision": "64a5c35075bb1cf7a97f8a2106d01a1b"
  },
  {
    "url": "assets/js/54.2e479b09.js",
    "revision": "eb7df27e64d9fc1bc269eb72ff138bd5"
  },
  {
    "url": "assets/js/55.31a06e95.js",
    "revision": "be863c7ec5a26ba3b1c06b889353334e"
  },
  {
    "url": "assets/js/56.ef312edb.js",
    "revision": "105866a217283140cb9149ac9493f91f"
  },
  {
    "url": "assets/js/57.0968b508.js",
    "revision": "f0b799635b2e01796d1210e9e0e0368b"
  },
  {
    "url": "assets/js/58.22427c8a.js",
    "revision": "088f48509702216e89a1b0043c4719ff"
  },
  {
    "url": "assets/js/59.5b6e01cf.js",
    "revision": "ab66b32d3812dd621e31c4b938b939e7"
  },
  {
    "url": "assets/js/6.7d01f74f.js",
    "revision": "31ff894a8e69402316ea368c15900098"
  },
  {
    "url": "assets/js/60.5592ec2c.js",
    "revision": "75a6f7882355899a3d22781560687530"
  },
  {
    "url": "assets/js/61.99cd26ce.js",
    "revision": "f3a9f06563e7b7340f803be37a48952c"
  },
  {
    "url": "assets/js/62.e52fd219.js",
    "revision": "5db468547711fcd5583173dd4ff4fbcd"
  },
  {
    "url": "assets/js/63.5c46fe21.js",
    "revision": "2b07b4aa7762ecd95d4b3cc2064b4e42"
  },
  {
    "url": "assets/js/64.dac18f6f.js",
    "revision": "fcbbae88ded4487c68fd40656191f578"
  },
  {
    "url": "assets/js/65.0c8e559a.js",
    "revision": "ea97f218cbc862c78495f196d30d455e"
  },
  {
    "url": "assets/js/66.4b85a574.js",
    "revision": "1d72ed833e019a484a8595a73a174481"
  },
  {
    "url": "assets/js/67.af6a384c.js",
    "revision": "83202775bd2719688392e82ca0811043"
  },
  {
    "url": "assets/js/68.d7b35cd1.js",
    "revision": "26d10ce1ad8a669a7b13247702306d7a"
  },
  {
    "url": "assets/js/69.321dff75.js",
    "revision": "1de14eb943d72c095159606ef6e4e66e"
  },
  {
    "url": "assets/js/7.fede9a6f.js",
    "revision": "cbb6f445364537483125d561e363549e"
  },
  {
    "url": "assets/js/70.e87fd710.js",
    "revision": "d2725063a76a7ba3a8cbf71e3f804b22"
  },
  {
    "url": "assets/js/71.ed2b7723.js",
    "revision": "270cbb776e56dfac8f7103a3b4d23ba0"
  },
  {
    "url": "assets/js/72.602602b0.js",
    "revision": "01989028491128b18f4708fe584345db"
  },
  {
    "url": "assets/js/73.98f4a444.js",
    "revision": "f96b0658b614d77ca11ef6e0fcc6cf31"
  },
  {
    "url": "assets/js/74.9e03eae0.js",
    "revision": "2874f1ef3a153261e854f4344ba6d73a"
  },
  {
    "url": "assets/js/8.0694a070.js",
    "revision": "fbb393a52fe9d5910607112fe43a1a20"
  },
  {
    "url": "assets/js/9.43ede2c9.js",
    "revision": "afab9d6baaceedb6a7e5898bcaeb762a"
  },
  {
    "url": "assets/js/app.ed588e5d.js",
    "revision": "f8982c081d82257078a2e7f3a93b1e49"
  },
  {
    "url": "blogs/JavaScritpt/js-00.html",
    "revision": "980a98efae1a6646cedfe1be8d625815"
  },
  {
    "url": "blogs/JavaScritpt/js-01.html",
    "revision": "fda40a46291e79447cc35f78350c9357"
  },
  {
    "url": "blogs/JavaScritpt/js-03.html",
    "revision": "284b6bf8a3298b658ebdd9eaf70cae94"
  },
  {
    "url": "blogs/JavaScritpt/js-04.html",
    "revision": "9be54e69ec9ec31dfe7486c26d2a6797"
  },
  {
    "url": "blogs/Vue/vue-01.html",
    "revision": "1a3426880e8adaf73debad477a7c15fa"
  },
  {
    "url": "blogs/Vue/vue-02.html",
    "revision": "dab66a80667249bd41f88fe9e36ccd81"
  },
  {
    "url": "blogs/Vue/vue-03.html",
    "revision": "6eefde20eb23622ceb610761f2b8639c"
  },
  {
    "url": "blogs/数据结构与算法/ds-00.html",
    "revision": "3acf5b4cdc273e3cde7761d4566f97bb"
  },
  {
    "url": "blogs/数据结构与算法/ds-01.html",
    "revision": "2e7345da5848eb3f83d8e2c74fd71aef"
  },
  {
    "url": "blogs/数据结构与算法/ds-03.html",
    "revision": "cd70d459ecd2fc9fe77d7ff8eca9c827"
  },
  {
    "url": "categories/index.html",
    "revision": "9c2c20c44640be782b2b9e3ff530e241"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "5ca6d0a347083feb55d7541398402774"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "73261735e53bcfccb579250f9d7accda"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "07c809acc9a8ad3f3e3be5dcc07eb4ba"
  },
  {
    "url": "categories/文档/index.html",
    "revision": "0f8b5c60b0a471ca49c4021816203f95"
  },
  {
    "url": "categories/文档/page/2/index.html",
    "revision": "961a8a84f9a7f3658b62a15e798dd055"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "104924924adeb1aaadbc49f2a2dde4e1"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "13ceb705c766d83c97f73a0971286c00"
  },
  {
    "url": "categories/笔记/page/3/index.html",
    "revision": "e6c9e04603d8319465353401eb7d91b9"
  },
  {
    "url": "categories/笔记/page/4/index.html",
    "revision": "8d564741994177105317081749be9b92"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "9fb9f0bd241190d6d53cb8903c1be17f"
  },
  {
    "url": "document/axios/axios01.html",
    "revision": "f92b976b914369d2ffb7c2ac5fb0c95b"
  },
  {
    "url": "document/axios/index.html",
    "revision": "7a5b3c77e184b7c186818a044919aaaf"
  },
  {
    "url": "document/Vue-api/index.html",
    "revision": "ab19716c40849b692f58aaff5651204a"
  },
  {
    "url": "document/Vue-api/Vue-api01.html",
    "revision": "be77f91e2bd1a4f4fc4eb1c68618bba9"
  },
  {
    "url": "document/Vue-api/Vue-api02.html",
    "revision": "c6787b86bc1b53aa6697889a5ba0a98a"
  },
  {
    "url": "document/Vue-api/Vue-api03.html",
    "revision": "0afdd628d67d311d57a11b701a9ffe00"
  },
  {
    "url": "document/Vue-api/Vue-api04.html",
    "revision": "193f7c207fd39a3aa27a7d264c75997d"
  },
  {
    "url": "document/Vue-api/Vue-api05.html",
    "revision": "b9f8485a7a718e1be23a266fd70e1ed7"
  },
  {
    "url": "document/Vue-api/Vue-api06.html",
    "revision": "44f306b62df0d3a95549b29fe71a6db8"
  },
  {
    "url": "document/Vue-api/Vue-api07.html",
    "revision": "7bad441ab216ed32fe9982c03f75d879"
  },
  {
    "url": "document/vue-cli/index.html",
    "revision": "1d5088472969498a546d78c70effc8a9"
  },
  {
    "url": "document/Vue-Router/index.html",
    "revision": "06d99be190683d5b55f1a6adf1ca933d"
  },
  {
    "url": "document/Vue-Router/vue-router01.html",
    "revision": "2db17ddc566c987aaa2e7ee4e23a0b63"
  },
  {
    "url": "document/Vue-Router/vue-router02.html",
    "revision": "07978634226b9bd1ff40512f62744999"
  },
  {
    "url": "document/Vue-Router/vue-router03-api.html",
    "revision": "ecee44bc231fa7b2ec1ad8323064e8e4"
  },
  {
    "url": "exercises/basic/basic01.html",
    "revision": "f0ceb8cdece5f95fa02aebe11249b490"
  },
  {
    "url": "exercises/basic/index.html",
    "revision": "26e3cc393d49bd30a2293b461c9a013a"
  },
  {
    "url": "exercises/JS/index.html",
    "revision": "62382e2f5e77f77940eeea310bbf5806"
  },
  {
    "url": "exercises/Vue/index.html",
    "revision": "1668fe976de22960f1118d1341d89d5c"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "f4b20a7d40f3e70beede3b2a623c7b58"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "661cae974a4086337192f7f96b02fbfb"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "b404033a123f452388b8c054ce3a1987"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c7306510683219e19158eb2ea8270805"
  },
  {
    "url": "index.html",
    "revision": "16e3934cc63527680cbb6a2c32324a3a"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "28f61689bc7bd12875b7d2d75d4415ba"
  },
  {
    "url": "notes/C/C-00.html",
    "revision": "7cafa93cfbd31031e319f50102f670f5"
  },
  {
    "url": "notes/C/C-01.html",
    "revision": "add7706d328b7764dff1fd0f6f58487f"
  },
  {
    "url": "notes/C/C-02.html",
    "revision": "a09ef5c8832d617f43dc2dfca70be4ee"
  },
  {
    "url": "notes/C/C-03.html",
    "revision": "7a22485d28d775756d1533b996d11adc"
  },
  {
    "url": "notes/C/C-04.html",
    "revision": "7da6a2a65a39fad8e3b73e0b59254c42"
  },
  {
    "url": "notes/C/C-05.html",
    "revision": "35306564a90ac7e31b157a1941f158fb"
  },
  {
    "url": "notes/C/C-06.html",
    "revision": "949311dcf1f02c07c8eb7f50921c6399"
  },
  {
    "url": "notes/ES6/ES6-00.html",
    "revision": "3dc00d9d739fc1eb1e303b429294571a"
  },
  {
    "url": "notes/ES6/ES6-01.html",
    "revision": "7351c5c580ea8ce9cfbcfe46b0e884a8"
  },
  {
    "url": "notes/ES6/ES6-02.html",
    "revision": "ed9952f1d3dfec59145b05e879e3f426"
  },
  {
    "url": "notes/ES6/ES6-03.html",
    "revision": "127db2017b11d318db30bac65dc3feaf"
  },
  {
    "url": "notes/ES6/ES6-04.html",
    "revision": "7a188b608d1f10d0fbe21785289c4b6d"
  },
  {
    "url": "notes/ES6/ES6-05.html",
    "revision": "d81a3f47e604d39d9701f76938f8b569"
  },
  {
    "url": "notes/ES6/ES6-06.html",
    "revision": "acbf2009556da73533f1872362feb4ab"
  },
  {
    "url": "notes/ES6/ES6-07.html",
    "revision": "71d0f2a07f03b617cf8a3ff9634848a1"
  },
  {
    "url": "notes/ES6/ES6-08.html",
    "revision": "c5e5e37b4b716a297ba458094948b356"
  },
  {
    "url": "notes/ES6/ES6-09.html",
    "revision": "5f9b51843e5edd85c51f829e38261d76"
  },
  {
    "url": "notes/JavaScript/JavaScript进阶/ES5-00.html",
    "revision": "942679ea977454e9edcddd299946c7c0"
  },
  {
    "url": "notes/JavaScript/JavaScript进阶/ES5-01.html",
    "revision": "f767abb5afa9dcb902351c26075bae97"
  },
  {
    "url": "notes/JavaScript/JavaScript进阶/ES5-02.html",
    "revision": "8c39a99b9dcc62bc930b48b704d3452c"
  },
  {
    "url": "notes/JavaScript/JavaScript进阶/ES5-03.html",
    "revision": "499a0d141fae41a3d55b28f7f04dfe28"
  },
  {
    "url": "notes/JavaScript/JavaScript进阶/ES5-04.html",
    "revision": "36bb31e51a8dda683c3c021667696386"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-00.html",
    "revision": "6ea819631df11087d051e3cbbfa4b5c8"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-01.html",
    "revision": "4f2772a5914df9553ba7601d5242a9f8"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-02.html",
    "revision": "5d4ecf588e4f5bd5d41c00b89be9465e"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-03.html",
    "revision": "ea1d0fa0cfadfa3b88c5d5c86f011627"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-04.html",
    "revision": "10296be057fd42b7a9781f561d2989ec"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-05.html",
    "revision": "d284e1468fa16eedcf959b8c09971605"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-06.html",
    "revision": "e5e68b955e01d9531474d41827e52fea"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-07.html",
    "revision": "d405ea8d673ac20d9c552f2e33a68fb5"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-08.html",
    "revision": "023f3153a9ffc5dc31ec434ca82447d2"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-09.html",
    "revision": "ba80cfa759f5375507640466bdf65934"
  },
  {
    "url": "notes/Vue/Vue-basic/vue-10.html",
    "revision": "7c07c52a5d23ab3729a6b5fc9184a18b"
  },
  {
    "url": "tag/C语言/index.html",
    "revision": "18b4c19d7155a195bd7a1fbf9399de95"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "a993334ed3a1139a762d3d4acda5d188"
  },
  {
    "url": "tag/index.html",
    "revision": "13e48753d5aee97118ef01cd342dc6ea"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "39b66f85cc769b4edb859e2972897b9e"
  },
  {
    "url": "tag/JavaScript进阶/index.html",
    "revision": "cb8794da22896094a6bc8b82db126add"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c65394242068e29c54174b89e64c2802"
  },
  {
    "url": "tag/Vue/page/2/index.html",
    "revision": "11028321618fec8c8121a9874c844232"
  },
  {
    "url": "tag/Vue/page/3/index.html",
    "revision": "c29eca8bebd1d5a8463efc6657c4ad71"
  },
  {
    "url": "tag/Vueのapi/index.html",
    "revision": "e8db74202e7bb677de5be2bf714d7247"
  },
  {
    "url": "tag/Vue插件/index.html",
    "revision": "f6819a49cdeafeac7295142faec372f7"
  },
  {
    "url": "tag/一些坑/index.html",
    "revision": "a7f7113275fd6ff69f13aa4560c98cb0"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "817c73507090d73e048c83bcb53e21e0"
  },
  {
    "url": "tag/笔记/page/2/index.html",
    "revision": "5d0ab02a6d836ac25eed771be0008f69"
  },
  {
    "url": "tag/笔记/page/3/index.html",
    "revision": "ea9aa08340367cc73e2fb0272a3606c7"
  },
  {
    "url": "tag/笔记/page/4/index.html",
    "revision": "3df537e9177570ac2e2e3553f84e43a8"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "89dd66a8e099984c737dbdf826f793e8"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "35a7c5af59d95e0710dd665ba1a645c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "534d5f4f7b3d9feda89159d998dd9fa7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
