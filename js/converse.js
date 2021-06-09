
function  cambiarBlanco(){
    document.getElementById("imagen").src='../img/converseblanca.jpg';
  }

  function  cambiarNegro(){
    document.getElementById("imagen").src='../img/converse.jpg';
  }

  function anadirCarrito(){
    var color=document.getElementById("color").value;
    var talla=document.getElementById("talla").value;
 
    console.log=color+talla;
 
 }