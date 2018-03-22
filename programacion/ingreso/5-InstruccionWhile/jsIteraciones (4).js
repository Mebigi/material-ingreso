function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	//parseInt  si no pongo numero devuelte NaN
	// isNaN pregunta si no es un numero, si es un numero da falso.

while (numero > 10 || numero < 0 || isNaN(numero) )
		//ojo no usar if porque este no se repite, la condicion no se repite.
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		//chequerear de combiar el valor de la clave una vez que la valido
		
	}

	//alert("numero correcto!!")
	document.getElementById("Numero").value = numero;

	

}//FIN DE LA FUNCIÓN