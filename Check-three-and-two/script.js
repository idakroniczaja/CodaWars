function checkThreeAndTwo(array) {
  let filterA = array.filter(elem => elem === 'a').length;
   let filterB = array.filter(elem => elem === 'b').length;
   let filterC = array.filter(elem => elem === 'c').length;
   
   return (filterA === 3 || filterB === 3 || filterC === 3) && (filterA === 2 || filterB === 2 || filterC === 2);
   }


   function checkThreeAndTwo(array) {
    const counts = array.reduce((result, letter) => {
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
      
      return result;
    }, {});
    
    const containsThree = Object.values(counts).some(x => x === 3);
    const containsTwo = Object.values(counts).some(x => x === 2);
    
    return containsThree && containsTwo;
  }