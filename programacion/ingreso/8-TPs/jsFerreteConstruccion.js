/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var perimetro;

    if (isNaN(largo) || isNaN(ancho) || largo== "" || ancho== "" )
    {

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    }
    else {
        perimetro = (2*largo) + (2*ancho);

        alert("cantidad de alambre necesario es: " + perimetro*3 + " metros");

    }

    

    

}
function Circulo () 
{
	var radio = parseInt(document.getElementById("Radio").value);
    
    var perimetro;

    perimetro = 2 * radio * 3.14

    alert("cantidad de alambre necesario es: " + perimetro*3 + " metros");
}
function Materiales () 
{

    var largo = parseInt(document.getElementById("Largo").value);
    var ancho = parseInt(document.getElementById("Ancho").value);
    var area;

    area = largo*ancho;
  
    alert("cantidad de cemento necesario es: " + area*3 + " bolsas");
    alert("cantidad de cal necesario es: " + area*2 + " bolsas");
	
}