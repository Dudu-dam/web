function comprobarform(){
    var nomb=document.getElementById("nombre");
    var correo=document.getElementById("correo");
    var msn=document.getElementById("mensaje");
    if(!vacio(nomb)){
        if(!vacio(correo)){
            if(!vacio(msn)){
                
            }else{

            }
        }else{
            alert("Indica cual es tu correo.");
        }
    }else{
        alert("Indica cual es tu nombre.");
    }
}
function vacio(entrada){
    if(entrada.value!=""){
        return false;
    }
    return true;
}
function correoValido(entrada){
    var partes
    partes=entrada.value.split("@");
    if(partes.length==2){
        
    }
}