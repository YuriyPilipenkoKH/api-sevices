function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var n=a("7Y9D8");n=a("7Y9D8");a("fZKcF");var l=a("31gzB"),i=a("2shzp");async function s(e,t,o){try{const r=new URLSearchParams({key:"34491623-5c4ef369d6c59f62bc483440c",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}),a=await i.default.get(`https://pixabay.com/api/?${r}`);return console.log(a.data),a.data}catch(e){throw console.error(e),Error(response.statusText)}}function c(e,t,o){const r=document.querySelector(".gallery"),a=e.map(((e,r)=>{console.log("page",t,"perPage",o);const{id:a,largeImageURL:n,webformatURL:l,tags:i,likes:s,views:c,comments:d,downloads:u}=e;return`\n        <a class="gallery__link" href="${n}">\n          <div class="gallery-item" id="${a}">\n            <img class="gallery-item__img" src="${l}" alt="${i}" loading="lazy" />\n            <div class="info">\n              <p class="info-item"><b>ID</b>${r+1+(t-1)*o}</p>\n              <p class="info-item"><b>Views</b>${c}</p>\n              <p class="info-item"><b>Comments</b>${d}</p>\n              <p class="info-item"><b>Downloads</b>${u}</p>\n            </div>\n          </div>\n         </a>\n         `})).join("");r.insertAdjacentHTML("beforeend",a)}var d=a("2YGUk");l=a("31gzB");a("aLON4"),a("2Fivl");const u=new SimpleLightbox(".gallery .gallery__link",{captionsData:"alt",captionDelay:250});document.querySelector("#root").innerHTML=l.headerOfClassSearch;const f={head:document.querySelector(".header"),form:document.querySelector("#search-form"),input:document.querySelector(".field"),sub:document.querySelector(".search-btn"),loadMore:document.querySelector(".load-more"),gal:document.querySelector(".gallery"),toTop:document.querySelector(".back-to-top")};f.head.insertAdjacentHTML("beforeend",l.perPageSelect);const p=document.querySelector("#sel");p.addEventListener("change",(function(){y=p.value}));let y=p.value;f.form.addEventListener("submit",(function(t){if(t.preventDefault(),h=f.input.value.trim(),f.sub.disabled=!0,f.gal.innerHTML="",""===h)return void n.Notify.failure("The search string cannot be empty. Please specify your search query.");if(1===h.length)return void n.Notify.failure("The  query is too short. Please specify your search query.");s(h,m,y).then((t=>{const{hits:o,totalHits:r,total:a}=t;0!==r?(c(t.hits,m,y),u.refresh(),e(n).Notify.success(`Hooray! We found ${r} images.`),f.sub.disabled=!0,r>y&&f.loadMore.classList.add("visible")):n.Notify.failure("Sorry, there are no images matching your search query. Please try again.")})).catch((e=>console.log(e))).finally((()=>{f.form.reset()}))})),f.loadMore.addEventListener("click",(function(e){e.preventDefault(),m+=1,s(h,m,y).then((e=>{const{hits:t,totalHits:o,total:r}=e,a=Math.ceil(o/y);console.log("totalPages",a),c(t,m,y),u.refresh(),m>=a&&(f.loadMore.classList.remove("visible"),n.Notify.failure("We're sorry, but you've reached the end of search results."))}))})),f.input.addEventListener("input",(function(){f.sub.disabled=!1,f.loadMore.classList.remove("visible")})),f.toTop.addEventListener("click",d.onToTop);let h=f.input.value,m=1;(0,d.onScroll)();
//# sourceMappingURL=film-search.9d724a27.js.map