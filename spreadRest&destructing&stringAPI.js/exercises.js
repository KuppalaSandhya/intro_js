// const headAndTail = function (nums) {
//   const [head, ...tail] = nums;
//   return {head, tail};
// };

// console.log(headAndTail([1, 2, 3, 4]));
// console.log(headAndTail([1]));

// const withoutPassword = function (obj) {
//   const {password, ...details} = obj;
//   return details;
// };
// console.log(withoutPassword({name: "Asha", password: "secret", city: "Pune"}));

// const longest = function (first, ...remaingWords) {
//   let largest = first;

//   for (const word of remaingWords) {
//     if (word.length > largest.length) {
//       largest = word;
//     }
//   }
//   return largest;
// };

// const words = ["apple", "fig", "banana", "kiwi"];
// console.log(longest(...words));

// const addToFront = function (list, item) {
//   const newList = [item, ...list];
//   return newList;
// };
// const list = ["bread", "egg", "milk"];
// const item = "curd";
// console.log(addToFront(list, item));
// console.log(list);

// const markDone = function (task, markDone = true) {
//   return {...task, markDone};
// };

// const task = {
//   name: "sandhya",
// };
// console.log(markDone(task));
// console.log(task);

// const formatUserSummary = function (user) {
//   const {fullName: name, role = "Guest", skills} = user;
//   const [primarySkill, , secondarySkill] = skills;

//   return `${name}, ${role}, topSkills : ${primarySkill} & ${secondarySkill}`;
// };

// const user = {
//   id: 42,
//   fullName: "Aarav Sharma",
//   role: "Intern",
//   skills: ["HTML", "CSS", "JavaScript", "Git"],
// };
// console.log(formatUserSummary(user));
