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
      borderRadius: "5px"
    }
    this.ondone = "location.reload()";
  }else if(arguments.length==1){
    this.cls = arguments[0]
    this.styling = {
      minHeight:"400px",
      boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",
      border:"solid 1px #888",
      borderRadius: "5px"
    }
    this.ondone = "location.reload()"
  }else if(arguments.length==2){
    this.cls = arguments[0]
    this.styling = arguments[1]
    this.ondone = "location.reload()"
  }
  else if(arguments.length==3){
    this.cls = arguments[0]
    this.styling = arguments[1]
    this.ondone = arguments[2]
  }else{
    console.error("REPL.IT AUTH ERROR: Too many arguments put in.")
  }
  let element = document.createElement('iframe')
  element.src = 'https://repl.it/auth_with_repl_site?domain=' + location.host
  element.style = this.styling
  if(this.cls) element.cls = this.cls
  this.element = element
}
auth.prototype.append = function(elem){
  if(elem){
    elem.parentNode.insertBefore(this.element, elem)
  }else{
    document.body.appendChild(this.element)
  }
  window.addEventListener("message", function(e) {
    eval(this.ondone)
  }, false)
  return true
}
auth.prototype.get = function(name){
  return this.element[name]
}
auth.prototype.getElement = function(){
  return this.element
}
auth.prototype.set = function(name,value){
  this.element[name] = value
  return this
}
