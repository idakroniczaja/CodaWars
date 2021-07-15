function iqTest(numbers){
    let numArray= numbers.split(' ').map(ele=>Number(ele))
    
    let even = numArray.filter(element=>element%2===0)
    let odd = numArray.filter(element=>element%2!==0)
    
    
    if(even.length===1){
      return numArray.indexOf(Number(even.join()))+1
    }else {
      return numArray.indexOf(Number(odd.join()))+1
    
    } 
    }