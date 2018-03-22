function Mostrar()
{
    var numero;
    var esprimo= true;

    numero =parseInt(prompt("ingrese numero"));

if (numero < 1)
{
    alert("No hay numeros primos menores a 1");
    var esprimo= false;

}
else{

    for(var i=2; i< numero; i++)
    {
        
        if (numero%i == 0)
    
        {
            esprimo = false;
            break;
            
            

        }
    }
    if (esprimo){ //una variable booleanada no se pregunta si es true o false.

        alert("Es primo");
    
    }
    else {
        alert("No es primo");
    }
}



}//FIN DE LA FUNCIÓN

//numero perfecto 