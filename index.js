// let start = +prompt("start: ");
// let end = +prompt("end: ");
// let amount = +prompt("amount: ");

// let i = 0;
// var sum = 0;
// while(true) {
//     let num = +prompt(Enter ${i + 1} number: )
//     if(num >= start && num <= end) {
//         i++
//         sum += num
//     } else {
//         console.log(Your number ${num} is not in range)
//     }

//     if(i == amount) break
// }

// console.log(sum)

// try {
//   throw new Error(

//   )

// } catch (err) {
//   console.log(`Your number ${num} is not in range`);

// } finally {
//   console.log(sum);
// }

// const user = {
//   name: "John",
//   surname: "Smith",
// }

// user.name = "Pete";
// // delete user.name;

// console.log(user);
// let salaries = {
//   john: 1000,
//   mark: 2000,
//   jack: 500
// };

// let sum = 0;

// for(let key in salaries) {
//   sum += salaries[key]
// }

// alert(sum);

// let isPrime = (number) => {
//   if(number % 2 == 0) {
//     console.log("Number Is Prime");
//   } else {
//     console.log("Number is ODD");
//   }
// }
// isPrime(17)

// let arr = [];

// for (let i = 1; i < 10; i = i + 2) {
//   arr.push(i)
// }

// console.log(arr);

// let random = () => {
//   return Math.floor(Math.random() * 11 );
// }

// console.log(random());

function getCapitalLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(getCapitalLetter("Hello"));
