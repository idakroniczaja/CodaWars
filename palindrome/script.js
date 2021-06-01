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


    // function makePalindrome(str, maxDel = 2) {
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str[i] === str[j]) continue;
//         if (maxDel === 0) return false;
//         // Try by deleting char at j
//         let res = makePalindrome(str.slice(i, j), maxDel-1);
//         if (res) return (res === true ? "" : res) + str[j]; 
//         // Try by deleting char at i 
//         res = makePalindrome(str.slice(i+1, j+1), maxDel-1); 
//         if (res) return str[i] + (res === true ? "" : res);
//         return false;
//     }
//     return true; // it is a palindrome
// }


///create a palindromic string of minimum length 3 characters by removing 1 or 2 characters

function makePalindrome(str){
  /////turning into array
 let stringArray = str.split('')
 
 ////////CHARACTERS TO DELETE
 let charactersToDelete = stringArray.filter((elem, index, arr)=>{
       if(arr.length%2===0){
       /////get elemets for even str with even  length
         if(arr[index]!== arr[arr.length-(index+1)]){
             return elem
         }
       }else {
         /////get elemets for even str with odd  length
         if(index===Math.floor(arr.length/2) || elem!==arr[arr.length-(index+1)]){
             return elem
         }
       }
   })
 
 ///////PALINDROME////////
 
   let palindrome = stringArray.filter((elem, index, arr)=>{
       if(arr.length%2===0){
       /////get elemets for even str with even  length
         if(elem === arr[arr.length-(index+1)]){
             return elem
         }
       }else {
         /////get elemets for even str with odd  length
         if(elem===arr[arr.length-(index+1)] && index!==Math.floor(arr.length/2)){
             return elem
         }
       }
   })
 
 if(charactersToDelete.length>0 && charactersToDelete.length<4){
       return charactersToDelete
 }else{
   return false
 }
 
 }
 
 // elem!==arr[arr.length-(index+1)] && 
 // return stringArray
 
 
 makePalindrome('anaidaana')

 /**
 * Have the function PalindromeCreator(str) take the str parameter being passed and determine if it is possible to create a palindromic string of minimum length 3 characters by removing 1 or 2 characters. For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. For this example your program should return the two characters that were removed with no delimiter and in the order they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the string not possible. If the input string is already a palindrome, your program should return the string palindrome.
 * <p>
 * The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters you remove do not have to be adjacent in the string.
 * Examples
 * Input: "mmop"
 * Output: not possible
 * Input: "kjjjhjjj"
 * Output: k
 */

function PalindromeCreator(str){
  if(str===str.split('').reverse().join('')){
    return str
  }else {
    let strArray = str.split('')

    ////array with removing one letter
    let removeOneLetter = strArray.map((letter,index1)=>{
      return strArray.filter((elem,index2)=>index1!==index2).join('')
    })

    ////array with removing second letter
   let removeOtherLetter = removeOneLetter.map((word,index1)=>{
     let lettersArray = word.split('')
        return lettersArray.filter((elem,index2)=>index1!==index2 && index1<lettersArray.length).join('')
     })   


////to take only fist appearance 
const firstAppearance = (arr) =>{
let array = arr.filter(word=>{
  return word === word.split('').reverse().join('') && word.length>2
})
.filter((elem, index)=> index===0);

return array
}

/////palintrome array with first appearance only
let palindromes = [...firstAppearance(removeOneLetter), ...firstAppearance(removeOtherLetter)]

//////checking if , by removing one or two letters, palindromes exist, and filtering original string to check if those letter appear in it 

    if (palindromes.length>0){

       let arrayOfLetters;
       
      palindromes.map(word=>{
       lettersInTheWord = word.split('')
     })  

  return strArray.filter(letter =>!lettersInTheWord.includes(letter))

    } else {
      return 'Not posible'
    }
  }
}

PalindromeCreator('abjchba')

