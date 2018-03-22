//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{

    var notas;
    var sexo;
    var acumulador = 0;
    var contVaronMas6 = 0;
    var flag = 0;
    var promedio;
    var notabaja;

    
    for( var alumnos=1; alumnos <=6; alumnos ++) //para los 6 alumnos
    {
        
    notas = parseInt(prompt("Ingresar Nota"));
    
     
    while ( notas < 0 || notas > 10 )
    {
        notas = parseInt(prompt("Ingresar Nota"));

    }

    sexo = prompt("Ingresar Sexo");
    
    while ( sexo != 'f' && sexo != 'm' )

    {
        sexo = prompt("Ingresar sexo");

    }
    
    acumulador = acumulador + notas;


    if (notas < notabaja || flag == 0)
    {
        notabaja = notas;
        flag = 1;
    }
    if (sexo == 'm' && notas >= 6)
    {
        contVaronMas6++;
    }
     

    }

    promedio = acumulador /6;

     alert("a \) Promedio notas:" + promedio.toFixed(2) + "\nb\) Nota mas baja:" + notabaja + "\nc\) varones con nota < 6: " + contVaronMas6 )
    
    //validar notas ente 0 -10

   // si no pido notas denuevo

    //ok si esta entre 0-10

    //promedionotas 

   // notamasbaja

    //cantidad varores nota > 6






}







