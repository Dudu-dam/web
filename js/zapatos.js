var text="";
var total=0;
var productos;

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
    var tipo=document.getElementById("tipo").innerHTML;
    alert("Se ha añadido a tu cesta:\n"+tipo+"\nColor: "+color+" - Talla: "+talla+"\nPrecio: "+precio);
    console.log(color+talla);
    contador(tipo+" "+color+" "+talla+" "+precio);
    contarTotal(precio)

 }
function contador(entrada){
    text=text+entrada+"\n";
    return text;
}
function contarTotal(entrada){
  var precio=entrada.split(" ");
  total+=parseFloat(total)+parseFloat(precio[0]);
}

function verCarrito(){
    alert("Tu carrito tiene:\n"+text+"\nTOTAL: "+total+" €");
 }