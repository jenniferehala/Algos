// const pairSum = (numbers, targetSum) => {

//     for (var i = 0; i < numbers.length; i++) {
//         for (var j = 1; j < numbers.length; j++) {

//             if (numbers[i] + numbers[j] === targetSum) {
//                 return [i, j]
//             }

//             else {
//                 continue;
//             }
//         }

//     }

//     return false
// };

// console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
// console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
// console.log(pairSum([4, 7, 9, 2, 5, 1], 3))  // -> [3, 5]
// console.log(pairSum([1, 6, 7, 2], 13)) // -> [1, 2]
// console.log(pairSum([9, 9], 18)) // -> [0, 1]
// console.log(pairSum([6, 4, 2, 8], 12)) // -> [1, 3]


const pairSum = (numbers, targetSum) => {

    const previousNums = {}

    // Mistake: Incorrect application of HashMap
    // I didn't need to instantiate the hasmap and have every number defined like I did with mostfreqchar algo
    //for (let num of numbers) {if (previous[num] === undefined) {previous[num] = 0} previous[num] = num}

    for (var i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i]
        if (complement in previousNums) {
            return [i, previousNums[complement]]
        }

        previousNums[numbers[i]] = i;
    }

    // I had the right idea to loop through i in numbers but I didn't use an increment expression which wouldn't allow it to loop
    // I wanted to get the complement, which is fine, but I thought and if statement with the object and complement as a key
    // would give me what I needed
    // that complement was already in the object (i thin which goes with my last statement i guess)
    //    for (let index in numbers) {let complement = targetSum - index if (previous[complement]) {return index, complement}}


};

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3))  // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)) // -> [1, 2]
console.log(pairSum([9, 9], 18)) // -> [0, 1]
console.log(pairSum([6, 4, 2, 8], 12)) // -> [1, 3]