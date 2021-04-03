/*
Funcion para calcular le edad
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calculoEdad(){

    var añoN = document.formulario.añoNacer.value;
    var añoA = document.formulario.añoActual.value;
    var edad =  añoN - añoA;

    document.formulario.EdadTotal.value = edad + "años";

}

function borrar(){

    document.formulario.añoNacer.value="";
    document.formulario.añoActual.value="";
    document.formulario.EdadTotal.value="";

}