'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length == 0) {return array =[];}
let medioIndex = Math.floor(array.length/2);
let pivot = array[medioIndex];
let leftArr = [];
let rightArr = [];

for (let i = 0; i < array.length; i++) {
  if(i != medioIndex){
    if(array[i]>pivot) {
      rightArr.push(array[i]);
        } else {
      leftArr.push(array[i]);
      }
    } 
 }

 leftArr = quickSort(leftArr)
 rightArr = quickSort(rightArr)
 return leftArr.concat(pivot).concat(rightArr);
 
}




function mergeSort(array) {
      
    if(array.length === 1) return array // Si el array que nos pasan tiene un length === 1, no podemos iniciar la function y retornamos el array
  
    let mitad = Math.floor(array.length/2) // Declaramos la variable mitad y le asignamos el valor de indice del medio del array
    let left = array.slice(0,mitad) // Ahora left toma como valor la posicion 0 y la mitad declarada anteriormente
    let right = array.slice(mitad,array.length)// Ahora right toma como valor la posicion mitad declarada anteriormente y array.lenght que seria la ultima posicion del array
  //                    *RECURCIVIDAD*
    return merge (mergeSort(left), mergeSort(right))// Se llama a la función merge pasando por parametros los 
  
  }


function merge(left, right) { // Declaramos la function de ordenamiento de menor a mayor para ordenar los dos arrays que nos dio MergeSort
      
    let leftIndex = 0
    let rightIndex = 0
    let resultado = [] 
    // Iniciamos un while con la condicion de corte de que mientras existan elementos dentro del array siga recorriendo 
    while(leftIndex < left.length && rightIndex < right.length){  
      if(left[leftIndex] < right[rightIndex]){  // Si el indice de la izquierda es menor que el de la derecha aumentamos el indice de la izquierda
        resultado.push(left[leftIndex]) // pusheamos los menores a la izquierda dentro de resultado
        leftIndex++ //incrementamos el indice para cada iteracion
      } else {
        resultado.push(right[rightIndex]) // pusheamos los mayores en la derecha dentro de la variable RESULTADO
        rightIndex++ //incrementamos el indice para cada iteracion
      }
    }
    return resultado.concat(left.slice(leftIndex)).concat(right.slice(rightIndex)) //retornamos y concatenamos ambos arrays, dandolos como uno solo dentro del array RESULTADO
  }
  
 
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
