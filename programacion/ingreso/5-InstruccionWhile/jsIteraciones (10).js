function Mostrar()
{

	


	//Al presionar el botón pedir números hasta que el usuario quiera, mostar:
//1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
//4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares.
// 7-Promedio de positivos. 8-Promedios de negativos. 
//9-Diferencia entre positivos y negativos, (positvos-negativos).
	


	var numero;
	var sumaneg = 0;
	var sumapos = 0;
	var cantidadpos=0;
	var cantidadneg=0;
	var cantidadceros=0;
	var cantidadpares =0;
	var promediopos = 0;
	var promedioneg = 0;
	var sumapares = 0; //siempre inicializar un contador porque si no te da NaN; Ejemplo NaN + 1 = NaN
	// declarar variables
	
	var respuesta='si';


do	
	{
		numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN

		
			if(numero > 0)//beneficio una vez que se cumple la condicion ya no evalua el resto de las condiciones y ahorra codigo

				{
					cantidadpos ++;
					sumapos += numero;
					

				}

			else if (numero < 0)
				{
					cantidadneg ++;
					sumaneg += numero;
					
				}
			else 
				{
					cantidadceros ++;
					
				}

			if (numero % 2 == 0)
			{

				sumapares += 1;
			}

		

	
		respuesta = prompt("Desea continuar");
		

	}
	while(respuesta!='no');

	//siempre que dividimos la varable tieen que ser distinto de cero

	if (cantidadpos != 0)
	{
		promediopos = sumapos/cantidadpos;
	}
	
		if (cantidadneg != 0)
	{
		promedioneg = sumaneg/cantidadneg;
	}
	
		
	

document.write("suma positivos:" + sumapos);
document.write("<Br/>");
document.write("suma negativos:" + sumaneg);
document.write("<Br/>");
document.write("cantidad pos:" + cantidadpos);
document.write("<Br/>");
document.write("cantidad neg:" + cantidadneg);
document.write("<Br/>");
document.write("cantidad ceros:" + cantidadceros);
document.write("<Br/>");
document.write("promedio pos:" + promediopos);
document.write("<Br/>");
document.write("promedio neg:" + promedioneg);
document.write("<Br/>");
document.write("diferencia:" + (cantidadpos - cantidadneg));
document.write("<Br/>");
document.write("suma positivos:" + sumapos);
document.write("<Br/>");
document.write("suma pares:" + sumapares);
document.write("<Br/>");



}//FIN DE LA FUNCIÓN