import{a as h,S as g,i as y}from"./assets/vendor-0776be4e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c="https://api.thecatapi.com/v1";h.defaults.headers.common["x-api-key"]="live_eExR10hETQ1PGkLSXvefxxX5tvuslw5lXSJg9XEiZJSO8ILtQPGLSp0SInZo4dhh";async function L(){return await fetch(`${c}/breeds`).then(t=>{if(!t.ok)throw new Error("Bad request");return t.json()})}async function S(t){const s=new URLSearchParams({breed_ids:t});return await fetch(`${c}/images/search?${s}`).then(n=>{if(!n.ok)throw new Error("Bad request");return n.json()})}const a={select:document.querySelector(".breed-select"),catComtainer:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};let d;L().then(t=>{d=t,a.select.innerHTML=t.map(({id:s,name:n})=>`<option value="${s}">${n}</option>`).join(""),new g({select:a.select}),a.select.classList.toggle("hiden-elem",!1),a.loader.classList.toggle("hiden-elem",!0)}).catch(()=>m());a.select.addEventListener("change",$);function $(t){a.catComtainer.classList.toggle("hiden-elem",!0),a.loader.classList.toggle("hiden-elem",!1),S(t.target.value).then(([{url:s}])=>{a.catComtainer.innerHTML=w(s,d.find(({id:n})=>n===t.target.value)),document.querySelector(".image").addEventListener("load",v)}).catch(()=>{m(),a.loader.classList.toggle("hiden-elem",!0)})}function v(){a.catComtainer.classList.toggle("hiden-elem",!1),a.loader.classList.toggle("hiden-elem",!0)}function w(t,{name:s,description:n,adaptability:o,affection_level:e,child_friendly:r,dog_friendly:l,energy_level:u,intelligence:f,temperament:p}){return`
       <img class="image" src="${t}" alt="${s}" />
       <div> 
       <h2 class="breed">${s}</h2>
        <p class="description">${n}</p>
        <p class="temperament"><span class="temperament-acent">Temperament: </span>${p}</p>
        <ul class="trait-list">
          <li class="trait-list-item"><span class="trait-name">Adaptabylity:</span>${i(o)}</li>
           <li class="trait-list-item"><span class="trait-name">Affectionate:</span>${i(e)}</li>
          <li class="trait-list-item"><span class="trait-name">Child friendly:</span>${i(r)}</li>          
          <li class="trait-list-item"><span class="trait-name">Dog friendly:</span>${i(l)}</li>
          <li class="trait-list-item"><span class="trait-name">Energy level:</span>${i(u)}</li>
        
          <li class="trait-list-item"><span class="trait-name">Inteligence:</span>${i(f)}</li>

        </ul>
        </div>
    `}function i(t){return Array.from({length:+t},s=>"⭐").join(" ")}function m(){y.error({title:"Oops!",message:"Something went wrong! Try reloading the page!",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
