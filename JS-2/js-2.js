
function sumInput() {
    let rule = false;
    const inputNums = [];
    // console.log(inputNums);
    // console.log(typeof inputNums);
    do {
        numValue = prompt("Please enter numbers only");
        // console.log(numValue);
        // console.log(typeof numValue);
        rule = /^[0-9]+$/.test(numValue);
        // console.log(rule);
        // console.log(typeof rule);

        if (isNaN(numValue)) {
            alert("Sorry, This is not a number")
        } else {
            inputNums.push(Number(numValue));
        }
    }
    while (rule);

    let sunNum = 0;
    for (i in inputNums) {
        sunNum += inputNums[i];
        // console.log(startNum)
    }
    console.log(sunNum)
    alert("The sum of the numbers you entered is " + sunNum);
}
