const numbers = [23, 12, 43, 54,24, 87];
const newNumbers = [];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(let i = numbers.length -1; i >= 0; i--){
    const number = numbers[i];
    // console.log(number);

    // if(number < 15) {
    //     break;
    // }

    if(number < 15){
        continue;
    }
    newNumbers.push(number)
}

console.log(newNumbers);