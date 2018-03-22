function Mostrar()
{

	var contador=0; //cuenta a saltos fijos
	var acumulador=0; //acumulaen valores variables
	var numero;

	

	while(contador < 5)
	{

	//uso el contador como variable de control para que itere 5 veces
	numero = parseInt(prompt("Ingrese número")); //recordar hacer validaciones NaN
	acumulador = acumulador + numero //parciales: diferencia ente acumulador y contador 
	contador += 1

	}
		
//tengo dudas, poner adentro las cosas que se repiten y afuera  las que no


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5; //puedo usar contador tambien porque cuando sale de la ultima vale 5

}//FIN DE LA FUNCIÓN