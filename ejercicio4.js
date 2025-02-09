//Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];
let listaPromedio=[10,9,8,10,9];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let LenguajesDeProgramacion = ['javascript','C','C++','Kotlin','python'];
//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
LenguajesDeProgramacion.push('java','ruby','golang');
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrar(){
    for (let i =0; i<LenguajesDeProgramacion.length;i++){
        console.log(LenguajesDeProgramacion[i]);
    }
}
mostrar();
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function inverso(){
    for (let i = LenguajesDeProgramacion.length -1 ;i >= 0; i--){
        console.log(LenguajesDeProgramacion[i]);
    }
}
inverso();
//Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio2(lista){
    let suma=0;
    for (let i=0; i<lista.length;i++){
        suma +=lista[i];
    }
    return suma/lista.length;
}
let media=promedio2(listaPromedio);
console.log('la media es de',media);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroPequeño(lista){
    let max= lista[0];
    let min= lista[0];

    for (let i =1; i< lista.length; i++){
        if (lista[i] >  max){
            max =lista[i];
        }if (lista [i]< min){
            min =lista[i];
        }
    }
    console.log('mayor',max);
    console.log('menor',min);
}
let numeros =[20,14,11,4,36];
numeroPequeño(numeros);
//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumita(lista){
    let sumas =0;
    for (let i =0;i<lista.length;i++){
        sumas +=lista[i];
    }
    return(sumas);
}
let numeroso=[34,5,23,64,22];
let sumas=sumita(numeroso);
console.log('suma',sumas);
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function Indice(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultadito = cuadradoLista(lista);
console.log(resultadito);  
