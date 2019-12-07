let Auth = {
  append: function(elem,styl,clas){
    let element = document.createElement('iframe')
    element.src = 'https://repl.it/auth_with_repl_site?domain=' + location.host
    if(styl) element.style = styl
    else{element.style = {
      minHeight:"400px",
      boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.2)",
      border:"solid 1px #888",
      borderRadius: "5px"
    }}
    if(clas) element.className = clas
    if(elem){
      elem.parentNode.insertBefore(element, elem)
    }else{
      document.body.appendChild(element)
    }
  }
};
window.addEventListener("message", function(e) {
  if (e.data !== 'auth_complete'){
    alert("An error occured. Data: "+e.data);
  }
  location.reload()
}, false)
