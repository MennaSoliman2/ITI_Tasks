const numbers = [10, 22, 13, 4, 15, 6, 27, 8, 9, 11];

const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd numbers:", oddNumbers);

const evenNumbers = [];
numbers.forEach(num => {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
});
console.log("Even numbers:", evenNumbers);

const squaredNumbers = numbers.map(num => num*num);
console.log("Squared numbers:", squaredNumbers);

////////////////////////////////// task2//////////////////////////////
console.log(".......for in.......")
const number = [10, 20, 30, 40, 50];
for (let i in number) {
  console.log(number[i]);
}
console.log(".......for  of......")
for (let value of number) {
  console.log(`${value}`);
}
console.log(".......foreach......")
number.forEach(value => {
  console.log(`${value}`);
});