let e;const t=document.querySelector(".clickHold"),o=document.querySelector(".intro-section"),l=document.querySelector(".hold"),s=document.querySelector(".box"),a=document.querySelector(".cursor"),r=document.querySelector(".noise-container"),n=document.querySelector(".intro");document.querySelector(".intro-name");const c=document.querySelector(".intro-bar"),d=document.querySelectorAll(".move"),i=document.querySelector(".portfolio");document.querySelector(".sub-sections"),document.querySelector(".about"),document.querySelector(".tech-stack");const u=document.querySelector(".slides");document.querySelector(".contents");const y=document.querySelectorAll(".dot"),m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",p=Array.from(d).map(e=>({posX:e.offsetLeft,posY:e.offsetTop}));r.addEventListener("mousemove",e=>{let t=e.clientX,o=e.clientY;a.style.left=`${t}px`,a.style.top=`${o}px`,d.forEach((e,l)=>{let{posX:s,posY:a}=p[l];e.style.transform=`translate(${(t-(s+50))*.07}px, ${(o-(a+50))*.07}px)`})});const f=e=>{e.classList.add("appear");let o=0,l=setInterval(()=>{e.innerText=e.dataset.value.split("").map((t,l)=>l<o?e.dataset.value[l]:m[Math.floor(Math.random()*m.length)]).join(""),o>=e.dataset.value.length&&(clearInterval(l),"JOMARI BORINES"!==e.dataset.value&&setTimeout(()=>{e.dataset.value="JOMARI BORINES",setTimeout(()=>{t.classList.add("appear"),f(e)},1e3)},2e3)),o+=1/3},50);PowerGlitch.glitch(".glitch",{playMode:"always",createContainers:!0,hideOverflow:!1,timing:{duration:3e3},glitchTimeSpan:{start:.5,end:.7},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:{count:4,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1})};PowerGlitch.glitch(".glitch1",{timing:{duration:5e3}}),PowerGlitch.glitch(".glitch2",{timing:{duration:7e3}}),PowerGlitch.glitch(".glitch3",{timing:{duration:2e3}}),setTimeout(()=>{let e=0,t=setInterval(()=>{e>=c.dataset.value&&(clearInterval(t),setTimeout(()=>{n.classList.add("appear"),f(n)},1e3)),e++,c.style.width=`${e}px`},10)},1500);let h=!1;document.addEventListener("mousedown",()=>{t.classList.remove("appear"),s.classList.add("loading"),l.classList.add("appear"),e=setTimeout(()=>{h=!0,o.style.display="none",i.style.display="flex"},3020)}),document.addEventListener("touchstart",()=>{t.classList.remove("appear"),s.classList.add("loading"),l.classList.add("appear"),e=setTimeout(()=>{h=!0,o.style.display="none",i.style.display="flex"},3020)}),document.addEventListener("mouseup",()=>{clearTimeout(e),h||(t.classList.add("appear"),l.classList.remove("appear"),s.classList.remove("loading")),h=!1}),document.addEventListener("touchend",()=>{clearTimeout(e),h||(t.classList.add("appear"),l.classList.remove("appear"),s.classList.remove("loading")),h=!1});const v=document.querySelectorAll(".boxCopy");s.addEventListener("mouseenter",()=>{v.forEach(e=>{e.style.transform="rotate(0deg)"})}),s.addEventListener("mouseleave",()=>{let e=0;v.forEach((t,o)=>{e=(o+1)*20,t.style.transform=`rotate(${e}deg)`})});let g=0;v.forEach((e,t)=>{g=(t+1)*20,e.style.transform=`rotate(${g}deg)`});const S=document.querySelector(".about-me"),L=document.querySelector(".techContain"),q=document.querySelector(".myProjects"),E=document.querySelector(".contact-me"),x=document.querySelectorAll(".linebar"),b=document.querySelectorAll(".topic-text");u.addEventListener("click",e=>{if(y.forEach(e=>e.classList.remove("active")),x.forEach((e,t)=>{e.style.width="2rem",e.style.backgroundColor="#848484",b[t].style.color="#848484"}),e.target.classList.contains("dot")){let t=Number(e.target.dataset.value);e.target.classList.add("active"),0===t?(S.style.display="flex",L.style.display="none",q.style.display="none",E.style.display="none",x[0].style.width="4rem",x[0].style.backgroundColor="#fff",b[0].style.color="#fff"):1===t?(S.style.display="none",L.style.display="flex",q.style.display="none",E.style.display="none",x[1].style.width="4rem",x[1].style.backgroundColor="#fff",b[1].style.color="#fff"):2===t?(S.style.display="none",L.style.display="none",q.style.display="flex",E.style.display="none",x[2].style.width="4rem",x[2].style.backgroundColor="#fff",b[2].style.color="#fff"):3===t&&(S.style.display="none",L.style.display="none",q.style.display="none",E.style.display="flex",x[3].style.width="4rem",x[3].style.backgroundColor="#fff",b[3].style.color="#fff")}});const w=document.querySelector(".contact-container");w.addEventListener("click",e=>{e.preventDefault(),w.reset()});const T=document.querySelector("audio"),k=document.querySelector(".play-button");let C=!1;k.addEventListener("click",()=>{C?(T.muted=!0,C=!1,k.textContent="Unmute Music"):(T.muted=!1,C=!0,k.textContent="Mute Music",T.play().catch(e=>{console.error("Audio play failed:",e)}))});
//# sourceMappingURL=index.17bd8067.js.map
