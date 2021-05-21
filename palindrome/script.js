function findPalindrome(string){
    // let strArray=string.split('');
    // let strArrayReverse=string.split('').reverse();
    
    let letter=[];
    let letterReverse=[];
    let str='';
    let strRev=''
    
    for(let i=0; i<string.length; i++){
      str+=string[i];
      if(str!==string){
        letter.push(str.toLowerCase())
      }
      
    }
    for(let j=string.length-1; j<string.length && j>=0; j--){
        strRev+=string[j];
        if(strRev!==string.split('').reverse().join('')){
        letterReverse.push(strRev.split('').reverse().join(''))
        }
    }
    
    let concatArrays = () => {
       return letter.map(word1=>{
      return letterReverse.map(word2=>{
        if((word1.includes(word2)||word1.includes(word2.split('').reverse().join(''))||word2.includes(word1))&& word1!==word2.split('').reverse().join('')&& word1.concat(word2).length<=string.length){
          let word=word1.concat(word2)
    
            return word
    
    
        }else return false
       
      })
    
      //  return letterReverse.map(word2=>{
      //    if(word1.concat(word2).length<=string.length){
      //     console.log( )
      //    return word1.concat(word2)
      //    }
      //    else {
      //      return word2
      //    }
      //    })
        //  .filter((elem,index, arr)=> 
        //  arr.indexOf(elem)===index
        //  )
      })
      //  .flat()
      //  .filter((elem,index,arr)=>
      //   arr.indexOf(elem)===index)
    }
    console.log (letter, letterReverse)
      return concatArrays()
      // .map(elem=>elem===elem.split('').join(''))
    
    }
    
    findPalindrome('civic')