function Mostrar()
{
//tomo la hora 
var laHora = parseInt(document.getElementById('hora').value);


// NOTA: con parseInt trnsformo un texto en umerico y evito usar las comillas en el swich

//alert (laHora);
	
	switch(laHora){
	
		case 7:
		case "8":
		case "9":
		case "10": 
		case "11":
			alert('Es de mañana.');
			break;
		
		
	}



}//FIN DE LA FUNCIÓN