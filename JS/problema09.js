/* 
Funcion que sirve para calcular las 
hrs extras trabajadas.
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcularSueldo(){

    var pago = document.formulario.pagohrs.value;
    var hrsTra = document.formulario.numerohrs.value;
    var hrsExtra = hrsTra - 40;
    var hrsExtra3 = (hrsExtra * pago) * 3;
    var pagoNormal = pago * 40;
    var pagototal_triple = pagoNormal +++ hrsExtra3 +++ 0;

    if (hrsExtra > 8){
        var hrsExtra2 = (hrsExtra * pago) * 2;
        var pagototal = pagoNormal +++ hrsExtra2 - 1;
        document.formulario.sueldo.value = "$" + pagototal;
    }  
    if (hrsExtra > 16){
        var hrsExtra3 = (hrsExtra * pago) * 3;
        var pagototal = pagoNormal +++ hrsExtra3 - 2;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 24){
        var hrsExtra4 = (hrsExtra * pago) * 4;
        var pagototal = pagoNormal +++ hrsExtra4 - 3;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 32){
        var hrsExtra5 = (hrsExtra * pago) * 5;
        var pagototal = pagoNormal +++ hrsExtra5 - 4;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 40){
        var hrsExtra6 = (hrsExtra * pago) * 6;
        var pagototal = pagoNormal +++ hrsExtra6 - 5;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 48){
        var hrsExtra7 = (hrsExtra * pago) * 7;
        var pagototal = pagoNormal +++ hrsExtra7 - 6;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 56){
        var hrsExtra7 = (hrsExtra * pago) * 7;
        var pagototal = pagoNormal +++ hrsExtra7 - 6;
        document.formulario.sueldo.value = "$" + pagototal;
    }
    if (hrsExtra > 64){
        var hrsExtra8 = (hrsExtra * pago) * 8;
        var pagototal = pagoNormal +++ hrsExtra8 - 7;
        document.formulario.sueldo.value = "$" + pagototal;
    }

}

function borrar(){

    document.formulario.pagohrs.value="";
    document.formulario.numerohrs.value="";
    document.formulario.sueldo.value="";

}