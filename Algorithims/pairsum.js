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

    const previous = {}


    for (let num of numbers) {

        if (previous[num] === undefined) {
            previous[num] = 0
        }

        previous[num] = num
    }

    for (let index in numbers) {
        let complement = targetSum - index

        if (previous[complement]) {
            return index, complement
        }
    }
};

console.log(pairSum([3, 2, 5, 4, 1], 8)) // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)) // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3))  // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)) // -> [1, 2]
console.log(pairSum([9, 9], 18)) // -> [0, 1]
console.log(pairSum([6, 4, 2, 8], 12)) // -> [1, 3]