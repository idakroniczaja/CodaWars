function StringChallenge(str) { 

    let firtNo = Number(str.split('.')[0]);
    let fullStart = [];
  
    let secondNo
  
  
    let restOfTheStars =[];
    let finalRes
  
  
    for (let i = 0; i<firtNo; i++){
      fullStart.push('full')
    }
  
    if(str.split('.')[1]=== '00'){
   for (let i = 0; i<5-firtNo; i++){
      restOfTheStars.push('empty')
    }
  
  finalRes = fullStart + '' +restOfTheStars
    }else {
       for (let i = 0; i<4-firtNo; i++){
      restOfTheStars.push('empty')
    }
     
       secondNo = 'half';
       finalRes = fullStart + ' '+ secondNo + ' ' + restOfTheStars
    }
  
  
    return finalRes
  
  }
     
  // keep this function call here 
  console.log(StringChallenge("3.45"));