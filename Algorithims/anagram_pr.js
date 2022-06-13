const anagrams = (s1, s2) => {

    const count = {}

    // "of" iterates over the values of an strings (objects)
    for (let char of s1) {

        // "in" iterates over keys of a object (a:, b:, c:)
        if (!(char in count))

        // if(!(char in s1)) - MISTAKE
        // I tried to see if char (letter) was a key of s1
        // but we're iterating thru s1 so we shouldn't compare s1 to s1
        // MISTAKE TYPE: Didn't understand what for loops were iterating over

        // we're looking to see if the s1 char's are "in:(keys)" of the count object
        // therefore we should ask, "is the s1 character inside the COUNT object, using "in" (key) operator
        // we use operator "in" to look at the keys of the count object i.e. "a:, b:. c:" etc. 
        // when we do that we are asking whether s1 character matches one of the keys
        {
            count[char] = 0
        }
        count[char] += 1
    }

    for (let char of s2) {

        //Incomplete Edge Case:         if (s1.length > s2.length) {return false;}
        // Tried to just use the length as an edge case which works
        // it would allow us to know that its false from the get got
        // but forgetting about if they are the same length but one s1 char does not exist in count, what then?
        // what if s2 char does not exist in our count object?
        // that would make it automtically false because there is an unmatching char in s1
        // so we take the char of s2 and use it as a property name of object count (bracket notation)
        // if its not there then that means its false

        if (count[char] === undefined) {
            return false;
        }

        else {

            count[char] -= 1

        }
    };

    // Notation mistake:          if (char === count[char]) {count[char] -= 1}
    // I was trying to see if the s2 char matched the exact object key
    // this was before the if statement above was created
    // it could work in theory, but doesn't account for the edge case of what if it doesn't exist? Wouuld get null I think
    // but in this case, the s2 char is already accounted for in if statement above
    // because now we are in the else statement where we know count[char] exists)
    // now we can decrememt

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