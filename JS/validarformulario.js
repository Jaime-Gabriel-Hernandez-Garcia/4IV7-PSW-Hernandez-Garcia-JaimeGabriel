/*


*/
function validar(formulario){
    //obtener los valores del formulario
    if(formulario.nombre.value.length < 5){
        alert("Escribe mas de 5 caracteres ")
        formulario.nombre.focus();
    return false;
    }

    //Crear opcion de solo ingresar letras en Nombre:

    var checkOK = "qwertyuiopññlkjhgfdsazxcvbnm" + 
    "QwERTYUIOPÑLKJHGFDSAZXCVBNM";

    var checkStr = formulario.nombre.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break
        }
    }

    if(!allvalid){
        alert("Escribe solo numeros  en el campo edad")
        formulario.edad.focus();
        break;
    }
     
    var checkOK = "123456789";

    var checkStr = formulario.edad.value;

    var allvalid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++)
        if(ch == checkOK.charAt(j))
            break;
        if(j == checkOK.length){
            allvalid = false;
            break
        }
    }

    var txt = formulario.Email.value;

    var b = /^[^\s@] + @[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?"":" no ") + "valido");

    return b.test(txt);
    

}