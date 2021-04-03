/*
Funcion que servira para calcular el descuento de la 
compra del cliente.
*/ 

function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}


function TotalDescuento(){

    var valor = document.formulario.cantidadpagar.value;
    var descuento = valor *0.15;
    var total =  valor - descuento ;

    document.formulario.cantidadDesc.value = "$" + total;
}

function borrar(){

    document.formulario.cantidadpagar.value="";
    document.formulario.cantidadDesc.value="";
} 