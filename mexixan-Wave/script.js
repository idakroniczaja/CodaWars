function wave(str){
    let mexicanWave = [];
    
  for ( let i = 0; i < str.length; i++) {
      let wordArray = str.split('')
      
      if ( wordArray[i] === ' ') { 
         continue
      }
      wordArray[i] = wordArray[i].toUpperCase() 
     
      mexicanWave.push(wordArray.join(''))
  }
      return mexicanWave
  }


  
  const wave = str => 
  [...str].map((s, i) => 
      str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
  ).filter(x => x != str);