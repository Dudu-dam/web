var text="";
var total=0;
var productos=0;

function  cambiarBlanco(){
    document.getElementById("imagen").src='../img/converseblanca.jpg';
}

function  cambiarNegroConverse(){
    document.getElementById("imagen").src='../img/converse.jpg';
  }
function cambiarMostaza(){
  document.getElementById("imagen").src='../img/botasCT.jpg';
}
function cambiarNegroBota(){
  document.getElementById("imagen").src='../img/botasCTnegras.jpg';
}

  function anadirCarrito(){
    var color=document.getElementById("color").value;
    var talla=document.getElementById("talla").value;
    var precio=document.getElementById("precio").innerHTML;
    var tipo=document.getElementById("tipo").innerHTML;
    var cant=document.getElementById("cantidad");
    alert("Se ha añadido a tu cesta:\n"+tipo+"\nColor: "+color+" - Talla: "+talla+"\nPrecio: "+precio);
    console.log(color+talla);
    contador(tipo+" "+color+" "+talla+" "+precio);
    contarTotal(precio);
    cant.innerHTML=productos+"";
    cant.style.background="red";
 }

function contador(entrada){
    text=text+entrada+"\n";
    productos=parseInt(productos)+1;
    return text;
}
function contarTotal(entrada){
  var precio=entrada.split(" ");
  total+=parseFloat(total)+parseFloat(precio[0]);
}

function verCarrito(){
    alert("Tu carrito tiene:\n"+text+"\nTOTAL: "+total+" €");
 }