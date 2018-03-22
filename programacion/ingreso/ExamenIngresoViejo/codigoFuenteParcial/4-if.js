//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    
    var numero1 = prompt('primer numero');
    var numero2 = prompt('segunso numero');


    if (numero1 == numero2)
    {
       alert("multiplica" + numero1 + numero2); 
    }
    else {
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

    }
    if (numero1 > numero2)
    {
        
        alert("Resta" + (numero1-numero1)); 
    }
    else {
        alert("Suma" + (numero1+numero2)); 
       
    }

}

