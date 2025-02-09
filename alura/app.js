alert('Hola mundo'); 
//se puede poner comillas simples o las dobles en js
//no es necesario colocar el punto y coma pero en los demas se usan 
//se tiene que declarar las variables afuera del bucle 
let numeroUsuario =0;
let numeroSecreto = Math.floor(Math.random()*10)+1;
let intentos =1;
//let palabraIntentos = 'intento'; otra forma de hacer la forma linguistica 
let maxintentos =3;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt("Me indicas un numero del 1 al 10 por fi"));
//parseInt para que solo acepte numero
//el signo de exclamacion es cuando tiene que se diferente ya que es comparacion
//las variables se colocan en mauscula e indicar de que se trata cada variable 
//camelcase ya que inicia con minuscula y despues con mayuscula
    console.log(typeof(numeroUsuario));
    //para ingresar a la consola se puede con F12
    //siempre en la parte superior debe de estar a declaracion de variables
    //para comparar se utilizan dos iguales
    /*este para comentar mas renglones */ 
    if (numeroUsuario == numeroSecreto){
        //si le supieron
        alert(`si le sabes: ${numeroUsuario}, lo adivinaste en ${intentos} ${intentos == 1 ? 'intento' : "intentos"}`); //otra forma de colocar la sintaxis linguistica singular y plural es el operador ternario
        //el signo de dolar es para indicar que es una variable
        //tambien se puede agregar codigo de javascript en las llaves
    }else {
        if (numeroUsuario > numeroSecreto){
            alert ("el numero es menor");
        }else {
            alert ("el numero es mayor");
        }
        //incrementamos el contador cuando no acierta 
        //(otra forma de colocar un contador) intentos = intentos + 1;
        //(otra forma de colocar un contador) intentos +=1;
        intentos ++;
        //esto es para crear mejor la linguistica de las oraciones 
       // palabraIntentos = 'intentos';
        if (intentos > maxintentos){
            alert (`llegaste al limite de ${maxintentos} intentos papito`);
            break;
        }
        //no pues no le supieron
        //alert ('no pues no le sabes papito');
    }
}
//comilla invertida templatestring para colocar algo mas dentro de comillas
//identacion de codigo cuando todo el codigo esta dentro de un proceso 