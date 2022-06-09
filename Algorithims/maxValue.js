// const maxValue = (nums) => {
//     var max = nums[0]
//     for (var i = 1; i < nums.length; i++) {
//         if (nums[i] > max) {
//             max = nums[i];
//         };
//     };
//     return max;
// };

// console.log(maxValue([3, 4, 2, 7, 3, 8]));

// structy soln

const maxValue = (nums) => {
    var max = -Infinity
    for (let num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
};

console.log(maxValue([3, 4, 2, 7, 3, 8]));
