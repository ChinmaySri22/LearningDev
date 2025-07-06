const countVowel = (msg) => {
    let count = 0;
    for (const m of msg) {
        if (m === "a" || m === "e" || m === "i" || m === "o" || m === "u") {
            count++;
        }
    }
    console.log(count);
}

const arr = [3,2,5,6,2,1,4];

arr.forEach((val)=>{
    console.log(val*val)
})


