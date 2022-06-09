// const isPrime = (n) => {
//     if (n == 1 || n == 0) {
//         return false;
//     }
//     for (var i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isPrime(3)) // true
// console.log(isPrime(4)) // false
// console.log(isPrime(5)) // true
// console.log(isPrime(1)) // false

//***************************
// Decreases time complexity with sqrt function
//***************************

const isPrime = (n) => {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(3)) // true
console.log(isPrime(4)) // false
console.log(isPrime(5)) // true
console.log(isPrime(1)) // false