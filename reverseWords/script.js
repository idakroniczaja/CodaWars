// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let arr1 = str.split(' ')
    return arr1.map((ele,i,arr) => ele.split('').reverse().join('')).join(' ')
   }