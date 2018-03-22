/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/




function Sumar () 
{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var preciototal;

    preciototal = precio1 + precio2 + precio3;
    alert("la suma de los precios es " + preciototal);
   
}

function Promedio () 

{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var promedio;
    var preciototal;

    preciototal = precio1 + precio2 + precio3;

    promedio = preciototal/3;
    alert("la promedio de los precios " + promedio);
}
function PrecioFinal () 
{
    var precio1 = parseInt(document.getElementById("PrecioUno").value);
    var precio2 = parseInt(document.getElementById("PrecioDos").value);
    var precio3 = parseInt(document.getElementById("PrecioTres").value);
    var promedio;
    var preciototal;

    preciototal = precio1 + precio2 + precio3;

    promedio = preciototal/3;

    alert("precio final "  + (promedio + (promedio * 0.21))); 
    


}
