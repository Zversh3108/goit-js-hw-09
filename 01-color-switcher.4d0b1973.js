const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(function(){d=setInterval((()=>{let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=e}),800),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,t.disabled=!0})),t.disabled=!0;
//# sourceMappingURL=01-color-switcher.4d0b1973.js.map
