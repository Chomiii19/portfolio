let e,t;const l=document.querySelector(".clickHold"),o=document.querySelector(".intro-section"),a=document.querySelector(".hold"),s=document.querySelector(".box"),r=document.querySelector(".cursor"),c=document.querySelector(".noise-container"),n=document.querySelector(".intro");document.querySelector(".intro-name");const i=document.querySelector(".intro-bar"),d=document.querySelectorAll(".move"),u=document.querySelector(".portfolio");document.querySelector(".sub-sections"),document.querySelector(".about"),document.querySelector(".tech-stack");const y=document.querySelector(".slides");document.querySelector(".contents");const m=document.querySelectorAll(".dot"),p="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let h=!1;const f=Array.from(d).map(e=>({width:parseFloat(getComputedStyle(e).width),height:parseFloat(getComputedStyle(e).height)})),v=Array.from(d).map(e=>({width:.8*parseFloat(getComputedStyle(e).width),height:.8*parseFloat(getComputedStyle(e).height)})),g=()=>{d.forEach((e,t)=>{e.style.width=`${v[t].width}px`,e.style.height=`${v[t].height}px`}),t=setInterval(()=>{d.forEach((e,t)=>{let{posX:l,posY:o}=L[t],a=(r.clientX-(l+50))*.07,s=(r.clientY-(o+50))*.07;e.style.transform=`translate(${a}px, ${s}px)`})},100)},S=()=>{d.forEach((e,t)=>{e.style.width=`${f[t].width}px`,e.style.height=`${f[t].height}px`})},L=Array.from(d).map(e=>({posX:e.offsetLeft,posY:e.offsetTop}));c.addEventListener("mousemove",e=>{let t=e.clientX,l=e.clientY;r.style.left=`${t}px`,r.style.top=`${l}px`,d.forEach((e,o)=>{let{posX:a,posY:s}=L[o];e.style.transform=` translate(${(t-(a+50))*.07}px, ${(l-(s+50))*.07}px)`})});const q=e=>{e.classList.add("appear");let t=0,o=setInterval(()=>{e.innerText=e.dataset.value.split("").map((l,o)=>o<t?e.dataset.value[o]:p[Math.floor(Math.random()*p.length)]).join(""),t>=e.dataset.value.length&&(clearInterval(o),"JOMARI BORINES"!==e.dataset.value&&setTimeout(()=>{e.dataset.value="JOMARI BORINES",setTimeout(()=>{l.classList.add("appear"),q(e)},1e3)},2e3)),t+=1/3},50);PowerGlitch.glitch(".glitch",{playMode:"always",createContainers:!0,hideOverflow:!1,timing:{duration:3e3},glitchTimeSpan:{start:.5,end:.7},shake:{velocity:15,amplitudeX:.2,amplitudeY:.2},slice:{count:4,velocity:15,minHeight:.02,maxHeight:.15,hueRotate:!0},pulse:!1})};PowerGlitch.glitch(".glitch1",{timing:{duration:5e3}}),PowerGlitch.glitch(".glitch2",{timing:{duration:7e3}}),PowerGlitch.glitch(".glitch3",{timing:{duration:2e3}}),setTimeout(()=>{let e=0,t=setInterval(()=>{e>=i.dataset.value&&(clearInterval(t),setTimeout(()=>{n.classList.add("appear"),q(n)},1e3)),e++,i.style.width=`${e}px`},10)},1500),document.addEventListener("mousedown",()=>{l.classList.remove("appear"),s.classList.add("loading"),a.classList.add("appear"),g(),e=setTimeout(()=>{h=!0,o.style.display="none",u.style.display="flex"},3020)}),document.addEventListener("touchstart",()=>{l.classList.remove("appear"),s.classList.add("loading"),a.classList.add("appear"),g(),e=setTimeout(()=>{h=!0,o.style.display="none",u.style.display="flex"},3020)}),document.addEventListener("mouseup",()=>{clearTimeout(e),clearInterval(t),S(),h||(l.classList.add("appear"),a.classList.remove("appear"),s.classList.remove("loading")),h=!1}),document.addEventListener("touchend",()=>{clearInterval(t),clearTimeout(e),S(),h||(l.classList.add("appear"),a.classList.remove("appear"),s.classList.remove("loading")),h=!1});const E=document.querySelectorAll(".boxCopy");s.addEventListener("mouseenter",()=>{E.forEach(e=>{e.style.transform="rotate(0deg)"})}),s.addEventListener("mouseleave",()=>{let e=0;E.forEach((t,l)=>{e=(l+1)*20,t.style.transform=`rotate(${e}deg)`})});let x=0;E.forEach((e,t)=>{x=(t+1)*20,e.style.transform=`rotate(${x}deg)`});const w=document.querySelector(".about-me"),b=document.querySelector(".techContain"),$=document.querySelector(".myProjects"),A=document.querySelector(".contact-me"),C=document.querySelectorAll(".linebar"),I=document.querySelectorAll(".topic-text");y.addEventListener("click",e=>{if(m.forEach(e=>e.classList.remove("active")),C.forEach((e,t)=>{e.style.width="2rem",e.style.backgroundColor="#848484",I[t].style.color="#848484"}),e.target.classList.contains("dot")){let t=Number(e.target.dataset.value);e.target.classList.add("active"),0===t?(w.style.display="flex",b.style.display="none",$.style.display="none",A.style.display="none",C[0].style.width="4rem",C[0].style.backgroundColor="#fff",I[0].style.color="#fff"):1===t?(w.style.display="none",b.style.display="flex",$.style.display="none",A.style.display="none",C[1].style.width="4rem",C[1].style.backgroundColor="#fff",I[1].style.color="#fff"):2===t?(w.style.display="none",b.style.display="none",$.style.display="flex",A.style.display="none",C[2].style.width="4rem",C[2].style.backgroundColor="#fff",I[2].style.color="#fff"):3===t&&(w.style.display="none",b.style.display="none",$.style.display="none",A.style.display="flex",C[3].style.width="4rem",C[3].style.backgroundColor="#fff",I[3].style.color="#fff")}});const T=document.querySelector(".contact-container");T.addEventListener("click",e=>{e.preventDefault(),T.reset()});const k=document.querySelector("audio"),M=document.querySelector(".soundWave"),O=document.querySelector(".play-button"),P=document.querySelectorAll(".bar");let R=!0;M.addEventListener("click",()=>{k.play().catch(e=>{console.error("Audio play failed:",e)}),O.style.display="none",R?(P.forEach((e,t)=>{e.classList.add(`active${t}`),e.style.display="inline"}),k.muted=!1,R=!1):(k.muted=!0,P.forEach((e,t)=>{e.classList.remove("mute"),e.classList.remove(`active${t}`)}),R=!0)});
//# sourceMappingURL=index.cbebe6f1.js.map
