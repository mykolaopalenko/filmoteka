var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired76b;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired76b=o),o("krGWQ");var a=o("fA0uA"),l=o("2nhTy"),s=o("gXu43"),r=o("krGWQ");const i=document.querySelector('[data-queue="data-queue"]'),d=document.querySelector('[data-watched="data-watched"]');i.addEventListener("click",(function(e){p(),c.on("beforeMove",(e=>{(0,s.topFunction)();const t=e.page,n=u(p(),20,t);console.log(n);const o=(0,a.createFilmsGallery)(n);r.gallery.innerHTML=o})),d.disabled=!1,i.classList.add("active"),d.classList.remove("active"),i.disabled=!0})),d.addEventListener("click",(function(e){g(),c.on("beforeMove",(e=>{(0,s.topFunction)();const t=e.page,n=u(g(),20,t);console.log(n);const o=(0,a.createFilmsGallery)(n);r.gallery.innerHTML=o})),i.disabled=!1,i.classList.remove("active"),d.classList.add("active"),d.disabled=!0})),i.disabled=!1;const c=(0,l.pagination)(),u=(e,t,n)=>e.slice((n-1)*t,n*t);function g(){const e=localStorage.getItem("watched");let t=JSON.parse(e);const n=t.length;t.length>20?r.pag.classList.remove("is-hidden"):t.length<=20&&r.pag.classList.add("is-hidden");const o=(0,a.createFilmsGallery)(u(t,20,1));return r.gallery.innerHTML=o,c.reset(n),t}function p(){const e=localStorage.getItem("queue");let t=JSON.parse(e);const n=t.length;t.length>20?r.pag.classList.remove("is-hidden"):t.length<=20&&r.pag.classList.add("is-hidden");const o=(0,a.createFilmsGallery)(u(t,20,1));return r.gallery.innerHTML=o,c.reset(n),t}a=o("fA0uA"),l=o("2nhTy");const f=["#ff6b01"];let v;const h=()=>{for(const t of v){const n=t.innerHTML,o="revealColor"in t.dataset?t.dataset.revealColor:(e=f)[Math.floor(Math.random()*e.length)];t.innerHTML=`<span data-reveal="content"><div data-reveal="cover" style="background-color:${o}"></div><span data-reveal="text">${n}</span></span>`}var e},L=()=>{const e=window.innerHeight,t=document.documentElement.scrollTop||document.body.scrollTop,n=document.body.clientHeight<=t+e;for(const o of v){if(o.classList.contains("loaded"))continue;const a=o.getBoundingClientRect().top+t;(n||a<=t+.8*e)&&o.classList.add("loaded")}};document.addEventListener("DOMContentLoaded",(()=>{v=document.querySelectorAll('[data-js="reveal"]'),h(),window.addEventListener("scroll",L,!1),window.dispatchEvent(new Event("scroll"))}),!1);const m=(0,l.pagination)();g(),m.on("beforeMove",(e=>{const t=e.page,n=paginate(g(),20,t);console.log(n);const o=(0,a.createFilmsGallery)(n);gallery.innerHTML=o}));
//# sourceMappingURL=library.fa89ddab.js.map
