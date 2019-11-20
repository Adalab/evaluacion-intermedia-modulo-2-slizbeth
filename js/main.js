'use strict';

//declaraion de variables
const numberInputElement = document.querySelector('#numberInput');
const buttonElement = document.querySelector('#button');
const firsTextElement  = document.querySelector('#firsText');
const secondTextElement = document.querySelector('#secondText');
const countElement  = document.querySelector('#counter');
let cont = 0;

//funcion que genera num aleatorio entre 1 y 100
const  getRandomNumber = (max) => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(100);

//funcion que evalua las condiciones del numero
const control = function (){
  let numberInputValue = numberInputElement.value;
  let numberParseInt = parseInt(numberInputValue);
  //console.log(typeof(numberParseInt));
  console.log("Número aleatorio: " + randomNumber); //3.mostrar número aleatorio
  console.log("Número introducido: " + numberParseInt); //4.contenido input

  if(numberParseInt >= randomNumber){
    secondTextElement.innerHTML= 'Demasiado alto.';
    //console.log('Demasiado alto.');
  }else if(numberParseInt <= randomNumber){
    secondTextElement.innerHTML= 'Demasiado bajo.';
    //console.log('Demasiado bajo.');
  }else if(numberParseInt === randomNumber){
    secondTextElement.innerHTML= 'Has ganado campeona!!!';
    //console.log('Has ganado campeona!!!');
  }else if(numberParseInt >=1 && randomNumber<= 100){
    secondTextElement.innerHTML= 'El número debe estar entre 1 y 100';
    //console.log('El número debe estar entre 1 y 100');
  }else{
    secondTextElement.innerHTML= 'No';
    //console.log('No');
  }

  //console.log(event.target);
  let buttonElementClik = event.target;
  //llamar a la funcion contar clicks
  contClik(buttonElementClik);
}

//funcion que cuentas los cliks del botón
const contClik  = function (a){
  cont++;
  countElement.innerHTML = cont;
  console.log('Número de veces que ha pulsado el botón' + cont);
  
}

//funcion que muestra texto al cargar la página
const write  = function (){
  // const chilParagraph = document.createElement('p');  
  // chilParagraph.innerHTML= 'Pista: Escribe el número y dale a Prueba';
  // pageElement.appendChild(chilParagraph);
  firsTextElement.innerHTML = 'Pista: Escribe el número y dale a Prueba';
}

//listeners?
window.addEventListener('load', write);
buttonElement.addEventListener('click', control);


