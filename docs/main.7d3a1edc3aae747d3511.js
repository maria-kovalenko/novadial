!function(){var e,t={2475:function(e,t,n){"use strict";n(2555),n(4240),n(9733)},9733:function(){document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("wheel",(function(e){window.innerWidth>=1024&&(e.deltaY>0?(window.scrollBy({top:window.innerHeight,left:0,behavior:"smooth"}),document.body.classList.add("scrolling")):(window.scrollBy({top:-window.innerHeight,left:0,behavior:"smooth"}),document.body.classList.remove("scrolling")))})),document.addEventListener("scroll",(function(){if(window.innerWidth>=1024){var e=window.pageYOffset;document.querySelector(".body-bg").style.backgroundPositionY=-1612- -e/24+"px"}}))}))},4240:function(){document.addEventListener("DOMContentLoaded",(function(){new Swiper(".swiper",{direction:"horizontal",loop:!0,spaceBetween:19,breakpoints:{320:{slidesPerView:1},500:{slidesPerView:2},700:{slidesPerView:3},1024:{slidesPerView:4}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}))},2555:function(){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".burger-menu"),t=document.querySelector(".menu"),n=document.querySelectorAll(".menu__link");e.addEventListener("click",(function(){e.classList.toggle("active"),document.body.classList.toggle("open"),document.querySelector(".header").classList.toggle("open"),e.classList.contains("active")?(e.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false"),n.forEach((function(e){return e.setAttribute("tabindex","0")}))):(e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),n.forEach((function(e){return e.setAttribute("tabindex","-1")})))}))}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var u=1/0;for(a=0;a<e.length;a++){n=e[a][0],o=e[a][1],i=e[a][2];for(var c=!0,d=0;d<n.length;d++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[d])}))?n.splice(d--,1):(c=!1,i<u&&(u=i));if(c){e.splice(a--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,u=n[0],c=n[1],d=n[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(d)var a=d(r)}for(t&&t(n);s<u.length;s++)i=u[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(a)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[202],(function(){return r(1202)}));var o=r.O(void 0,[202],(function(){return r(2475)}));o=r.O(o)}();