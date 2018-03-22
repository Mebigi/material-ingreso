function Mostrar()
{
//pido el datos
var clave = prompt("ingrese el número clave.");
//cnacelar  en un prompt devuelve null cuando no pongo nada.

//valido el dato

	while (!( clave == "utn750")
		//ojo no usar if porque este no se repite, la condicion no se repite.
	{
		clave = prompt("Clave  incorrecta. Reingrese:");
		//chequerear de combiar el valor de la clave una vez que la valido
		
	}

	alert("clave correcta!!")


}//FIN DE LA FUNCIÓN
