// Santa's elves are boxing presents, and they need your help! Write a function that takes two sequences of dimensions of the present and the box, respectively, and returns a Boolean based on whether or not the present will fit in the box provided. The box's walls are one unit thick, so be sure to take that in to account.

// Examples: Present and box respectively

// [10, 7, 16], [13, 32, 10] --> true, box is bigger than present
// [5, 7, 9], [9, 5, 7]      --> false, present and box are same size
// [17, 22, 10], [5, 5, 10]) --> false, box is too small
//Solution1
function willFit(present, box){
    let sortedBox = box.sort((a, b) => a - b);
    console.log(sortedBox)
    let sortedPresent = present.sort((a, b) => a - b);
    console.log(sortedPresent)
    return sortedBox.every((element, index) => element - 1 > sortedPresent[index])
  
  }

  //Solution2
  function willFit(present, box){
    let sortedBox = box.sort((a, b) => a - b);
    console.log(sortedBox)
    let sortedPresent = present.sort((a, b) => a - b);
    console.log(sortedPresent)
    return !sortedBox.some((element, index) =>{
      console.log((element-1),sortedPresent[index], [index])
      return element-1  <= sortedPresent[index]
    });
  }

// Solution3
function willFit(present, box){
  let sortedBox = box.sort((a, b) => a - b);
   console.log(sortedBox)
   let sortedPresent = present.sort((a, b) => a - b);
   console.log(sortedPresent)
   return !sortedBox.some((element, index) =>{
     console.log((element-1),sortedPresent[index], [index])
     return element-1  <= sortedPresent[index]
   });
 }

 //Sol4
 function willFit(present, box){
  let sortedBoxs = box.sort((a, b) => a - b);
  let sortedPesents = present.sort((a, b) => a - b);
  return !sortedBoxs.some((element, index) => element - 1 <= sortedPesents[index]);
}