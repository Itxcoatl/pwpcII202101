(()=>{"use strict";console.log("Webpack working!!!"),((o="hola")=>{alert(o)})(),async function(){console.log("Calling an async function");const o=await new Promise((o=>{setTimeout((()=>{o("resolve")}),2e3)}));console.log(o)}()})();