/*
Funcion parea calcular las calificaciones de 
un alumno:
55% calificaciones
30% examen
15% proyecto
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function TotalCalificacion(){

    var calif1 = document.formulario.calificacion1.value;
    var calif2 = document.formulario.calificacion2.value;
    var calif3 = document.formulario.calificacion3.value;
    var califFinal0 = calif1 +++ calif2 +++ 0;
    var califFinal1 = califFinal0 +++ calif3 +++ 0;
    var porcentajeParciales = (califFinal1 * 55) / 30;

    document.formulario.porCalif.value = porcentajeParciales + "%";





    var califExam = document.formulario.calificacionExamen.value;
    var total1 = (califExam * 30) / 10;

    document.formulario.porcExam.value = total1 + "%";





    var califProyecto = document.formulario.calificacionProyecto.value;
    var total2 = (califProyecto * 15) / 10;

    document.formulario.porcProy.value = total2 + "%";

 

    var total = porcentajeParciales + total1 + total2;

    document.formulario.califFinal.value = total;

}

function borrar(){

    document.formulario.calificacion1.value="";
    document.formulario.calificacion2.value="";
    document.formulario.calificacion3.value="";
    document.formulario.calificacionExamen.value="";
    document.formulario.calificacionProyecto.value="";
    document.formulario.porCalif.value="";
    document.formulario.porcExam.value="";
    document.formulario.porcProy.value="";

}

