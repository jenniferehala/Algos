const pairSum = (numbers, targetSum) => {

    previousNum = {}

    for (var i = 0; i < numbers.length; i++) {

        // so the value of numbers[0] = 3 and numbers[1] = 2 in first example
        // that way we are assigning the value of the index inside the hash map
        // in this case "3" a key, and the index as its corresponding pair value "0"

        // to know the difference between the targetSum and the current value for each round of the loop
        // so 8 - numbers[0] == 8 - 3 which is 5
        // so if 
        let complement = targetSum - numbers[i]

        // why would complement be in previousNum key?
        // just found out: at some point in the loop, it will loop to the numbers[i] complement of complement
        // so if we have numbers[i] =  5, it's targetSum - 5, which is 3, so the complement of 5 is 3
        // 3:0 was instantiated previously, so it finds it and stops the loop to return the
        // previousNum[complement] and i, the indice of 5 we are looking at

        if (complement in previousNum) {

            return [previousNum[complement], i]

        }

        // this is where we instantiate the keys in our object
        previousNum[numbers[i]] = i


    }

};

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3))  // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)) // -> [1, 2]
console.log(pairSum([9, 9], 18)) // -> [0, 1]
console.log(pairSum([6, 4, 2, 8], 12)) // -> [1, 3]