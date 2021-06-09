function cambiarMostaza(){
   document.getElementById("imagen").src= "../img/botasCT.jpg";
}

function cambiarNegro(){
   document.getElementById("imagen").src= "../img/botasCTnegras.jpg";
}

function anadirCarrito(){
   var color=document.getElementById("color").value;
   var talla=document.getElementById("talla").value;
   var precio=document.getElementById("precio").innerHTML;
   alert("Se ha añadido a tu cesta:\nBotas-Coronel Tapioca\n"+"Color: "+color+" - Talla: "+talla+"\nPrecio: "+precio);
   console.log(color+talla);

}
function verCarrito(){
   
}