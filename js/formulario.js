function comprobarForm(){
    var nomb=document.getElementById("nombre");
    var correo=document.getElementById("correo");
    var msn=document.getElementById("mensaje");
    if(!vacio(nomb)){
        if(!vacio(correo)){
            if(correoValido(correo)){
                if(vacio(msn)){
                    alert("Escriba un mensaje.");
                }else{
                     alert("Su mensaje se ha enviado correctamente.");
                }               
            }else{
                alert("El correo no es válido.");
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
    var partespunto;
    var partesarroba;
    partesarroba=entrada.value.split("@");
    partespunto=entrada.value.split(".");
    
    if(partesarroba.length==2){
        if(partespunto.length==2){
            if(partespunto[1]== "es" || partespunto[1]=="com"){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}