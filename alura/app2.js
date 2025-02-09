 let numeroSecreto = 0;
 let intentos =1;
 let listaNumeroSorteados = [];
 let numeroMaximo = 10;


 function verificarIntento(){
let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
//para vr el tipo de dato console.log(typeof(numeroUsuario));
console.log(intentos);
if (numeroSecreto === numeroUsuario){
    asignarTextoElemento('p',`acertaste el número en ${intentos} ${(intentos ==1)? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
}else {
    //el usuario no acerto
    if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p','el número es menor');
    } else {
        asignarTextoElemento('p','el número es mayor');
    }
    intentos++;
    limpiarCaja();

}
    return;
  }

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya se sortearon los numeros 
    if (listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los números');
    }else {
    //si el numero generado esta incluido en la lista 
    //esto es un if añidado
        if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

         }else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
        }

}
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //otra forma de hacerlo
    //let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value ='';
}

function condicionIniciales(){
    asignarTextoElemento("h1","juego del número secreto");
    asignarTextoElemento("p",`escoje un número del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de inicio del juego
    //generar el numero aleatorio 
    //intentos inicializar 
    condicionIniciales();
    //desabilitar el boton de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionIniciales();

//todos los arreglos inician en la posicion cero
//para saber el elemento final de la lista o sea arreglos console.log(numeroSorteado[numeroSorteado.length-1]);
//
