let numeroUsuario =0;
let numeroSecreto = Math.floor(Math.random()*100)+1;
let intentos =1;
let maxintentos =10;
let alcance= Math.floor(Math.random()*100)+1;

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${alcance} por fi`));
    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto){
        alert(`si le sabes: ${numeroUsuario}, lo adivinaste en ${intentos} ${intentos == 1 ? 'intento' : "intentos"}`);
    }else {
        if (numeroUsuario > alcance){
            alert ("el numero es menor");
        }else {
            alert ("el numero es mayor");
        }
        intentos ++;
       
        if (intentos > maxintentos){
            alert (`llegaste al limite de ${maxintentos} intentos papito`);
            break;
        }
       
    }
}
