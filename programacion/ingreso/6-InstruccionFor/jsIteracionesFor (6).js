function Mostrar()
{
    var numero;
    var contadorpar= 0;

    numero =parseInt(prompt("ingrese numero"));

for(var i=1; i<= numero; i++)
{
    

    if (i%2 != 0)
    {
        continue;

    }

        
    
    contadorpar++;
    console.log(i)

    
}
console.log("cantidad numeros pares:" + contadorpar);

}//FIN DE LA FUNCIÓN