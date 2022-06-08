// Wrong Answer
// var twoSum = function (arr, target) {

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] + arr[i + 1] == target) {
//             let answer = [i, (i + 1)];
//             return answer;
//         }
//     }

// };

// console.log(twoSum([2, 7, 11, 15], 9));


// New Answer for leetcode

var twoSum = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] == target - arr[i]) {
                return [i, j]
            }
        }
    }
    return [0, 0]
}

console.log(twoSum([2, 7, 11, 15], 9));



