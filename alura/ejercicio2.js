//Crear una función que muestre "¡Hola, mundo!" en la consola.
console.log("hola mundo");

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mostrarNombre(nombre){
    console.log(`hola ${nombre}`);
}
mostrarNombre("Ninel");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
    return numero *2;
}
let resultado = dobleNumero(4);
console.log(resultado);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3)/3;

}
let resultado2 = promedio(10,10,9);
console.log(resultado2);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(numero4,numero5){
    return (numero4 > numero5 ? numero4 : numero5);
}
let resultado3 = mayor(3,6);
console.log(resultado3);

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplica(numero6){
    return (numero6 * numero6);
}
let resultado4 = multiplica(2);
console.log(resultado4);