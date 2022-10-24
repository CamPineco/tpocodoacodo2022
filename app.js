function validar(){
    
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;

    if (nombre == null || nombre.length == 0){
            //alert('este campo esta vacio')
        console.log('campo vacio debe completar Nombre');
        document.getElementById('errornombre').innerHTML="campo vacio debe completar Nombre/s"; 
        nombre.focus();      
        return false;
    } 
    if (apellido == null || apellido.length == 0){
        //alert('este campo esta vacio')
    console.log('campo vacio debe completar Apellido');
    document.getElementById('errorapellido').innerHTML="campo vacio debe completar Apellido/s"; 
    apellido.focus();
    return false;     

    } 

    mail = document.getElementById("mail").value;
            
              
    if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(mail)))
    {
        document.getElementById('errormail').innerHTML = "No es una direccion de email correcta" ;
        
        mail = document.getElementById('mail');
        mail.value = '';
        mail.focus();
        return false;
    
    }


    opciones = document.getElementsByName("option");

    var seleccionado = false;
    for(var i=0; i < opciones.length; i++) 
    {
        if(opciones[i].checked) 
        {
            seleccionado = true;
            break;
        }
    }

    if(!seleccionado) 
    {
        document.getElementById('errorradio').innerHTML = "Debe seleccionar una Opcion" ;
        return false;
    }

        document.getElementById('errorapellido').innerHTML=""; 
        document.getElementById('errornombre').innerHTML=""; 
        return true;
}

