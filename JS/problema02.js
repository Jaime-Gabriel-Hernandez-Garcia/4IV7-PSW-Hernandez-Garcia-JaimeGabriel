/*
Creacion de la funcion para sumar las
ventas mas el sueldo base
*/

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function TotalGanado(){

   var Sueldo = document.formulario.cantidadBase.value;
   var porcentaje01 = document.formulario.cantidadVenta01.value;
   var porcentaje02 = document.formulario.cantidadVenta02.value;
   var porcentaje03 = document.formulario.cantidadVenta03.value;
   var venta01 = porcentaje01 * 0.10;
   var venta02 = porcentaje02 * 0.10;
   var venta03 = porcentaje03 * 0.10;
   var totalCom = venta01 + venta02 + venta03;
   var resultado = (Sueldo +++ totalCom); 

   var total = resultado
   document.formulario.Total.value = "$" + total;
}

function borrar(){

    document.formulario.cantidadBase.value="";
    document.formulario.cantidadVenta01.value="";
    document.formulario.cantidadVenta02.value="";
    document.formulario.cantidadVenta03.value="";
    document.formulario.Total.value="";
}