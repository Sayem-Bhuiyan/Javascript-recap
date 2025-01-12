const names = ["Sayem Bhuiyan", "Ashraful Islam Akash", "Tipu Ahsan", "Shajib Sarker"]

let longName = names[0]

for(let i = 0; i < names.length; i++){
    if(longName.length < names[i].length){
        longName = names[i]
    }
}

console.log(longName);

const numbers = [12, 23, 34, 54, 65, -54, 45, 23];

let newNumbers = [];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        newNumbers.push(numbers[i])
    }else {
        break;
    }
}
console.log(newNumbers);

for(const item of newNumbers){
    console.log(item);
}