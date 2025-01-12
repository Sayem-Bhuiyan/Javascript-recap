const reverseText = (text) => {
    let reverse = "";
    for (let i = text.length - 1; i >= 0; i--){
        let element = text[i]
        reverse += element;
    }
    return reverse;
}

const reversed = reverseText("Sayem")
console.log(reversed);