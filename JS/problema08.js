/*
Funcion para comparar numeros
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function compararNumeros(){

    var num1 = document.formulario.numero1.value;
    var num2 = document.formulario.numero2.value;
    var num3 = document.formulario.numero3.value;

    if (num1 > num2){
        document.formulario.numMayor.value = num1; 
        if (num1 > num3){
            document.formulario.numMayor.value = num1; 
        }
    }

    if (num2 > num1){
        document.formulario.numMayor.value = num2;
        if (num2 > num3){
            document.formulario.numMayor.value = num2;
        }
    }

    
    if (num3 > num1){
        document.formulario.numMayor.value = num3;
        if (num3 > num2){
            document.formulario.numMayor.value = num3;
        }
    }
}

function borrar(){

    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.numero3.value="";
    document.formulario.numMayor.value="";

}