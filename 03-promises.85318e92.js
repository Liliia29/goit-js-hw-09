!function(){function e(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var n=document.querySelector("form"),o=n.querySelector('[name="amount"]'),t=n.querySelector('[name="delay"]'),a=n.querySelector('[name="step"]');n.addEventListener("submit",(function(n){n.preventDefault();for(var c=parseInt(o.value),r=parseInt(t.value),i=parseInt(a.value),u=1;u<=c;u++)e(u,r+(u-1)*i).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}))}();
//# sourceMappingURL=03-promises.85318e92.js.map
