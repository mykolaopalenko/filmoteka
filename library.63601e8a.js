!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired76b;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired76b=n);var r=n("4Nugj"),l=n("LW3sO"),o=n("4LMMA"),i=n("jcFG7"),d=n("cKDzr"),c=(r=n("4Nugj"),document.querySelector('[data-queue="data-queue"]')),s=document.querySelector('[data-watched="data-watched"]'),u="watched";c.addEventListener("click",p),s.addEventListener("click",y),c.disabled=!1;var v=function(e,t,a){return e.slice((a-1)*t,a*t)};function f(){u="watched";var e=localStorage.getItem("watched"),t=JSON.parse(e)||[],a=t.length;t.length>20?r.pag.classList.remove("is-hidden"):t.length<=20&&r.pag.classList.add("is-hidden");var n=(0,l.createFilmsGallery)(v(t,20,1),!1,!0,"watched");return r.gallery.innerHTML=n,i.default.reset(a),t}function g(){u="queue";var e=localStorage.getItem("queue"),t=JSON.parse(e)||[],a=t.length;t.length>20?r.pag.classList.remove("is-hidden"):t.length<=20&&r.pag.classList.add("is-hidden");var n=(0,l.createFilmsGallery)(v(t,20,1),!1,!0,"queue");return r.gallery.innerHTML=n,i.default.reset(a),t}function y(){f(),i.default.on("beforeMove",(function(e){(0,d.topFunction)();var t=e.page,a=v(f(),20,t);console.log(a);var n=(0,l.createFilmsGallery)(a);r.gallery.innerHTML=n})),c.disabled=!1,c.classList.remove("active"),s.classList.add("active"),s.disabled=!0}function p(){g(),i.default.on("beforeMove",(function(e){(0,d.topFunction)();var t=e.page,a=v(g(),20,t);console.log(a);var n=(0,l.createFilmsGallery)(a);r.gallery.innerHTML=n})),s.disabled=!1,c.classList.add("active"),s.classList.remove("active"),c.disabled=!0}r.gallery.addEventListener("click",(function(e){(0,o.onHoverBtnCLick)(e),console.log(u),"watched"===u?y():p()}));l=n("LW3sO"),i=n("jcFG7");var h=document.querySelector(".plug");localStorage.length>1&&h.remove();var L,m=["#ff6b01"],w=function(){var e,t=!0,a=!1,n=void 0;try{for(var r,l=L[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var o=r.value,i=o.innerHTML,d="revealColor"in o.dataset?o.dataset.revealColor:(e=m)[Math.floor(Math.random()*e.length)];o.innerHTML='<span data-reveal="content"><div data-reveal="cover" style="background-color:'.concat(d,'"></div><span data-reveal="text">').concat(i,"</span></span>")}}catch(e){a=!0,n=e}finally{try{t||null==l.return||l.return()}finally{if(a)throw n}}},b=function(){var e=window.innerHeight,t=document.documentElement.scrollTop||document.body.scrollTop,a=document.body.clientHeight<=t+e,n=!0,r=!1,l=void 0;try{for(var o,i=L[Symbol.iterator]();!(n=(o=i.next()).done);n=!0){var d=o.value;if(!d.classList.contains("loaded")){var c=d.getBoundingClientRect().top+t;(a||c<=t+.8*e)&&d.classList.add("loaded")}}}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}};document.addEventListener("DOMContentLoaded",(function(){L=document.querySelectorAll('[data-js="reveal"]'),w(),window.addEventListener("scroll",b,!1),window.dispatchEvent(new Event("scroll"))}),!1);l=n("LW3sO");n("5xtVg");r=n("4Nugj"),d=n("cKDzr");n("iIMyV");f(),i.default.on("beforeMove",(function(e){(0,d.topFunction)();var t,a,n,o=e.page,i=(t=f(),a=20,n=o,t.slice((n-1)*a,n*a)),c=(0,l.createFilmsGallery)(i);r.gallery.innerHTML=c}))}();
//# sourceMappingURL=library.63601e8a.js.map
