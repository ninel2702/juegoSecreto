//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function IMC(altura,peso){
 var imc = peso / (altura * altura);
 return imc;
}

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factoral(numero){
    if (numero ===0 || numero ===1){
        return 1;
    }else {
        return numero * factoral (numero-1);
    }

}
let numero =11;
let resultado= factoral(numero);
console.log(`el factoral de ${numero} es ${resultado}`)
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolar(moneda){
    var acuantoeldolar=20;
    var acuantoelpeso=moneda * acuantoeldolar;
    return acuantoelpeso;
}
let valordolar=35;
let valorpeso=dolar(valordolar);
console.log(`${valordolar} dolares es ${valorpeso} peso mexicanos`)
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function ayp1(radio){
        var pi=3.14;
        var area1 = pi * radio * radio;
        var perimetro2 = 2 * pi * radio;
        console.log("Área: " + area1);
        console.log("Perímetro: " + perimetro2);
}
      let radio = 3; 
      ayp1(radio);
      


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tabla(numero8){
    for (var i =1; i <= 10; i++){
        var resultado7= numero8 *i;
        console.log(numero8 + " x" + i + "=" + resultado7);
    }
}
let numero8 =5;
tabla(numero8);