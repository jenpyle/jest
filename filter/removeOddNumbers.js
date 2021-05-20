const removeOddNumbers = arr => {
    // let evenNumbers = [];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         evenNumbers.push(arr[i]);
    //     }
    // }
    // return evenNumbers;
    return arr.filter(elem => elem % 2 === 0);
}

export default removeOddNumbers;


// var arr = [1, 2, 3, 4, 5, 6]
// removeOddNumbers(arr) => [2, 4, 6]
// removeOddNumbers([]) => []
// removeOddNumbers([2, 4, 6, 8]) => [2, 4, 6, 8]