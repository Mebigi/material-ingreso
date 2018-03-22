//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    mes = prompt("ingresar mes");
    mes = mes.toLowerCase();
    
    switch(mes)
{

    case "enero":
    alert("Veranito");
    break;

    case "febrero":
    alert("Veranito");
    break;
    
    default:
    alert("extraño enero y febrero!!!");

}
}

