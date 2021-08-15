function createPhoneNumber(numbers){
    let firstNums=numbers.filter((e,i)=>i<=2)
  firstNums.push(')')
  firstNums.unshift('(')
  let firstStr = firstNums.join('')
  
  let secondNums=numbers.filter((e,i)=>i>2 && i<=5)
  secondNums.push('-')
  firstNums.unshift(` `)
  let secondStr = secondNums.join('')
  
  let thirdNos=numbers.filter((e,i,a)=>i>5 && i<a.length)
  let thirdStr = thirdNos.join('')
  
  return `${firstStr} ${secondStr}${thirdStr}`
  }