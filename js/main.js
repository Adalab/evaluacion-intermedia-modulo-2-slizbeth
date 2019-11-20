'use strict';
const numberInputElement = document.querySelector('#numberInput');
const buttonElement = document.querySelector('#button');
const secondTextElement = document.querySelector('#secondText');
let cont = 0;

//funcion que genera num aleatorio entre 1 y 100
const  getRandomNumber = (max) => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(100);

//funcion que evalua las condiciones del numero
const control = function (){
  let numberInputValue = numberInputElement.value;
  let numberParseInt = parseInt(numberInputValue);
  //console.log(typeof(numberParseInt));
  console.log(randomNumber); //3.mostrar número aleatorio
  console.log(numberParseInt); //4.contenido input

  if(numberParseInt >= randomNumber){
    secondTextElement.innerHTML= 'Demasiado alto.';
    console.log('Demasiado alto.');
  }else if(numberParseInt <= randomNumber){
    secondTextElement.innerHTML= 'Demasiado bajo.';
    console.log('Demasiado bajo.');
  }else if(numberParseInt === randomNumber){
    secondTextElement.innerHTML= 'Has ganado campeona!!!';
    console.log('Has ganado campeona!!!');
  }else if(numberParseInt >=1 && randomNumber<= 100){
    secondTextElement.innerHTML= 'El número debe estar entre 1 y 100';
    console.log('El número debe estar entre 1 y 100');
  }else{
    secondTextElement.innerHTML= 'No';
    console.log('No');
  }

  contClik();
}

const contClik  = function (){
  cont+= cont;
  console.log(cont);
}

buttonElement.addEventListener('click', control);

