function cambiarMostaza(){
   document.getElementById("imagen").src= "../img/botasCT.jpg";
}

function cambiarNegro(){
   document.getElementById("imagen").src= "../img/botasCTnegras.jpg";
}

function anadirCarrito(){
   var color=document.getElementById("color").value;
   var talla=document.getElementById("talla").value;

   console.log=color+talla;

}