var nombre = document.getElementById("Nombre");
var nombre = document.getElementById("Apellido");
var email = document.getElementById("Email");
var email = document.getElementById("Telefono");
var email = document.getElementById("Alumno");
var error = document.getElementById("error");
error.style.color = "red";

function enviarFormulario(){
    console.log(Enviando);
    }

    var mensajesError = [ ]

    if (Nombre === ""){
        alert("Ingresa tu nombre");
        return false;
    }
    
    if (Apellido === ""){
        alert("Ingresa tu apellido");
        return false;
    }

    if (Email === ""){
        alert("Ingresa tu mail");
        return false;
    }

    if (Telefono === ""){
        alert("Ingresa tu numero de telefono");
        return false;
    }

    if (Alumno === ""){
        alert("Ingresa el nombre del alumno");
        return false;
    }

    if(mensajesError.length > 0){

        error.innerHTML = mensajesError.join(', ');
    
        return false;
    }