
function  cambiarBlanco(){
    document.getElementById("imagen").src='../img/converseblanca.jpg';
  }

  function  cambiarNegro(){
    document.getElementById("imagen").src='../img/converse.jpg';
  }

  function anadirCarrito(){
    var color=document.getElementsByTagName("color").value;
    var talla=document.getElementByTagName("talla").value;
 
    console.log=color+talla;
 
 }