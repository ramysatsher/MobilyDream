(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://static.arc.io/",n(n.s="bd93")})({8011:function(e,t){(function(e,t,n,r,o,i,a,c,s){for(var d=!0,u=!1,l=0;l<document.scripts.length;l++)if(document.scripts[l].src.indexOf(a)>-1){d=!("no"===document.scripts[l].getAttribute("data-lazy"));break}var f=!1,p=[],m=function(e){("e"in e||"p"in e||e.f&&e.f.indexOf("capture")>-1||e.f&&e.f.indexOf("showReportDialog")>-1)&&d&&h(p),m.data.push(e)};function h(a){if(!f){f=!0;var d=t.getElementsByTagName(n)[0],u=t.createElement(n);u.src=c,u.setAttribute("crossorigin","anonymous"),u.addEventListener("load",(function(){try{e[r]=g,e[o]=y;var t=e[i],n=t.init;t.init=function(e){var t=s;for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);n(t)},b(a,t)}catch(c){console.error(c)}})),d.parentNode.insertBefore(u,d)}}function b(t,n){try{for(var i=m.data,a=0;a<t.length;a++)"function"===typeof t[a]&&t[a]();var c=!1,s=e["__SENTRY__"];"undefined"!==typeof s&&s.hub&&s.hub.getClient()&&(c=!0);var d=!1;for(a=0;a<i.length;a++)if(i[a].f){d=!0;var u=i[a];!1===c&&"init"!==u.f&&n.init(),c=!0,n[u.f].apply(n,u.a)}!1===c&&!1===d&&n.init();var l=e[r],f=e[o];for(a=0;a<i.length;a++)"e"in i[a]&&l?l.apply(e,i[a].e):"p"in i[a]&&f&&f.apply(e,[i[a].p])}catch(p){console.error(p)}}m.data=[],e[i]=e[i]||{},e[i].onLoad=function(e){p.push(e),d&&!u||h(p)},e[i].forceLoad=function(){u=!0,d&&setTimeout((function(){h(p)}))},["init","addBreadcrumb","captureMessage","captureException","captureEvent","configureScope","withScope","showReportDialog"].forEach((function(t){e[i][t]=function(){m({f:t,a:arguments})}}));var g=e[r];e[r]=function(t,n,r,o,i){m({e:[].slice.call(arguments)}),g&&g.apply(e,arguments)};var y=e[o];e[o]=function(t){m({p:"reason"in t?t.reason:"detail"in t&&"reason"in t.detail?t.detail.reason:t}),y&&y.apply(e,arguments)},d||setTimeout((function(){h(p)}))})(window,document,"script","onerror","onunhandledrejection","Sentry","7e5c2fad7a564ff8bffd4effc2abb26d","https://browser.sentry-cdn.com/6.2.2/bundle.min.js",{dsn:"https://7e5c2fad7a564ff8bffd4effc2abb26d@sentry.arc.io/2"})},bd93:function(e,t,n){"use strict";n.r(t);n("8011");const r="arc:",o=":start",i=":end",a=(console.log,self.performance);class c{constructor(e={}){const{id:t="",enabled:n=!0}=e;this.prefix=r+t,this.prefix.endsWith(":")||(this.prefix+=":"),this.enabled=n,this.mark=this.mark.bind(this),this.markOnce=this.markOnce.bind(this),this.markStart=this.markStart.bind(this),this.toJSON=this.toJSON.bind(this),this.markEndAndMeasure=this.markEndAndMeasure.bind(this)}enable(){this.enabled=!0}disable(){this.enabled=!1}mark(e){this.enabled&&a.mark(this.prefix+e)}measure(e,t,n){if(this.enabled)try{a.measure(this.prefix+e,t,n)}catch(r){}}markOnce(e){if(!this.enabled)return;const t=this.prefix+e,n=performance.getEntriesByName(t);0===n.length&&performance.mark(t)}markStart(e){if(!this.enabled)return()=>{};const t=this.prefix+e,n=Math.random().toString(36).substring(2,5),r=`${t}:${n}`,c=r+o,s=r+i;return a.mark(c),()=>this.markEndAndMeasure(t,c,s)}markEndAndMeasure(e,t,n){if(this.enabled){a.mark(n);try{a.measure(e,t,n)}catch(r){}a.clearMarks(t),a.clearMarks(n)}}toJSON(){if(!this.enabled)return{};const e=a.getEntries().filter(e=>e.name.startsWith(this.prefix)).map(e=>e.toJSON());return{entries:e,timeOrigin:a.timeOrigin}}}var s=new c;const d="arc:",u={COMLINK_INIT:d+"comlink:init",NODE_ID:d+":nodeId",CLIENT_TEARDOWN:d+"client:teardown",CLIENT_TAB_ID:d+"client:tabId",CDN_CONFIG:d+"cdn:config",P2P_CLIENT_READY:d+"cdn:ready",STORED_FIDS:d+"cdn:storedFids",SW_HEALTH_CHECK:d+"cdn:healthCheck",WIDGET_CONFIG:d+"widget:config",WIDGET_INIT:d+"widget:init",WIDGET_UI_LOAD:d+"widget:load",BROKER_LOAD:d+"broker:load",RENDER_FILE:d+"inlay:renderFile",FILE_RENDERED:d+"inlay:fileRendered"};console.log;function l(){const e=document.body;return e&&"frameset"!==e.tagName.toLowerCase()?e:document.documentElement}const f="data-arc-widget";function p(e,t,n){const r=`${e}#${t.id}`;let o=document.head.querySelector(r);if(o)return o;o=document.createElement(e);for(const i in t)o[i]=t[i];return o.setAttribute(f,""),n&&o.addEventListener("load",n,{once:!0}),document.head.appendChild(o),o}function m(){const e=document.createElement("link"),{relList:t}=e;return!(!t||!t.supports)&&t.supports("preload")}function h(e,t){const n=document.createElement("iframe");n.id=t,n.src=e,n.title="Arc.io Broker Iframe",n.sandbox="allow-scripts allow-same-origin allow-top-navigation-by-user-activation";const r={opacity:"0",width:"0px",height:"0px",border:"none",top:"-9999px",left:"-9999px",position:"fixed",visibility:"hidden","user-select":"none"};for(const[o,i]of Object.entries(r))n.style.setProperty(o,i,"important");return n.setAttribute("loading","eager"),n.setAttribute(f,""),n}function b(e){const t="arc-broker";let n=document.querySelector("iframe#"+t);if(!n){n=h(e,t);const r=()=>{const e=l();try{e.prepend(n)}catch(t){e.appendChild(n)}o.disconnect()},o=new MutationObserver(r);o.observe(document.documentElement,{childList:!0,subtree:!0}),r()}return new Promise(e=>{const t=e=>{e.data.arcEvent===u.BROKER_LOAD&&i()};window.addEventListener("message",t),n.addEventListener("load",i);const r=1e4,o=setTimeout(()=>{console.warn("Arc broker timed out"),i()},r);function i(){clearTimeout(o),window.removeEventListener("message",t),n.removeEventListener("load",i),e(n)}})}function g(e){if(!("serviceWorker"in navigator))return;const{controller:t}=navigator.serviceWorker;t&&t.postMessage(e)}function y(){if("__arc__"in window)return;const e=window.__arc__={};"arc"in window||(window.arc=e),s.measure("widget.js:load","responseEnd"),g({arcEvent:u.WIDGET_INIT});const t="4c137d4",n="https://static.arc.io",r=`${n}/widget/js/core.js?${t}`,o=`${n}/widget/js/core-legacy.js?${t}`,i="https://core.arc.io/broker.html?"+t,a=(e,t)=>({href:e,crossOrigin:"",rel:"preconnect",id:"arc-preconnect-"+t}),c=[a("https://gateway.arc.io","gateway"),a("https://webseed.arc.io","webseed")];m()&&c.push({href:r,rel:"modulepreload",as:"script",id:"arc-preload-corejs"}),c.forEach(e=>p("link",e));let d=s.markStart("ws_tracker:connect");const l="wss://tkr.arc.io/announce",f=new WebSocket(l);f.addEventListener("open",d,{once:!0}),e.trackerSocket=f,d=s.markStart("broker.html:load");const h=b(i);h.then(d),e.brokerIframePromise=h,d=s.markStart("core.js:load"),p("script",{src:r,type:"module",async:!0,id:"arc-corejs"},d),function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",(function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()}),!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}(),p("script",{src:o,noModule:!0,async:!0,id:"arc-corejs-legacy"})}y()}});