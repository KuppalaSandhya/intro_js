// const add = function (x, y) {
//   return x + y;
// };

// const subtract = function (x, y) {
//   return x - y;
// };

// const multiply = function (x, y) {
//   return x * y;
// };

// const a = add(10, 20);
// const b = subtract(50, 10);
// const c = multiply(5, 6);

// console.log(a);
// console.log(b);
// console.log(c);

// const width = 12;
// const height = 5;

// const area = function (width, height) {
//   return width * height;
// };

// const perimeter = function (width, height) {
//   return 2 * (width + height);
// };

// const result = {
//   area: area(width, height),
//   perimeter: perimeter(width, height),
// };

// console.log(result);

//nested objects and arrays
// const company = {
//   name: "Acme",
//   ceo: {name: "Meera", joined: 2015},
//   offices: ["Pune", "Bengaluru", "Delhi"],
// };

// const {
//   name: companyName,
//   ceo: {name: ceoName},
//   offices: [headOffice],
// } = company;
// console.log(companyName, ceoName, headOffice);

// const {name: companyName} = company;
// const {name: ceoName} = company.ceo;
// const [headOffice] = company.offices;

// console.log(companyName, ceoName, headOffice);

// const address = {
//   street: "madiwala",
//   city: "bagloore",
//   pin: 518911,
// };

// const formatAddress = function (address) {
//   return address.street + ", " + address.city + " - " + address.pin;
// };

// console.log(formatAddress(address));

// const formatAddress = function ({street, city, pin}) {
//   return street + ", " + city + " - " + pin;
// };
// console.log(formatAddress(address));

// const createUser = function ({name, role = "intern", active = "active"}) {
//   if (!active) active = "inactive";
//   return name + " is an " + active + " " + role;
// };

// console.log(createUser({name: "Asha"}));
// //   => "Asha is an active intern"
// console.log(createUser({name: "Ravi", role: "mentor", active: false}));
// //   => "Ravi is an inactive mentor"

// // quotient => 3, remainder => 2
// const divide = function (divident, divisor) {
//   const quotient = Math.floor(divident / divisor);
//   const remainder = divident % divisor;
//   return {quotient, remainder};
// };

// const {quotient, remainder} = divide(17, 5);
// console.log(quotient, remainder);

// const stock = {pens: 40, pencils: 0, erasers: 12, notebooks: 0};
// for (const [item] of Object.entries(stock)) {
//   if (stock[item] === 0) console.log(item);
// }

// const sum = function (...numbers) {
//   console.log(numbers);

//   let total = 0;

//   for (const number of numbers) {
//     total = total + number;
//   }

//   return total;
// };

// console.log(sum());
// const introduce = function (host, ...guests) {
//   return host + " welcomes " + guests.length + " guests";
// };

// console.log(introduce("Asha", "Ravi", "Meera", "Imran"));

// const avg = function (...nums) {
//   let sum = 0;
//   for (const num of nums) {
//     sum += num;
//   }
//   const avg = (sum / nums.length).toFixed(2);
//   return avg;
// };

// console.log(avg(3, 5, 6));

// const numbers = [4, 9, 1, 7];
// console.log(Math.max(...numbers));

// const fruits = ["apple", "banana"];
// const vegetables = ["carrot", "pea"];

// // const food = [...fruits, ...vegetables];
// // const food = fruits.concat(vegetables);
// const food = ["bread", ...fruits, "rice", ...vegetables, "milk"];

// console.log(food);

// const a = [1, 2];
// const b = [3, 4];
// console.log(0, ...a, ...b, 5);

// const min = function (nums) {
//   return Math.min(...nums);
// };

// console.log(min([8, 3, 12, 5]));

// const nums = [1, 2, 3, 4, 5];
// const copy = [...nums, 6];
// // copy.push(6);
// console.log(nums);
// console.log(copy);

// console.log(Math.min(...[]));
// const basics = {name: "Asha", age: 24};
// const contact = {email: "asha@example.com", city: "Pune"};

// const profile = {...basics, ...contact};

// console.log(profile);

// const birthday = function (person) {
//   return {age: person.age + 1, ...person};
// };

// const asha = {name: "Asha", age: 24};
// const older = birthday(asha);

// console.log(asha);
// console.log(older);

// const obj = {x: 1, y: 2};
// const copy = {...obj, x: 4};
// console.log(obj);
// console.log(copy);

// const combine = function () {
//   return values;
// };
// console.log(combine({a: 1}, {b: 2}, {c: 3}));

// const basics = null;

// const profile = [...basics];
// console.log(profile);
