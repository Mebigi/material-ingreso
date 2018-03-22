function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	// var flag = 0;
	// declarar variables
	
	var respuesta='si';


do	
	{
		numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN

		if (contador!=0) // con flag saco contador
		 {		

			if(numero > maximo) // || flag == 0

				{
					maximo = numero;
				}

			if (numero < minimo) // || flag == 0
				{
					minimo = numero;
					//flag = 1;
				}

		}
		else 
		{
			minimo = numero;
			maximo = numero;

		}

	
		respuesta = prompt("Desea continuar");
		contador++;

	}
	while(respuesta!='no');



document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN