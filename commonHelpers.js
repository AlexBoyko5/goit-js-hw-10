import{f as y,i as f}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();let d,m;const u=document.querySelector(".timer"),a=document.querySelector("[data-start]");a.disabled=!0;const g={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){const o=r[0];o>new Date?(d=o,a.disabled=!1):(f.error({title:"Error",message:"Please choose a date in the future"}),a.disabled=!0)}};y("#datetime-picker",g);function c(r){return r.toString().padStart(2,"0")}function b(r){const o=Math.floor(r/1e3%60),s=Math.floor(r/(1e3*60)%60),n=Math.floor(r/(1e3*60*60)%24);return{days:Math.floor(r/(1e3*60*60*24)),hours:n,minutes:s,seconds:o}}function l(){const r=d-new Date;if(r>0){const{days:o,hours:s,minutes:n,seconds:e}=b(r),t=c(o),i=c(s),p=c(n),h=c(e);u.textContent=`${t}:${i}:${p}:${h}`}else clearInterval(m),u.textContent="00:00:00:00"}function D(){d>new Date?(l(),m=setInterval(l,1e3),a.disabled=!0,document.getElementById("datetime-picker").disabled=!0):f.error({title:"Error",message:"Please choose a date in the future"})}a.addEventListener("click",D);
//# sourceMappingURL=commonHelpers.js.map