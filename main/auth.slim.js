/*
* Code created by Junhao Zhang @coder100: repl.it/@coder100
*/
let Auth={append:function(e,t,a){let o=document.createElement("iframe");o.src="https://repl.it/auth_with_repl_site?domain="+location.host,o.style=t||{minHeight:"400px",boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",border:"solid 1px #888",borderRadius:"5px"},a&&(o.className=a),e?e.parentNode.insertBefore(o,e):document.body.appendChild(o)}};window.addEventListener("message",function(e){"auth_complete"!==e.data&&alert("An error occured. Data: "+e.data),location.reload()},!1);
