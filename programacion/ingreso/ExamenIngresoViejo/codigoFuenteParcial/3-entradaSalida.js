//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

    var ancho = parseInt(document.getElementById("ancho").value);
    var largo = document.getElementById("largo").value;

    var hilos;

    hilos = (2* ancho + 2* largo) * 6; //no hace falta que ponga parentesis a la suma


        alert("Cantidad de hilos: " + hilos)

    }
	
}

