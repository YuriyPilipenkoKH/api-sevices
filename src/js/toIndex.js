document.addEventListener("keypress", function (e) {
  // console.log('e.code',e.code);
    if(e.code === "Backquote" || e.code === "IntlBackslash"){
      window.location = './index.html'
     
    }
  })//IntlBackslash