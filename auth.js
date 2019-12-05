/*
Code created by Junhao Zhang @coder100: repl.it/@coder100
*/
/*
var frame = document.createElement('iframe');
//frame.src = 'http://repl.it/auth_with_repl_site?domain=' + location.host;
frame.src = 'https://repl.it/auth_with_repl_site?domain=' + location.host;
frame.width = "100%";
frame.frameBorder = '0';
frame.style.minHeight = '400px';
frame.style.boxShadow = '3px 3px 10px rgba(0, 0, 0, 0.2)';
frame.style.border = 'solid 1px #888';
frame.style.borderRadius = '5px';

var selem = document.currentScript;

window.addEventListener("message", function(e) {
	console.log('message');
	if (!selem.attributes.authed) return;
	if (e.data !== 'auth_complete') return;

	eval(selem.attributes.authed.value);
}, false);

selem.parentNode.insertBefore(frame, selem);
*/
let auth = function(){
  if(arguments.length==0){
    this.cls = "";
    this.styling = {
      minHeight:"400px",
      boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",
      border:"solid 1px #888",
      borderRadius = "5px"
    }
  }elseif(arguments.length==1){
    this.cls = arguments[0]
  }elseif(arguments.length==2){
    this.cls = arguments[0]
    this.styling = arguments[1]
  }
  else{
    console.error("REPL.IT AUTH ERROR: Too many arguments put in.")
  }
}
auth.prototype.append = function(elem, before){
  //elem.
}
