const pairProduct = (numbers, targetProduct) => {

    previousNums = {}

    for (var i = 0; i < numbers.length; i++) {

        let complement = targetProduct / numbers[i];
        if (complement in previousNums) {
            return [previousNums[complement], i]
        }
        // instantiate the key value pair
        previousNums[numbers[i]] = i;

    }
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)) // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)) // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)) // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)) // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)) // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)) // -> [2, 3]
