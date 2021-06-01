

 function PalindromeCreator(str){
    ////If the input string is already a palindrome,  return the string palindrome
    if(str===str.split('').reverse().join('')){
      return str
 
      /////if it is not a palindrome, it will do this---->
    }else {
      ///turning string into array of letters
      let strArray = str.split('')
 
      ////creating array of string: stings are all the posible words after removing one letter
      let removeOneLetter = strArray.map((letter,index1)=>{
        return strArray.filter((elem,index2)=>index1!==index2).join('')
      })
 
       ////creating array of string: string are all possible words after removing second letter from every string from previously created array(the one with one letter missing, not original string)
 
     let removeOtherLetter = removeOneLetter.map((word,index1)=>{
       let lettersArray = word.split('')
          return lettersArray.filter((elem,index2)=>index1!==index2 && index1<lettersArray.length).join('')
       })   
 
 //// creating a function which will filter previously created arrays and give me only the palindromic strings  and take only first appearances
 
 const firstAppearance = (arr) =>{
 let firstWord = arr.filter(word=>{
    return word === word.split('').reverse().join('') && word.length>2
  })
  .filter((elem, index)=> index===0);
 
  return firstWord
 }
 
 /////applying the function on both arrays which creates  array of first appearance palintromes
 let palindromes = [...firstAppearance(removeOneLetter), ...firstAppearance(removeOtherLetter)]
 
 //////checking if , by removing one or two letters, palindromes exist, and filtering original string to check if those letter appear in it 
      if (palindromes.length>0){
 
         let arrayOfLetters;
         
        palindromes.map(word=>{
         lettersInTheWord = word.split('')
       })  
 
    return strArray.filter(letter =>!lettersInTheWord.includes(letter)).join('')
 
      } else {
        return 'Not posible'
      }
    }
 }
 
 PalindromeCreator('abjchba')
 
 
 