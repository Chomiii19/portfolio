let e;const t=document.querySelector(".clickHold"),o=document.querySelector(".intro-section"),l=document.querySelector(".hold"),a=document.querySelector(".box"),s=document.querySelector(".cursor"),r=document.querySelector(".noise-container"),n=document.querySelector(".intro");document.querySelector(".intro-name");const c=document.querySelector(".intro-bar"),d=document.querySelectorAll(".move"),i=document.querySelector(".portfolio");document.querySelector(".sub-sections"),document.querySelector(".about"),document.querySelector(".tech-stack");const u=document.querySelector(".slides");document.querySelector(".contents");const m=document.querySelectorAll(".dot"),y="ABCDEFGHIJKLMNOPQRSTUVWXYZ";Array.from(d).map(e=>({posX:e.offsetLeft,posY:e.offsetTop})),r.addEventListener("mousemove",e=>{let t=e.clientX,o=e.clientY;s.style.left=`${t}px`,s.style.top=`${o}px`});const p=e=>{e.classList.add("appear");let o=0,l=setInterval(()=>{e.innerText=e.dataset.value.split("").map((t,l)=>l<o?e.dataset.value[l]:y[Math.floor(Math.random()*y.length)]).join(""),o>=e.dataset.value.length&&(clearInterval(l),"JOMARI BORINES"!==e.dataset.value&&setTimeout(()=>{e.dataset.value="JOMARI BORINES",setTimeout(()=>{t.classList.add("appear"),p(e)},1e3)},2e3)),o+=1/3},50);PowerGlitch.glitch(".glitch",{playMode:"always",createContainers:!0,hideOverflow:!1,timing:{duration:3e3},glitchTimeSpan:{start:.5,end:.7},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:{count:4,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1})};setTimeout(()=>{let e=0,t=setInterval(()=>{e>=c.dataset.value&&(clearInterval(t),setTimeout(()=>{n.classList.add("appear"),p(n)},1e3)),e++,c.style.width=`${e}px`},10)},1500);let v=!1;document.addEventListener("mousedown",()=>{t.classList.remove("appear"),a.classList.add("loading"),l.classList.add("appear"),e=setTimeout(()=>{v=!0,o.style.display="none",i.style.display="flex"},3020)}),document.addEventListener("mouseup",()=>{clearTimeout(e),v||(t.classList.add("appear"),l.classList.remove("appear"),a.classList.remove("loading")),v=!1});const S=document.querySelectorAll(".boxCopy");a.addEventListener("mouseenter",()=>{S.forEach(e=>{e.style.transform="rotate(0deg)"})}),a.addEventListener("mouseleave",()=>{let e=0;S.forEach((t,o)=>{e=(o+1)*20,t.style.transform=`rotate(${e}deg)`})});let f=0;S.forEach((e,t)=>{f=(t+1)*20,e.style.transform=`rotate(${f}deg)`});const h=document.querySelector(".about-me"),q=document.querySelector(".techContain"),L=document.querySelector(".myProjects");u.addEventListener("click",e=>{if(m.forEach(e=>e.classList.remove("active")),e.target.classList.contains("dot")){let t=Number(e.target.dataset.value);0===t?(h.style.display="flex",q.style.display="none",L.style.display="none"):1===t?(h.style.display="none",q.style.display="flex",L.style.display="none"):2===t&&(h.style.display="none",q.style.display="none",L.style.display="flex")}});
//# sourceMappingURL=index.07689067.js.map
