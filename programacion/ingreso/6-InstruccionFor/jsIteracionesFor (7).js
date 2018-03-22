function Mostrar()
{
    var numero;
    var contador= 0;

    numero =parseInt(prompt("ingrese numero"));

for(var i=1; i<= numero; i++)
{
    

    if (numero%i == 0)
    {
        contador++;
        console.log(i)

    }
}
console.log("cantidad numeros pares:" + contador);

}//FIN DE LA FUNCIÓN