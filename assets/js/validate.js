window.onscroll = function() {
    scrollFunction();
}
textarea.onscroll = function(){
    scrollFunctionTextarea();
}
  
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
    } else {
      document.getElementById("scrollToTop").style.display = "none";
    }
}
  
//Seu JavaScript de validação aqui