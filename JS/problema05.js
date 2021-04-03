/*
Funciones para calcular el porcentaje de 
Hombres
Mujeres 
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function porcentajeSexos(){

    var Alumnos = document.formulario.cantidadAlumnos.value;
    var hombre = document.formulario.cantidadHombres.value;
    var mujer = document.formulario.cantidadMujeres.value;
    var porcentajeHombres = (hombre / Alumnos) * 100;
    var porcentajeMujeres = (mujer / Alumnos) * 100;
    
    document.formulario.porcentajeHomb.value = porcentajeHombres + "%";
    document.formulario.porcentajeMuj.value = porcentajeMujeres + "%";

}

function borrar(){

    document.formulario.cantidadAlumnos.value="";
    document.formulario.cantidadHombres.value="";
    document.formulario.cantidadMujeres.value="";
    document.formulario.porcentajeHomb.value="";
    document.formulario.porcentajeMuj.value="";

}