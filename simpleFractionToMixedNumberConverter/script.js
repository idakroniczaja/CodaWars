function mixedFraction(s){
    let numbers =s.split('/').map(e=>Number(e))
    
    let wholeNumber
     wholeNumber=(Math.floor(numbers[0]/numbers[1])<0) ? wholeNumber= Math.ceil(numbers[0]/numbers[1])
    :  wholeNumber= Math.floor(numbers[0]/numbers[1])
    
    
    let fractionTopNumber
    let fractionBottomNumber = numbers[1]
    
    
    if(wholeNumber<1 && wholeNumber>0) {
    fractionTopNumber=numbers[0]
    }else fractionTopNumber=numbers[0]-(numbers[1]*wholeNumber)
    
    
    let allDivisibleNumbers=[]
    
    for(let i =1 ; i<(Math.abs(fractionBottomNumber));i++){
      if(Math.abs(fractionBottomNumber) % i ===0 && Math.abs(fractionTopNumber) % i ===0)
      allDivisibleNumbers.push(i)
    }
     
    let greaterFactor = allDivisibleNumbers.find((el,ind,array)=>el === Math.max(...array))
    
    console.log(greaterFactor)
    
     if (numbers[1]===0) throw new Error('ZeroDivisionError')
      
      return (wholeNumber ===0 && numbers[0]<0 && numbers[1]<0) ? `${Math.abs(fractionTopNumber/greaterFactor)}/${Math.abs(fractionBottomNumber/greaterFactor)}`
     : (wholeNumber ===0 && (numbers[0]<0 || numbers[1]<0)&& numbers[0]/numbers[1] !== 0) ? `-${Math.abs(fractionTopNumber/greaterFactor)}/${Math.abs(fractionBottomNumber/greaterFactor)}`
     : (wholeNumber === 0 && numbers[0]!==0) ? `${Math.abs(fractionTopNumber/greaterFactor)}/${Math.abs(fractionBottomNumber/greaterFactor)}`
     : (numbers[0]% numbers[1] ===0) ? `${numbers[0]/numbers[1]}`
     : (numbers[0]/numbers[1] === 0) ? `0`
     : `${wholeNumber} ${Math.abs(fractionTopNumber/greaterFactor)}/${Math.abs(fractionBottomNumber/greaterFactor)}`
    
    }