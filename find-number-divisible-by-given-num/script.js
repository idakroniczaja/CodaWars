let numbers = [1, 2, 3, 4, 5, 6];
let divisor = 2;

function divisibleBy(numbers, divisor){
  return numbers.filter(number=>number%divisor===0)
}

divisibleBy(numbers, divisor)