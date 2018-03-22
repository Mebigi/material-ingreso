function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toLowerCase();

while ((sexo != "f") && (sexo != "m"))

		//ojo no usar if porque este no se repite, la condicion no se repite.
	{
		sexo = prompt("ingrese f ó m .");
		//chequerear de combiar el valor de la clave una vez que la valido
		
	}


document.getElementById('Sexo').value= sexo;

}//FIN DE LA FUNCIÓN