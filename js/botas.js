function cambiarMostaza(){
   document.getElementById("imagen").src= "../img/botasCT.jpg";
}

function cambiarNegro(){
   document.getElementById("imagen").src= "../img/botasCTnegras.jpg";
}

function anadirCarrito(){
   var color=document.getElementsByTagName("color").value;
   var talla=document.getElementsByTagName("talla").value;

   console.log=color+talla;

}