console.log("hola mi gente");
let nombre = prompt ("dime tu nombre");
let pregunta =prompt ("dime un lenguaje de programacion");
let edad= prompt ("dime tu edad");
let numero =prompt ("dime un numero");
let numero1 =1;
let nota=8;
let valor1=11;
let valor2=33;
let aleatorio= Math.random();
let aleatorio1= Math.floor(Math.random()*10)+1;
let aleatorio2= Math.floor(Math.random()*1000)+1;
let resultado= valor1 + valor2;
let resultado1= valor1 - valor2;


console.log(`holaaa ${nombre}`);
console.log(`un lenguaje de programacion es ${pregunta}`);
console.log(`la suma de ${valor1} y ${valor2} es igual a ${resultado}`);
console.log(`la resta de ${valor1} y ${valor2} es igual a ${resultado1}`);

if (edad > 18){
    console.log("eres mayor de edad");
} else {
    console.log("tas chiquita");
}

    if (numero > 0){
        console.log("es positivo");
    } else if (numero < 0){
        console.log("es negativo");
    } else { 
        console.log("cero");
    }

    while (numero1 <=10){
        console.log(numero1);
        numero1 ++;

    }
 
        if (nota >= 7){
            console.log("aprobado");
        } else{
            console.log("reprobado");
            
        }
    
console.log(aleatorio);
console.log(aleatorio1);
console.log(aleatorio2);