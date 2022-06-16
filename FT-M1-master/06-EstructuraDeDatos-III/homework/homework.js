"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


BinarySearchTree.prototype.size = function(){
  
  
  if(this.left === null && this.right === null){
    return 1}
 
  if(this.left !== null && this.right === null){
    return 1+ this.left.size()}

  if(this.left === null && this.right !== null){
    return 1+ this.right.size()}
    
    if(this.left !== null && this.right !== null){
      return 1+ this.right.size() + this.left.size() }   
}


BinarySearchTree.prototype.insert = function(value){
  if (value === this.value) { this.value = value}
  if (value > this.value) {
  if (this.right !== null ) {
    this.right.insert(value);
    }else{
      this.right= new BinarySearchTree(value) ;
    }}	


  if (value< this.value) {
  if (this.left !== null ) {
     this.left.insert(value);
     }else{
      this.left = new BinarySearchTree(value) ;
					}}
}


BinarySearchTree.prototype.contains = function(value){
  //- contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  if(this.value === value) {return true;}
   

  if( value > this.value){
    if (this.right === null){return false}
        else  { return this.right.contains(value)} 
  }

  if(value < this.value){
    if(this.left=== null){return false}
    else  { return this.left.contains(value)} 
  }}


//- depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún
// parámetro, hará el recorrido "in-order" por defecto.
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
 
  if(order=== 'pre-order') {
    cb(this.value)
    if(this.left!==null) {  this.left.depthFirstForEach(cb,order)} 
    if(this.right!==null) { this.right.depthFirstForEach(cb,order)}

  } else if (order === 'post-order'){
    if(this.left!==null) {  this.left.depthFirstForEach(cb,order)} 
    if(this.right!==null) { this.right.depthFirstForEach(cb,order)}
    cb(this.value);
  } else {
    
    if(this.left!==null) {  this.left.depthFirstForEach(cb,order)} 
      cb(this.value);
      if(this.right!==null) { this.right.depthFirstForEach(cb,order)}
    }
  }



//- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function(cb){
  let array = []
  if (this.value !==null && this.left!==null && this.right!==null){
    
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
