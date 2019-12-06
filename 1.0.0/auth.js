/*
Code created by Junhao Zhang @coder100: repl.it/@coder100
*/
let auth = function(){
  if(arguments.length==0){
    this.cls = false;
    this.styling = {
      minHeight:"400px",
      boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",
      border:"solid 1px #888",
      borderRadius = "5px"
    }
    this.ondone = "location.reload()";
  }elseif(arguments.length==1){
    this.cls = arguments[0]
    this.styling = {
      minHeight:"400px",
      boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",
      border:"solid 1px #888",
      borderRadius = "5px"
    }
    this.ondone = "location.reload()"
  }elseif(arguments.length==2){
    this.cls = arguments[0]
    this.styling = arguments[1]
    this.ondone = "location.reload()"
  }
  elseif(arguments.length==3){
    this.cls = arguments[0]
    this.styling = arguments[1]
    this.ondone = arguments[2]
  }else{
    console.error("REPL.IT AUTH ERROR: Too many arguments put in.")
  }
}
auth.prototype.append = function(elem){
  let element = document.createElement('iframe')
  element.src = 'https://repl.it/auth_with_repl_site?domain=' + location.host
  element.style = this.styling
  if(this.cls) element.cls = this.cls
  elem.parentNode.insertBefore(element, elem)
  window.addEventListener("message", function(e) {
    eval(this.ondone)
  }, false)
  this.elem = element
}
auth.prototype.get = function(){
  return this.elem
}
