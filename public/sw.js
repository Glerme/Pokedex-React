if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return a;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-665b6cc9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/H7J0Z6RxYQDX9ZAGArgp6/_buildManifest.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/H7J0Z6RxYQDX9ZAGArgp6/_ssgManifest.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/252f366e.f041912ae66b563e6b68.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/31664189.0b6195e2ba6027ab12b2.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/commons.cfbf54b73cfc5444cddf.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/d92bfc1508962973f44c0649031790456a9ea5a8.b2c76f3317bfd7f9d45e.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/ddbbf4832afb804d5ff7d92a919f62f6ecde7417.585cfe20fd49f3432cdb.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/framework.4b81eedf2fcdb09bf521.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/main-95ccb1e6c1fcff78cc2e.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/pages/_app-0addcb0f3305c8724711.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/pages/_error-3debab7b4805691a4b80.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/pages/index-fc2336715edb0169b360.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/pages/pokemon/%5Bslug%5D-a6ff9eb594e9cfe866e7.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/polyfills-ff94e68042added27a93.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"H7J0Z6RxYQDX9ZAGArgp6"},{url:"/android-chrome-192x192.png",revision:"53d67a2ae735b06be48506c222f9d731"},{url:"/android-chrome-512x512.png",revision:"dba767055768e40db01ab46c02dc9463"},{url:"/apple-touch-icon.png",revision:"65254133fc5a5b29e3c17ce547eb745c"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"2b32f45bce6892b5b94243eef18e32e1"},{url:"/favicon-32x32.png",revision:"9f508fd6ec68dfcdc6394d554dbde9ca"},{url:"/favicon.ico",revision:"805a56418c1af33fb227bf19f1116591"},{url:"/left-arrow.svg",revision:"5f5bc6018037aabe596eb955e398a700"},{url:"/logo.ico",revision:"08e988f38942e41ac31840da7130bb0f"},{url:"/logo.svg",revision:"a873614e91d997ae019adfa2962accee"},{url:"/manifest.json",revision:"e066b8b0723ec546cfa1629409625edf"},{url:"/mstile-144x144.png",revision:"5a38bd36603491aaff7e387e1ca8dbe7"},{url:"/mstile-150x150.png",revision:"f932f1801f58035097b5c12200c0800d"},{url:"/mstile-310x150.png",revision:"b98c325400e039abc3df99070e6f4860"},{url:"/mstile-310x310.png",revision:"56690a1ac842eb0ad521b19ba579c4c5"},{url:"/mstile-70x70.png",revision:"7cb4935b1612aac56e94de3aacb19832"},{url:"/safari-pinned-tab.svg",revision:"a1986905d756f10f45c8afc90f688b45"},{url:"/site.webmanifest",revision:"7f036a2d2f2144847162d9a7299d059b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.NetworkFirst({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.NetworkFirst({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:js)$/i,new e.NetworkFirst({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:css|less)$/i,new e.NetworkFirst({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
