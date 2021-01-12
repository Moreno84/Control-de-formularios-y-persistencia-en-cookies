    //usuario
    let inputUsuario = document.forms["miFormulario"]["usuario"];
    //inputUsuario.onblur=validarUsuario
    inputUsuario.addEventListener("blur",validaUsuario,false);
    //Creamos las funcion
    function validaUsuario() {
    //Hacemos una expresion regular
    let pattr = new RegExp("^[A-z0-9]{2,25}$");
    let texto =inputUsuario.value;
    //Hacemos un test
    let correcto = pattr.test(texto);
    //Hacemos un if-else
    if (correcto) {//correcto
        document.getElementById("msg_usuario").innerHTML="Datos correcto!";
        document.getElementById("msg_usuario").style.color="green";     
    }else{//incorrecto 
        document.getElementById("msg_usuario").innerHTML="Datos incorrecto, Debe introducir entre 2 y 25 caracteres!";
        document.getElementById("msg_usuario").style.color="red";
    }
}
    //inputUsuario.onblur=muestraMensaje;
    inputUsuario.addEventListener("blur",muestraMensaje,false);
    function muestraMensaje(eventInfo){
    console.log("El usuario ha escrito la letra:"+eventInfo.keyCode);
    }
    inputUsuario.addEventListener("keydown",muestraMensaje,false);

    //Validar password y confirmar
    let form = document.forms["miFormulario"];
    let inputPass = form["password"];
    let inputConf = form["confirmaPassword"];
    //inputPass.onkeyup=validaPassword
    inputPass.addEventListener("keyup", validarPassword, false);
    inputConf.addEventListener("keyup", validarPassword, false);
    //Creamos las funciones validaPassword
    function validarPassword(){
    //Hacemos una expresion regular
    let pass = new RegExp("^[A-z0-9]{4,9}$");
    let password = inputPass.value;
    let confirmaPassword = inputConf.value;
    //Hacemos un test
    let correctoPass1 = pass.test(password);
    let correctoPass2 = pass.test(confirmaPassword);
    //Hacemos un if-else
    if (!correctoPass1 || !correctoPass2) {
        document.getElementById("incorrectPsw").style.display="inline";
        document.getElementById("incorrectPsw").innerHTML="Deben tener entre 4 y 9 caracteres";
        document.getElementById("incorrectPsw").style.color="red";
    }else{

        document.getElementById("incorrectPsw").style.display="none";
    }

    if(password !== confirmaPassword) {
        document.getElementById("noMatchPsw").style.display="inline";
        document.getElementById("noMatchPsw").innerHTML="Las contraseña no coinciden";
        document.getElementById("noMatchPsw").style.color="red";
    } else {
        document.getElementById("incorrectPsw").style.display="none";
        document.getElementById("noMatchPsw").style.display="none";
    }
    
    if ((correctoPass1 || correctoPass2) && (password === confirmaPassword)) {
        document.getElementById("Msg_correcto").innerHTML="Las contraseñas estan correctos";
        document.getElementById("Msg_correcto").style.color="green";
    }

}
    //Validar Email
    let inputEmail = document.forms["miFormulario"]["email"];
    //inputEmail.onblur=validaEmail
    inputEmail.addEventListener("keydown",validaEmail,false);
    //creramos la funcino validaEmail
    function validaEmail(){
    //Hacemos una expresion regular
    let email = new RegExp("^[A-z]{1,}[@]{1}[A-z]{1,}[.]{1}[A-z]{1,}$");
    //"^[A-z]+@\."
    let text = inputEmail.value;
    //Hacemos un match
    let correcto = text.match(email);
    if (correcto) {//correcto
        document.getElementById("msg_email").innerHTML="Email correcto!";
        document.getElementById("msg_email").style.color="green";
    }else{//incorrecto  
        document.getElementById("msg_email").innerHTML="Email Incorrecto";
        document.getElementById("msg_email").style.color="red";
        }
    }
        //inputEmail.onblur=muestraEmail;
        inputEmail.addEventListener("blur",muestraEmail,false);
        function muestraEmail(eventInfo){
        console.log("El usuario ha escrito la letra:"+eventInfo.keyCode);
        }
        inputEmail.addEventListener("keydown",muestraEmail,false);

    //Validar Dni
    let inputDni = document.forms["miFormulario"]["dni"];
    //inputEmail.onblur=validaDni
    inputDni.addEventListener("blur",validarDni,false);
    //Creamos la funcion validar Dni
    function validarDni(){
        let dni = /^\d{8}[a-zA-Z]$/;
        let textDni = inputDni.value;
        //Hacemos un match
        let correctoDni = textDni.match(dni);
        if (correctoDni) {//correcto
            document.getElementById("msg_dni").innerHTML="Dni correcto!";
            document.getElementById("msg_dni").style.color="green";
        }else{//incorrecto
            document.getElementById("msg_dni").innerHTML="Dni Inorrecto, Debe tener 8 numeros y una letra Mayuscula o Minuscula!"; 
            document.getElementById("msg_dni").style.color="red";   
    }
}
    //inputDni.onblur=muestraDni;
        inputDni.addEventListener("blur",muestraDni,false);
        function muestraDni(eventInfo){
        console.log("El usuario ha escrito el numero:"+eventInfo.keyCode);
        }
        inputDni.addEventListener("keydown",muestraDni,false);



    //Validar checkbox
    function validarCheckBox(){
        let condicionAcepta = document.forms["miFormulario"]["checkbox"].checked;

        if (condicionAcepta == true) {
            document.getElementById("msg_condicion").innerHTML="Ha aceptado las condiciones!";
            document.getElementById("msg_condicion").style.color="green";
            return false;
        }else{
            document.getElementById("msg_condicion").innerHTML="No ha aceptado las condiciones, Debe Aceptala!";
            document.getElementById("msg_condicion").style.color="red";
            return false;
        }
    }

    //Select multiple
        let select = document.forms["miFormulario"]["listado"];
        let arrayOpciones = select.options;
    //Validar select onkeydown
        select.addEventListener("keydown",validarSelect,false);
    //Creamos la funcion validarSelect
        function validarSelect(){
    let resultado =  document.getElementById("resultado");
    resultado.innerHTML="";
    let opciones = [];
    //Hacemos un bucle For aqui
        for (let k = 0; k < arrayOpciones.length; k++) {
            if (arrayOpciones[k].selected == true && opciones.length <2) {
                const grupos = arrayOpciones[k].text;
                opciones.push(grupos);
             
               resultado.innerHTML += grupos + " selected <br/>";
               resultado.style.color="green";
            }
        }     
    }

    //Validacion del formulario
    document.getElementById("btnRgto").addEventListener("click",registrarse,false);
    //Creamos la funcion
    function registrarse(){
        let formx = document.getElementById("form");
        if(formx.checkValidity()){
            //Realizo una alerta para confirma si el formulario se ha enviado
            alert("El formulario se ha enviado");//correcto
        }else{
            alert("El formulario no se ha enviado");//incorrecto
        }
    }

    //Añadir una nueva aficion

    function nuevaAficion(){
     let select = document.getElementById("listado");
     let nuevaAficion = document.getElementById("aficion").value;
     nuevaOption = document.createElement("OPTION");
     nuevaOptionAfi = document.createTextNode(nuevaAficion);

     nuevaOption.appendChild(nuevaOptionAfi);
     select.insertBefore(nuevaOption,select.lastChild);
    }


    //Guardar cookies

    /*
    A la hora de guardar las cookies no se me guardan todas pero lo he hecho como se tiene que hacer. aqui debajo esta todo mi codigo. a ver si me puede decir porque me falla en teoria esta bien. Muchas gracias.

    */

    function setCookie(cname,cvalue,exdays) {
        var d = new Date();
        d.setTime(d.getTime()+(exdays*24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0)
        return c.substring(name.length,c.length);
    }
        return "";
        }
        
            

    function guardarCookie(){
        let valorUsuar = document.getElementById("usuario").value;
        setCookie("cookieUsuar",valorUsuar,40);
    }

    function guardarCookie(){
        let valorPass = document.getElementById("password").value;
        setCookie("cookiePass",valorPass,40);
    }

    function guardarCookie(){
        let valorConfPass = document.getElementById("confirmarPassword").value;
        setCookie("cookieConfPass",valorConfPass,40);
    }

    function guardarCookie(){
        let valorEmail = document.getElementById("email").value;
        setCookie("cookieEmail",valorEmail,40);
    }

    function guardarCookie(){
        let valorDni = document.getElementById("dni").value;
        setCookie("cookieDni",valorDni,40);
    }

    function guardarCookie(){
        let valorCondici = document.getElementById("checkbox").value;
        setCookie("cookieCondicion",valorCondici,40);
    }

    //Recuperar cookies

    function recuperarCookie(){
        let valorCookie = getCookie("cookieUsuar","cookiePass","cookieConfPass","cookieEmail","cookieDni","cookieCondicion");
        window.alert("valor cookie " + valorCookie);

    }

    
        


