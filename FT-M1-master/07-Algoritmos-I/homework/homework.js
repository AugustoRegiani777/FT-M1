'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos 180/2(1)-90/2(1)-20(5)
  // Tu código:
 let array = [1];
 let i = 2
 while (num !== 1){
 if (num%i === 0){
  array.push(i) 
  num = num/i;
} else {i++}
}
return array 
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let swap = true
  while (swap){
    swap = false
    for (let i = 0; i < array.length-1; i++) {
      if(array[i]> array [i+1]){
        let aux = array[i]
        array[i]= array [i +1]
        array [i+1]=aux;
        swap=true
      }
      
    }
  } return array
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for (let i = 1; i < array.length; i++) {
  let j= i-1;
  let aux = array[i];
  while (j>=0 && array[j]>aux) {
    array[j + 1]= array[j];
    j--;
    
  }
  array[j+1]= aux;
}
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min= i;
    for (let j = i+1; j < array.length; j++) {
       if(array[j] < array[min]){
         min=j;
       }
      
    }
    if(i!==min){
      let aux = array[i]
      array[i]= array[min]
      array[min]= aux
    }
  }
  return array;

}
/*
let playerOneCards = [100,1]
let playerTwoCards = [10,1]

    

var cardGame = function(playerOneCards, playerTwoCards){
    // Tu código aca:
    let playerOneCastle = 100
    let playerTwoCastle = 100

    for (let i = 0; i < playerOneCards.length; i + 2) {
        let arrOne = [playerOneCards.shift(), playerOneCards.shift()]
        let arrTwo = [playerTwoCards.shift(), playerTwoCards.shift()]
        
        
        if (arrOne[i] > arrTwo[i + 1]) {
            playerTwoCastle += arrTwo[i+1] - arrOne[i]
        }
        
        if (arrTwo[i] > arrOne[i+1]) {
            playerOneCastle += arrOne[i+1] - arrTwo[i]
        }   

        if(playerOneCastle <= 0 && playerTwoCastle > 0) return "PLAYER TWO"
        if(playerTwoCastle <= 0 && playerOneCastle > 0) return "PLAYER ONE"
        if(playerTwoCastle <= 0 && playerOneCastle <= 0) return "TIE"
    }
    if (playerTwoCards.length === 0){
      
        if(playerOneCastle < playerTwoCastle) return "PLAYER TWO"
        if(playerTwoCastle < playerOneCastle) return "PLAYER ONE"
        if(playerTwoCastle ===  playerOneCastle) return "TIE"
    }
}

console.log(cardGame(playerOneCards,playerTwoCards))

//---------------Closures-------------------

// EJERCICIO 10
// Implementar la función closureDetect que recibe como parámetro:
//  - Un array (symptoms) que va a contener en cada posición un string representando un
//    síntoma médico de alguna enfermedad
//  - Un número (min) que va a indicar la cantidad mínima de síntomas que debe tener un
//    paciente para considerar que posee la enfermedad
// Ejemplo:
//  var symptoms = ['fever', 'dry cough', 'tiredness', 'sore throat', 'diarrhoea', 'loss of taste', 'loss of
//  smell'];
//  var covidDetector = closureDetect(symptoms, 3);
//  
//  var personOne = {
//    name: 'Franco',
//    age: 26,
//    symptoms: ['fever', 'congestion', 'loss of taste', 'tiredness']
// }
//
//  var personTwo = {
//    name: 'Toni',
//    age: 30,
//    symptoms: ['congestion', 'tiredness']
// }
//
//    covidDetector(personOne); --> true
//    covidDetector(personTwo); --> false
//    [Observar los tests para otros casos]

function closureDetect(symptoms, min) {
    // Tu código aca:


    
}
/**/
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
