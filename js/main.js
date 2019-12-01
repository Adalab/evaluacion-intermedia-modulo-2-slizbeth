'use strict';

//declaraion de variables
const form = document.querySelector('.form');
const userNumber = document.querySelector('#user-number');
const buttonElement = document.querySelector('#button');
const buttonResetElement = document.querySelector('#resetButton');
const firsTextElement  = document.querySelector('#firsText');
const countElement  = document.querySelector('#counter');
let attemps = 0;

//numero aleatorio
const  getRandomNumber = max => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(100);
console.log("Número aleatorio: " + randomNumber);

//verifica el numero introducido con el numero aleatorio
const checkNumbers = function (){
  let userNumberValue = parseInt(userNumber.value);
  
  if( userNumberValue > 100 || userNumberValue <1){
    firsTextElement.innerHTML= 'El número debe estar entre 1 y 100';
  }else if(userNumberValue > randomNumber){
    firsTextElement.innerHTML= 'Demasiado alto..';
  }else if(userNumberValue < randomNumber){
    firsTextElement.innerHTML= 'Demasiado bajo...';
  }else if(userNumberValue === randomNumber){
    firsTextElement.innerHTML= 'Has ganado campeona!!!';
  }else{
    firsTextElement.innerHTML= 'Introduce un número para jugar';
  }
}

//inicio juego
function eventClickHandler(){
  countAttempts();
  checkNumbers();
}

//funcion que muestra texto al cargar la página
const write  = function (){
  firsTextElement.innerHTML = 'Escribe el número y dale a Prueba';
}

//tecla intro//
function sumbitForm(event){
    event.preventDefault();
    eventClickHandler();
    countAttempts();
}

//contador de intentos///
const countAttempts  = function (){
  userNumber.value === '' ? attemps = 0 : attemps++, countElement.innerHTML = attemps;
}

//reinicio//
const reset = () =>{
  document.location.reload();
}

window.addEventListener('load', write);
buttonElement.addEventListener('click', eventClickHandler);
form.addEventListener('submit', sumbitForm);
buttonResetElement.addEventListener('click', reset);

