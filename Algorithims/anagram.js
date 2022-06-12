// // I was trying to split the string into an array that I could loop through
// // but that was unecessary. I can loop through the values normally
// // Then I try a nexted for loop so that I could compare each index of string 2 to the one indice of str1
// // this is wrong because it looks like we can use simple math to (compare length/sort compare) 
// //or create hash map and incrememnt/decrement with hash map and two for loops
// // one loop for instantiating hash map keys, and then incrementing with for loop as it recognized new character "char"
// // then second for loop, which will loop through values not keys, can be decremented, and that if a char/value doesn't exist to return false
// //finally making sure we the hash map equates to zero

// const anagrams = (s1, s2) => {
//     let str1 = s1.split("")
//     let str2 = s2.split("")
//     let arr = []

//     for (var i = 0; i < str1.length; i++) {
//         for (var j = 0; j < s2.length; j++) {
//             //here im trying to compare i to j, but for nested for loops, it's usually within the same string not two different ones
//             if (str1[i] == str2[j]) {
//                 // so then I npush the found letter into new str, but this seems repetitive. I think I was trying to
//                 // in the end compare the new string with old string and see if they match
//                 arr.push(str1[i])
//                 // then I'm trying to remove the j that was found so that s2 will equate to 0 eventually, which
//                 // is to account for double letters so that the leftover string, if it contains the same letter, it will be there to be counted and not missed
//                 str2 = str2.splice(j, 0)
//                 console.log(str2)
//                 break;
//                 // the issue with this strategy is that we are still not in the s2 (nested for loop)
//                 // seems like comparing it one by one like this is so repetitive and time consuming
//                 // it would be etter for two separate for loops perhaps. 
//                 // but i get the idea of trying to chop down s2 so that you don't have to worry about repeated characters
//                 // so in this case you could probably just do the one for loop not nested to compare s1 and s2
//             }
//         }
//     }
//     // so right the new string compared to the old string. 
//     if (arr1 === str1) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };
// console.log(anagrams('restful', 'fluster')); // true
// console.log(anagrams('cats', 'tocs')); // false
// console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
// console.log(anagrams('paper', 'reapa')); // false
// console.log(anagrams('elbow', 'below')); // true
// console.log(anagrams('tax', 'taxi')); // false
// console.log(anagrams('taxi', 'tax')); // false


// Here I was thinking that if I just make a new string (pushing it each time) and match it to the original string
//However, it did not work for test case where there were repeat numbers
// to fix that, I tried to splice it out, but then got causght up with the conversions or array to string
// did not figure it out that way. 
// there's a way nto do it this way I just have to go back in my notes.


// const anagrams = (s1, s2) => {

//     let str1 = s1.length
//     let str2 = s2.length

//     if (str1 !== str2) {
//         return false;
//     }

//     let strA = s1.split("").sort("").join('')
//     let strB = s2.split('').sort('').join('')

//     if (strA !== strB) {
//         return false;
//     }

//     return true;
// };
// console.log(anagrams('restful', 'fluster')); // true
// console.log(anagrams('cats', 'tocs')); // false
// console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
// console.log(anagrams('paper', 'reapa')); // false
// console.log(anagrams('elbow', 'below')); // true
// console.log(anagrams('tax', 'taxi')); // false
// console.log(anagrams('taxi', 'tax')); // false

// function anagrams(a, b) {
//     let len1 = a.length;
//     let len2 = b.length;
//     if (len1 !== len2) {
//         console.log('Invalid Input');
//         return
//     }
//     let str1 = a.split('').sort().join('');
//     let str2 = b.split('').sort().join('');
//     if (str1 === str2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(anagrams('restful', 'fluster')); // true
// console.log(anagrams('cats', 'tocs')); // false
// console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
// console.log(anagrams('paper', 'reapa')); // false
// console.log(anagrams('elbow', 'below')); // true
// console.log(anagrams('tax', 'taxi')); // false
// console.log(anagrams('taxi', 'tax')); // false


// I was trying to split the string into an array that I could loop through
// but that was unecessary. I can loop through the values normally
// Then I try a nexted for loop so that I could compare each index of string 2 to the one indice of str1
// this is wrong because it looks like we can use simple math to (compare length/sort compare) 
//or create hash map and incrememnt/decrement with hash map and two for loops
// one loop for instantiating hash map keys, and then incrementing with for loop as it recognized new character "char"
// then second for loop, which will loop through values not keys, can be decremented, and that if a char/value doesn't exist to return false
//finally making sure we the hash map equates to zero

const anagrams = (s1, s2) => {


    // edge case
    if (s1.length !== s2.length) {
        return false
    }

    let a = s1.split('').sort().join('')
    let b = s2.split('').sort().join('')

    console.log((a === b ? true : false))

};
console.log(anagrams('restful', 'fluster')); // true
console.log(anagrams('cats', 'tocs')); // false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
console.log(anagrams('paper', 'reapa')); // false
console.log(anagrams('elbow', 'below')); // true
console.log(anagrams('tax', 'taxi')); // false
console.log(anagrams('taxi', 'tax')); // false