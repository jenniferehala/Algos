// const compress = (s) => {
//     var i = 0
//     var j = 0
//     //   maybe i need two variables
//     var results = []

//     while (j < s.length) {
//         j++
//         if (s[i] == s[j]) {
//             continue;
//         }
//         else {
//             //   first slice so you have only the grouped characters
//             //   count however many string characters there are length
//             var str = s.slice(i, j)
//             var length = str.length
//             if (length == 1) {
//                 results.push(s[i])
//                 i = j
//             }
//             else {
//                 results.push(length)
//                 results.push(s[i])
//                 i = j
//             }

//         }
//     }
//     return results.join("");

// };

// console.log(compress('ccaaatssss')); // '2c3at3s'
// console.log(compress('ssssbbz')); // '4s2bz'
// console.log(compress('ppoppppp')); // '2po5p'
// console.log(compress('nnneeeeeeeeeeeezz')); // '3n12e2z'
// console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); // '127y'

// MisApproach: I didn't factor in that there would be two string characters next to each other
// so the single character would be counted as a number
// have to put in an edge case
// I also could decrease time complexity like below?

// structy

const compress = (s) => {
    var i = 0
    var j = 0
    var results = []

    while (j <= s.length) {
        if (s[i] == s[j]) {
            j++
        }
        else {
            const count = j - i
            if (count === 1) {
                results.push(s[i])
            }
            else {
                results.push(count + s[i])

            }
            i = j
        }
    }
    return results.join("");
};
console.log(compress('ccaaatsss')); // '2c3at3s'
console.log(compress('ssssbbz')); // '4s2bz'
console.log(compress('ppoppppp')); // '2po5p'
console.log(compress('nnneeeeeeeeeeeezz')); // '3n12e2z'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); // '127y'
