/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    temparatura = parseFloat(document.getElementById("Temperatura").value);
    var c = (temparatura - 32) /1.8;
    alert("temperatura en c " + c );
}

function CentigradosFahrenheit () 
{

    temparatura = parseFloat(document.getElementById("Temperatura").value);
    var f = (temparatura * 1.8) + 32;
    alert("temperatura en f " + f);
	
}
