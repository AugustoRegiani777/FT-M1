'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  //var num = "111";
  var arr = Array.from(num); // arr = [1,0,1,0,1] 10101
  let decimal = 0;                    //0,1,2,3,4
  for (let i = 3; i < arr.length(5); i++) {
    
    decimal = decimal + arr[i]* 2 ** (arr.length - i -1 );
}                  
return decimal;
}

/*
Supongamos 10101,
1 | 0   | 1     | 0   | 1
-- | --- | ----- | ----| ---
2^4| 2^3 |  2^2  | 2^1 | 2^0

Por lo tanto:
1x2^4 + 0x2^3 + 1x2^2 + 0x2^1 + 1x2^0 = 16 + 0 + 4 + 0 + 1 = 21*/


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
/*
math florr => 21/2 =    let resto =>10 (resto 1)
              10/2 = 5                 (resto 0)
              5/2 = 2                  (resto 1)
              2/2 = 1                  (resto 0)
              1/2 = 0                  (resto 1)*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}