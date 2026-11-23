/*function isEven(number) {
return number % 2 === 0;
}console.log(isEven(12));
console.log(isEven(17));
console.log(isEven(24));
const result=isEven(12);
console.log(result);*/
function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return !isEven(number);
}

console.log(isOdd(12));
