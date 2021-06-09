
function  cambiarBlanco(){
    document.getElementById("imagen").src='../img/converseblanca.jpg';
  }

  function  cambiarNegro(){
    document.getElementById("imagen").src='../img/converse.jpg';
  }

  function anadirCarrito(){
    var color=document.getElementById("color").value;
    var talla=document.getElementById("talla").value;
    var precio=document.getElementById("precio").innerHTML;
    alert("Se ha añadido a tu cesta:\nDeportivas-Converse\n"+"Color: "+color+" - Talla: "+talla+"\nPrecio: "+precio);
    console.log(color+talla);
 
 }