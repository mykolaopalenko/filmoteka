var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired76b=o),o("krGWQ"),o("kwJfa"),o("bTcpz");var a=o("fA0uA"),l=o("2nhTy");const r=document.querySelector(".films"),c=document.querySelector('[data-queue="data-queue"]'),s=document.querySelector('[data-watched="data-watched"]');c.addEventListener("click",(function(e){f(),d.on("beforeMove",(e=>{const t=e.page,n=i(f(),20,t);console.log(n);const o=(0,a.createFilmsGallery)(n);r.innerHTML=o})),s.disabled=!1,c.classList.add("active"),s.classList.remove("active"),c.disabled=!0})),s.addEventListener("click",(function(e){u(),d.on("beforeMove",(e=>{const t=e.page,n=i(u(),20,t);console.log(n);const o=(0,a.createFilmsGallery)(n);r.innerHTML=o})),c.disabled=!1,c.classList.remove("active"),s.classList.add("active"),s.disabled=!0})),c.disabled=!1;const d=(0,l.pagination)(),i=(e,t,n)=>e.slice((n-1)*t,n*t);function u(){const e=localStorage.getItem("watched");let t=JSON.parse(e);const n=t.length,o=(0,a.createFilmsGallery)(i(t,20,1));return r.innerHTML=o,d.reset(n),t}function f(){const e=localStorage.getItem("queue");let t=JSON.parse(e);const n=t.length,o=(0,a.createFilmsGallery)(i(t,20,1));return r.innerHTML=o,d.reset(n),t}localStorage.setItem("watched",JSON.stringify(watchMovieObject)),localStorage.setItem("queue",JSON.stringify(queueMovieObject)),o("04jNI"),o("2nhTy");const v=["#ff6b01"];let g;const p=()=>{for(const t of g){const n=t.innerHTML,o="revealColor"in t.dataset?t.dataset.revealColor:(e=v)[Math.floor(Math.random()*e.length)];t.innerHTML=`<span data-reveal="content"><div data-reveal="cover" style="background-color:${o}"></div><span data-reveal="text">${n}</span></span>`}var e},m=()=>{const e=window.innerHeight,t=document.documentElement.scrollTop||document.body.scrollTop,n=document.body.clientHeight<=t+e;for(const o of g){if(o.classList.contains("loaded"))continue;const a=o.getBoundingClientRect().top+t;(n||a<=t+.8*e)&&o.classList.add("loaded")}};document.addEventListener("DOMContentLoaded",(()=>{g=document.querySelectorAll('[data-js="reveal"]'),p(),window.addEventListener("scroll",m,!1),window.dispatchEvent(new Event("scroll"))}),!1);
//# sourceMappingURL=library.8d63fd8c.js.map
