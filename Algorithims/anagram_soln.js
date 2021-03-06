const anagrams = (s1, s2) => {
    const count = {};
    //for..of iterates over the values of an iterable object (arrays, strings, nodeList)    
    for (let char of s1) {
        // for..in iterates over all enumerable property keys of an object
        if (!(char in count)) {
            count[char] = 0
        }
        count[char] += 1;
    }

    for (let char of s2) {
        if (count[char] === undefined) {
            return false;
        }
        else {
            count[char] -= 1;
        }
    }

    for (let char in count) {
        if (count[char] !== 0) {
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