/*
Funcion para calcular utilidad
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcularUtilidad(){

    var MesesTra = document.formulario.añosTrabajados.value;
    var sueldoMen = document.formulario.sueldoMensual.value;
    var utilidad = sueldoMen * .05;
    var utilidad1 = sueldoMen * .07;
    var utilidad2 = sueldoMen * .10;
    var utilidad3 = sueldoMen * .15;
    var utilidad4 = sueldoMen * .20;

    if (0 < MesesTra < 12){
        var utilidadT =  utilidad * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (MesesTra == 12){
        var utilidadT =  utilidad1 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (12 < MesesTra < 24){
        var utilidadT =  utilidad1 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (MesesTra == 24){
        var utilidadT =  utilidad2 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (24 < MesesTra < 60){
        var utilidadT =  utilidad2 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (MesesTra == 60){
        var utilidadT =  utilidad3 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (60 < MesesTra < 120){
        var utilidadT =  utilidad3 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (MesesTra == 120){
        var utilidadT =  utilidad4 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
    if (MesesTra > 120){
        var utilidadT =  utilidad4 * 12;
        document.formulario.utilidad.value = "$" + utilidadT;
    }
}

function borrar(){

    document.formulario.añosTrabajados.value="";
    document.formulario.sueldoMensual.value="";
    document.formulario.utilidad.value="";

}