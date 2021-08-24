Math.round = function(number) {
    let numArr = String(number).split('.').map(e=>Number(e))
   
   if(numArr.length<2)return number
   
   if(numArr[1]<10){
     numArr[1] = numArr[1]*10
   }else {
     numArr[1] = Number(String(numArr[1]).slice(0,2))
   }
   
   
   if(numArr[1]<50){
     return numArr[0]
   } else {
     return numArr[0]+1
   }
   };
   
   
   Math.ceil = function(number) {
      let numArr = String(number).split('.').map(e=>Number(e))
   
    if(numArr.length<2)return number
   
     return numArr[0]+1
   };
   
   Math.floor = function(number) {
   let numArr = String(number).split('.').map(e=>Number(e))
   
   return  numArr[0]
   };