// const numbers = [3, 8, 4, 6, 10];
// let count = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) count++;
// }
// console.log(count);

// const fruits = ["apple", "banana", "orange", "banana"];
// for (i = 0; i < fruits.length; i++) {
//   switch (fruits[i]) {
//     case "apple":
//       console.log("Apple found");
//       break;
//     case "banana":
//       console.log("banana found");
//       break;
//     case "orange":
//       console.log("orange found");
//       break;
//     default:
//       console.log("Not Found");
//   }
// }

// console.log(selectOdds([3, 2, 4, 5, 7])); //=> [3, 5, 7]
// console.log(selectOdds([2, 4, 6])); //=> []

// function countEvenNumbers(numbers) {
//   let evenNumbers = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) evenNumbers++;
//   }

//   return evenNumbers;
// }
// console.log(countEvenNumbers([3, 8, 4, 7, 10]));

// function findLargest(numbers) {
//   if (numbers.length < 1) return null;
//   let largest = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargest([]));

// function findSmallest(numbers) {
//   if (numbers.length < 1) return null;
//   let smallest = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       smallest = numbers[i];
//     }
//   }

//   return smallest;
// }

// console.log(findSmallest([]));

// function countOccurrences(numbers, target) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === target) count += 1;
//   }
//   return count;
// }

// console.log(countOccurrences([2, 5, 2, 8, 2], 2));

// const student = {
//   name: "Ravi",
//   scores: [60, 80, 80],
// };
// function getAverageScore(student) {
//   let sum = 0;
//   for (let i = 0; i < student.scores.length; i++) {
//     sum = sum + student.scores[i];
//   }
//   const avg = sum / student.scores.length;
//   return avg;
// }
// console.log(getAverageScore(student));

// function getAverage(numbers) {
//   if (numbers.length < 1) return null;
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum / numbers.length;
// }

// console.log(getAverage([]));
// console.log(getAverage([10, 20, 30]));

// function findLargest(numbers) {
//   if (numbers.length < 1) return null;
//   let largest = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//       largest = numbers[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargest([-8, -3, -10]));
// console.log(findLargest([]));

// function countNegitive(numbers) {
//   let count = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countNegitive([-2, 0, 5, 8, -1]));

// function removeNegativeNumbers(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       numbers.splice(i, 1);
//       i -= 1;
//     }
//   }

//   return numbers;
// }

// console.log(removeNegativeNumbers([2, -4, -6, 8, -1]));
