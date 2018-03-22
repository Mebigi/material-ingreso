function Mostrar()
{

	var contador=0; 
	var acumulador=0;
	var respuesta='si';

	//while(respuesta=='si')
	//{

	//uso el contador como variable de control para que itere 5 veces
	//numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN
	//acumulador = acumulador + numero //parciales: diferencia ente acumulador y contador Recordar inicilizar porque si no sale NaN
	//contador += 1
	//respuesta = prompt("Desea continuar")

	//}

	do //cuando se necita que se ejecute por lo menos una vez en este caso la variable respuesta no requiere ser inicalizada
	{

	//uso el contador como variable de control para que itere 5 veces
	numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN
	acumulador = acumulador + numero //parciales: diferencia ente acumulador y contador Recordar inicilizar porque si no sale NaN
	contador += 1
	respuesta = prompt("Desea continuar")

	}


	while(respuesta=='si');
	


	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN


