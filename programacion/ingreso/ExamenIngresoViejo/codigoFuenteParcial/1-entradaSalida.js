//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

    var lado = document.getElementById('lado').value;
    var perimetro = 0;

    if (lado > 0)

    {
        perimetro = 3 * lado;
        alert("El perimetro es:" + perimetro);
        

    }
    
	
}

