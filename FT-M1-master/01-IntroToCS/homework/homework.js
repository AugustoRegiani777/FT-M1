'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //var num = "111";
  var arr = Array.from(num); // arr = [1 ,1 ,1]
  let decimal = 0 ;
  for (let i = 0; i < arr.length; i++) {
    
    decimal += Math.pow(2, arr.length - i -1 ) * arr[i];
}
return decimal;
}


//S
//
//}
//return decimal;
function DecimalABinario(num) {
  // tu codigo aca
  let numero = num;
  let  newArray = [];
  while (numero / 2 > 0) {
    let resto = numero % 2
    newArray.unshift(resto);
    numero = Math.floor(numero/2);
  }
  return newArray.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}