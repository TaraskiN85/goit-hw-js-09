const t=document.querySelector(".body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");r.setAttribute("disabled",!0);let d,a;e.addEventListener("click",(()=>{a=setInterval((()=>{d=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.style.backgroundColor=`${d}`}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(()=>{clearInterval(a),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.6e5fcaf2.js.map
