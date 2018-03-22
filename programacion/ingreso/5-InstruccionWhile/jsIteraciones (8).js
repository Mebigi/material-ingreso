function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1; // elemento neutro para multiplicacion el 1
	var contadorNeg = 0
	
	var respuesta='si';

	do
	{

	//uso el contador como variable de control para que itere 5 veces
	numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN
	
	if (numero >= 0) // considero 0 positivo
	{
			positivo = positivo + numero;
	}

	else
	{
		negativo = negativo * numero;
		contadorNeg ++;
	}

	respuesta = prompt("Desea continuar")

	}
	while(respuesta=='si')



document.getElementById('suma').value=positivo;

if(contadorNeg==0)
{
	negativo = 0
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN