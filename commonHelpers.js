import{a as g,S as h,i as y}from"./assets/vendor-0776be4e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const c="https://api.thecatapi.com/v1";g.defaults.headers.common["x-api-key"]="live_eExR10hETQ1PGkLSXvefxxX5tvuslw5lXSJg9XEiZJSO8ILtQPGLSp0SInZo4dhh";async function L(){return await fetch(`${c}/breeds`).then(t=>{if(!t.ok)throw new Error("Bad request");return t.json()})}async function S(t){const s=new URLSearchParams({breed_ids:t});return await fetch(`${c}/images/search?${s}`).then(i=>{if(!i.ok)throw new Error("Bad request");return i.json()})}const r={select:document.querySelector(".breed-select"),catComtainer:document.querySelector(".cat-info"),loader:document.querySelector(".loader")};let d;L().then(t=>{d=t,r.select.innerHTML=t.map(({id:s,name:i})=>`<option value="${s}">${i}</option>`).join(""),new h({select:r.select}),r.select.classList.toggle("hiden-elem",!1),r.loader.classList.toggle("hiden-elem",!0)}).catch(()=>m());r.select.addEventListener("change",$);function $(t){r.catComtainer.classList.toggle("hiden-elem",!0),r.loader.classList.toggle("hiden-elem",!1),S(t.target.value).then(s=>{r.catComtainer.innerHTML=v(s[0].url,d.filter(({id:e})=>e===t.target.value)[0]),document.querySelector(".image").addEventListener("load",n);function n(){r.catComtainer.classList.toggle("hiden-elem",!1),r.loader.classList.toggle("hiden-elem",!0)}}).catch(()=>{m(),r.loader.classList.toggle("hiden-elem",!0)})}function v(t,{name:s,description:i,adaptability:n,affection_level:e,child_friendly:a,dog_friendly:o,energy_level:u,intelligence:f,temperament:p}){return`
       <img class="image" src="${t}" alt="${s}" />
       <div> 
       <h2 class="breed">${s}</h2>
        <p class="description">${i}</p>
        <p class="temperament"><span class="temperament-acent">Temperament: </span>${p}</p>
        <ul class="trait-list">
          <li class="trait-list-item"><span class="trait-name">Adaptabylity:</span>${l(n)}</li>
           <li class="trait-list-item"><span class="trait-name">Affectionate:</span>${l(e)}</li>
          <li class="trait-list-item"><span class="trait-name">Child friendly:</span>${l(a)}</li>          
          <li class="trait-list-item"><span class="trait-name">Dog friendly:</span>${l(o)}</li>
          <li class="trait-list-item"><span class="trait-name">Energy level:</span>${l(u)}</li>
        
          <li class="trait-list-item"><span class="trait-name">Inteligence:</span>${l(f)}</li>

        </ul>
        </div>
    `}function l(t){return Array.from({length:+t},s=>"⭐").join(" ")}function m(){y.error({title:"Oops!",position:"center",message:"Something went wrong! Try reloading the page!"})}
//# sourceMappingURL=commonHelpers.js.map
