function e(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const o=document.querySelector("form"),t=o.querySelector('[name="amount"]'),n=o.querySelector('[name="delay"]'),l=o.querySelector('[name="step"]');o.addEventListener("submit",(o=>{o.preventDefault();const r=parseInt(t.value),a=parseInt(n.value),s=parseInt(l.value);for(let o=1;o<=r;o++)e(o,a+(o-1)*s).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.85b33f93.js.map