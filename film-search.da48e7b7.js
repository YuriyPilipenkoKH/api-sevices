!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n("6JpON");a=n("6JpON");n("5IjG7");var l=n("l9lAS"),i=n("dIxxU");async function s(e,t,o){try{const r=new URLSearchParams({key:"34491623-5c4ef369d6c59f62bc483440c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}),n=await i.default.get(`https://pixabay.com/api/?${r}`);return console.log(n.data),n.data}catch(e){throw console.error(e),Error(response.statusText)}}function c(e,t,o){const r=document.querySelector(".gallery"),n=e.map(((e,r)=>{console.log("page",t,"perPage",o);const{id:n,largeImageURL:a,webformatURL:l,tags:i,likes:s,views:c,comments:d,downloads:u}=e;return`\n        <a class="gallery__link" href="${a}">\n          <div class="gallery-item" id="${n}">\n            <img class="gallery-item__img" src="${l}" alt="${i}" loading="lazy" />\n            <div class="info">\n              <p class="info-item"><b>ID</b>${r+1+(t-1)*o}</p>\n              <p class="info-item"><b>Views</b>${c}</p>\n              <p class="info-item"><b>Comments</b>${d}</p>\n              <p class="info-item"><b>Downloads</b>${u}</p>\n            </div>\n          </div>\n         </a>\n         `})).join("");r.insertAdjacentHTML("beforeend",n)}var d=n("j1Fxp");l=n("l9lAS");n("50nUk"),n("fSCrk");const u=new SimpleLightbox(".gallery .gallery__link",{captionsData:"alt",captionDelay:250});document.querySelector("#root").innerHTML=l.headerOfClassSearch;const f={head:document.querySelector(".header"),form:document.querySelector("#search-form"),input:document.querySelector(".field"),sub:document.querySelector(".search-btn"),loadMore:document.querySelector(".load-more"),gal:document.querySelector(".gallery"),toTop:document.querySelector(".back-to-top")};f.head.insertAdjacentHTML("beforeend",l.perPageSelect);const p=document.querySelector("#sel");p.addEventListener("change",(function(){y=p.value}));let y=p.value;f.form.addEventListener("submit",(function(t){if(t.preventDefault(),m=f.input.value.trim(),f.sub.disabled=!0,f.gal.innerHTML="",""===m)return void a.Notify.failure("The search string cannot be empty. Please specify your search query.");if(1===m.length)return void a.Notify.failure("The  query is too short. Please specify your search query.");s(m,h,y).then((t=>{const{hits:o,totalHits:r,total:n}=t;0!==r?(c(t.hits,h,y),u.refresh(),e(a).Notify.success(`Hooray! We found ${r} images.`),f.sub.disabled=!0,r>y&&f.loadMore.classList.add("visible")):a.Notify.failure("Sorry, there are no images matching your search query. Please try again.")})).catch((e=>console.log(e))).finally((()=>{f.form.reset()}))})),f.loadMore.addEventListener("click",(function(e){e.preventDefault(),h+=1,s(m,h,y).then((e=>{const{hits:t,totalHits:o,total:r}=e,n=Math.ceil(o/y);console.log("totalPages",n),c(t,h,y),u.refresh(),h>=n&&(f.loadMore.classList.remove("visible"),a.Notify.failure("We're sorry, but you've reached the end of search results."))}))})),f.input.addEventListener("input",(function(){f.sub.disabled=!1,f.loadMore.classList.remove("visible")})),f.toTop.addEventListener("click",d.onToTop);let m=f.input.value,h=1;(0,d.onScroll)()}();
//# sourceMappingURL=film-search.da48e7b7.js.map
