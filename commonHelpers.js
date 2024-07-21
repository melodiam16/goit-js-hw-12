import{a as q,i as y,S}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function L(a){const{API_KEY:t,image_type:i,orientation:c,safesearch:e,page:s,limit:o,q:d}=a,u="https://pixabay.com/api/";return q.get(u,{params:{key:t,q:d,page:s,per_page:o,image_type:i,orientation:c,safesearch:e}}).then(({data:g})=>({data:g.hits,total:g.total}))}function v(a){const t=a.map(({webformatURL:i,largeImageURL:c,tags:e,likes:s,views:o,comments:d,downloads:u})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${c}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${e}"
      width="360px"
      height="200px"
      
    />
    <div class="text-container">
     <p class="text-content">Likes <span class="data-server" >${s}</span></p>
    <p class="text-content">Views <span class="data-server" >${o}</span></p>
    <p class="text-content">Comments <span class="data-server" > ${d}</span></p>
    <p class="text-content">Downloads <span class="data-server" >${u} </span></p>
    </div>
   
  </a>
</li>
`).join("");h.insertAdjacentHTML("beforeend",t)}const b=document.querySelector(".input-js"),m=document.querySelector("#searchForm"),h=document.querySelector(".markup-js"),l=document.querySelector(".loader"),p=document.querySelector(".content"),n=document.querySelector(".next-page");let f;function P(){f=new S(".markup-js a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{P()});m.addEventListener("submit",w);const r={API_KEY:"44976871-26e069ad13948ce040aac9258",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",page:1,limit:15,maxPage:0,totalHits:0};async function w(a){if(a.preventDefault(),r.page=1,r.q=b.value.trim(),!r.q){alert("Please enter a search term");return}l.classList.remove("hidden"),p.classList.add("hidden");try{const{data:t,total:i}=await L(r);r.totalHits=i,r.maxPage=Math.ceil(i/r.limit),t.length===0?(y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m.reset(),n.classList.add("hidden")):(h.innerHTML="",v(t),m.reset(),f.refresh(),t.length<r.limit?n.classList.add("hidden"):n.classList.remove("hidden"),x())}catch(t){console.error("Fetch Error: ",t)}finally{l.classList.add("hidden"),p.classList.remove("hidden"),r.maxPage===1&&n.classList.add("hidden")}}n.addEventListener("click",E);async function E(){r.page+=1,l.classList.remove("hidden"),n.classList.add("hidden");try{const{data:a}=await L(r);v(a),f.refresh(),x(),a.length<r.limit||r.page*r.limit>=r.totalHits?(n.classList.add("hidden"),y.info({message:"We're sorry, but you've reached the end of search results."})):n.classList.remove("hidden")}catch(a){console.error("Fetch Error: ",a)}finally{l.classList.add("hidden"),p.classList.remove("hidden")}}function x(){requestAnimationFrame(()=>{const a=h.querySelector(".gallery-item");if(a){const t=a.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}})}
//# sourceMappingURL=commonHelpers.js.map
