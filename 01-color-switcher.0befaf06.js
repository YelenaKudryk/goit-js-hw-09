!function(){var t={startBtnEl:document.querySelector("[data-start]"),stopBtnEl:document.querySelector("[data-stop]"),bodyEl:document.querySelector("body")},n=null;e();function e(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.startBtnEl.disabled=n,t.stopBtnEl.disabled=e}function o(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtnEl.addEventListener("click",(function(){n=setInterval(o,1e3),e(!0,!1)})),t.stopBtnEl.addEventListener("click",(function(){clearInterval(n),e()}))}();
//# sourceMappingURL=01-color-switcher.0befaf06.js.map