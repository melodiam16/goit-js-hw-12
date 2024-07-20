import{a as S,i as y,S as b}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function L(s){const{API_KEY:r,image_type:n,orientation:c,safesearch:e,page:t,limit:i,q:d}=s,u="https://pixabay.com/api/";return S.get(u,{params:{key:r,q:d,page:t,per_page:i,image_type:n,orientation:c,safesearch:e}}).then(({data:g})=>({data:g.hits,total:g.total}))}function v(s){const r=s.map(({webformatURL:n,largeImageURL:c,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
   <li class="gallery-item">
  <a class="gallery-link" href="${c}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${e}"
      width="360px"
      height="200px"
      
    />
    <div class="text-container">
     <p class="text-content">Likes <span class="data-server" >${t}</span></p>
    <p class="text-content">Views <span class="data-server" >${i}</span></p>
    <p class="text-content">Comments <span class="data-server" > ${d}</span></p>
    <p class="text-content">Downloads <span class="data-server" >${u} </span></p>
    </div>
   
  </a>
</li>
`).join("");p.insertAdjacentHTML("beforeend",r)}const P=document.querySelector(".input-js"),x=document.querySelector("#searchForm"),p=document.querySelector(".markup-js"),l=document.querySelector(".loader"),m=document.querySelector(".content"),o=document.querySelector(".next-page");let h;function E(){h=new b(".markup-js a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{E()});x.addEventListener("submit",w);const a={API_KEY:"44976871-26e069ad13948ce040aac9258",image_type:"photo",orientation:"horizontal",safesearch:!0,q:"",page:1,limit:15,maxPage:0,totalHits:0};async function w(s){if(s.preventDefault(),a.page=1,a.q=P.value.trim(),!a.q){alert("Please enter a search term");return}l.classList.remove("hidden"),m.classList.add("hidden");try{const{data:r,total:n}=await L(a);a.totalHits=n,a.maxPage=Math.ceil(n/a.limit),r.length===0?y.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(p.innerHTML="",v(r),x.reset(),h.refresh(),o.classList.remove("hidden"),q())}catch(r){console.error("Fetch Error: ",r)}finally{l.classList.add("hidden"),m.classList.remove("hidden"),a.maxPage===1&&(o.removeEventListener("click",f),o.classList.add("hidden"))}}o.addEventListener("click",f);async function f(){a.page+=1,l.classList.remove("hidden"),o.classList.add("hidden");try{const{data:s}=await L(a);v(s),h.refresh(),q(),a.page*a.limit>=a.totalHits?(o.classList.add("hidden"),y.info({message:"We're sorry, but you've reached the end of search results."}),o.removeEventListener("click",f)):o.classList.remove("hidden")}catch(s){console.error("Fetch Error: ",s)}finally{l.classList.add("hidden"),m.classList.remove("hidden")}}function q(){requestAnimationFrame(()=>{const s=p.querySelector(".gallery-item");if(s){const r=s.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}})}
//# sourceMappingURL=commonHelpers.js.map
