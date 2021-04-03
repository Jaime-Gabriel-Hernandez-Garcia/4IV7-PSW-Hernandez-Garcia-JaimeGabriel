/*
Funcion que permite realizar las operaciones
necesarias.
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcularNumeros(){

    var num1 = document.formulario.numero1.value;
    var num2 = document.formulario.numero2.value;
    var resultado1 = num1 * num2;
    var resultado2 = num1 - num2;
    var resultado3 = num1 +++ num2 +++ 0;
 
    if (num1 == num2){
        document.formulario.calculoRes.value = resultado1;
    }
    

    if (num1 > num2){
        document.formulario.calculoRes.value = resultado2;
    }

    
    if (num1 < num2){
        document.formulario.calculoRes.value = resultado3;
    }

}

function borrar(){

    document.formulario.numero1.value="";
    document.formulario.numero2.value="";
    document.formulario.calculoRes.value="";

}