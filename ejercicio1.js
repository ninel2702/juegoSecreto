let titulo=document.querySelector("h1");
titulo.innerHTML="hora del desafio";

function cliqueado(){
    alert("el boton fue cliqueado");
}

function pregunta(){
    let pregunta =prompt("dime una ciudad de brasil");
    alert (`estuve en ${pregunta} y me acorde de ti`);
}
function frase(){
    alert ("yo amo JS");
}
function suma(){
    let primer= parseInt(prompt("dime un numero"));
    let segun=parseInt(prompt("dime otro numero"));
    let resultado =(primer+segun);

    alert (`la suma de los numeros ${primer} + ${segun} es igual ${resultado}`);
}