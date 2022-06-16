"use strict";

const { timeStamp, Console } = require("console");
const { createSecureContext } = require("tls");
const { runInThisContext } = require("vm");
const { threadId } = require("worker_threads");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo 
    y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado
   como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea 
  un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
}

function Node(value) {
 this.value = value;
 this.next = null;
}

LinkedList.prototype.add = function (data){
  let node = new Node(data);
  let current = this.head
  if(!current) {
    this.head=node;
    return node;
  }
  while(current.next){
    current= current.next;
  }
  current.next= node;
};

LinkedList.prototype.remove = function (){
if(this.head === null){
  return null;
}
if (this.head && !this.head.next){
  let aux1 = this.head.value;
  this.head = null;
  return aux1;
}
while (this.head.next.next){
  this.head= this.head.next;
}
let aux2= this.head.next.value;
this.head.next= null;
return aux2;
}

LinkedList.prototype.search = function (data){
let current = this.head;
while(current){
  if(current.value === data){
    return current.value;
  } else if (typeof(data) === "function") {
    if (data(current.value)){
      return current.value;
    }
  }
  current = current.next;
}
return null;
}
  
/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, 
    posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor 
    (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, 
  a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro 
  al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código
   numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total 
   por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.

  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo
   el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla
 con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico
  (determinado al hashear la clave)
*/
function HashTable() {    
  this.numBuckets= 35;
  this.hashTable= [ ]
                                          
}
HashTable.prototype.hash = function(key){
  let sum = 0;//      foo   324    %35 = 9
 
for (let i = 0; i < key.length; i++) {


  let codigo= key.charCodeAt(i) ; //  F = 125 

   sum += Math.round(codigo);
  }
  return Math.round(sum%this.numBuckets); //foo= 324/35 
}


HashTable.prototype.set = function(key, value){
  if(typeof key !== 'string') throw TypeError('Keys must be strings');
 let casillero= this.hash(key); // 9 hash
  if (this.hashTable[casillero] === undefined){
   this.hashTable[casillero] = {}
 }
 this.hashTable[casillero][key]=value;
};

HashTable.prototype.get = function(key){
  let i= this.hash(key); 
  if(this.hashTable[i].hasOwnProperty(key)) {
    return this.hashTable[i][key]; // valor de foo
  }
};
//- hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
HashTable.prototype.hasKey = function(key){
  let i= this.hash(key);
  return this.hashTable[i].hasOwnProperty(key)
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
