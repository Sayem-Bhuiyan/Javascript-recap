const products = [
    {name: 'Macbook', price: 132000, brand: 'apple', color: 'silver'},
    {name: 'Phone', price: 32000, brand: 'samsung', color: 'black'},
    {name: 'watch', price: 1900, brand: 'hawaie', color: 'off-white'},
    {name: 'phone', price: 30000, brand: 'itel', color: 'blue'},
    {name: 'laptop', price: 82000, brand: 'hp', color: 'silver'}
]

for(const product of products){
    console.log(product);
}

const divition = 40/3;
// console.log(divition.toFixed(2));


const number = 21 % 2;
// console.log(number);

const numbers = [2, 45, 21, 87, 90];
const positionIndex = numbers.indexOf(21);
// console.log(positionIndex);
numbers.push(32);
numbers.unshift(23);
numbers.shift();
numbers.shift();
console.log(numbers);

