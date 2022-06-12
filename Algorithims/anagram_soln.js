const anagrams = (s1, s2) => {
    let count = {}

    for (let char in s1) {
        // iterate through the keys
        // then set key to 0
        // if found, we increment count object key
        if (!(char in count)) {
            count[char] = 0
        }
        count[char] += 1;
    }
    // iterate over property values
    // if not found, return false
    // if found, decrement object key so a:1-1=0 => a:0, b:1, c:1
    for (let char of s2) {
        if (char === null) {
            return false
        }
        else {
            count[char] -= 1
        }
    }

    //still have to loop through object
    // if the keys don't equal 0, then its false. All keys should equal zero.
    for (let char in count) {
        if (count[char] != 0) {
            return false;
        }
    }

    return true;

};

console.log(anagrams('restful', 'fluster')); // true
console.log(anagrams('cats', 'tocs')); // false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
console.log(anagrams('paper', 'reapa')); // false
console.log(anagrams('elbow', 'below')); // true
console.log(anagrams('tax', 'taxi')); // false
console.log(anagrams('taxi', 'tax')); // false