const anagrams = (s1, s2) => {

    let count = {}

    for (let char in s1) {

        if (!(char in count)) {
            //this is to initalize the character into count object
            count[char] = 0
        }
        count[char] += 1;
    }

    for (var i = 0; i < s2.length; i++) {

    }


};

console.log(anagrams('restful', 'fluster')); // true
console.log(anagrams('cats', 'tocs')); // false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
console.log(anagrams('paper', 'reapa')); // false
console.log(anagrams('elbow', 'below')); // true
console.log(anagrams('tax', 'taxi')); // false
console.log(anagrams('taxi', 'tax')); // false