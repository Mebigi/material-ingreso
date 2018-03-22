//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
  
    var importe;
    var importemayor;
    var importemenor;
    var flag = 0;
    var diamayor;
    var diamenor;


    for (var dia=1; dia <= 7; dia++)
    {
        importe = parseInt(prompt("importe de la venta del día " + dia));
        
    while (importe <= 0)
    {

        importe = parseInt(prompt("importe de la venta del día " + dia));

    }

    if (importe > importemayor || flag == 0)
    {
        importemayor = importe;
        diamayor = dia;
      
        

    }

    if (importe < importemenor || flag == 0)
    {
        importemenor = importe;
        diamenor = dia;
        flag = 1;


    }

    document.write("importe " + dia + ": " + importe)
   


}

document.write("importe mayor " + importemayor + "<br />importe menor " + importemenor);
}

