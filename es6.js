const numbers = [23, 12, 54, 64];

const student = {
    name: 'Sayem Bhuiyan',
    age: 22,
    movies: ['Avtar', 'Endgame', 'Gentlemen']
};

student.age = 21;

// templete string
const aboutMe = `My name is ${student.name}. I'm ${student.age} years old. My sellary is ${numbers[0]} & my favorite movies is ${student.movies[2]}`
// console.log(aboutMe);
console.log(Object.keys(student));
console.log(Object.values(student))

// arrow function
const getFiftyFive = () => 55;
const addSixty = num => num + 60;
const isEven = num => num % 2 === 0;
const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}



// Spread operator

// just copy the existing arry to a new arry 
const newNumbers = [...numbers];

// copy the arry and add a element using spread operator
const currentNumbers = [...numbers, 45];
