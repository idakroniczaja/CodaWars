decodeMorse = function(morseCode){
    let morseArrayOfWords = morseCode.split('  ')
   let eachWord = morseArrayOfWords.map(each=>{
      return each.split(' ').map(eachSet=>{
       eachSet = MORSE_CODE[eachSet]
       return eachSet
       }).join('')
     })
   
    return eachWord.join(' ').trim()
   }