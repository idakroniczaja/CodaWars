function solve(s){
    let vowelArray = s.replace(/[^aeiou]/ig, ' ').split(' '); 
 let longestStr = vowelArray.reduce(function(a, b) {
     return a.length > b.length ? a : b;
   });
 
   return longestStr.length;
 }

 const solve = s => s.split(/[^aeiou]/).reduce((s,n)=> Math.max(s,n.length),0);

 function longestVowel(s) {
  let vowelArray = s.split(/[^aeiou]/); 
let longestStr = vowelArray.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });

  return longestStr.length;
}
