const n = 4;
let numbers = [];
let factorial = 1;

for (let i = 2; i <= n + 1; i++) {
  let num = i - 1;
  numbers.push(num);

  if (numbers.length === n) {
    for (let i = 0; i < numbers.length; i++) {
      factorial = factorial * numbers[i];
    }
  }
}

console.log(factorial);
