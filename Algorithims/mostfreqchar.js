const mostFrequentChar = (s) => {
    const count = {};

    for (let letter of s) {
        if (!(letter in count)) {
            count[letter] = 0;
        }
        count[letter] += 1
    }

    //I didn't know how to read through count object and store the letter
    // When I first thought of the counter, I thought it would count a number
    // in this example, I just replaced the letter with the next letter that was more
    // so I am essentially comparing numbers (quantities) but I didn't know how to use the hash map to compare the quantities
    // max value with hash map i should practice
    // its just a replaement of the letter with the maximum value in the object
    // I also didn't know that you could use a new variable to create a new object so easily
    // so count[best] is just null but I instantiated it within the for loop
    // I was trying to do this but with the logic I learned from camp
    // trying to store the letter value somehow
    // but I already stored the letter value in the hasmap
    // and I was able to store the letter itself in a new object key called "best" and compare the two

    let best = null;
    for (let letter of s) {
        if (best === null || count[letter] > count[best]) {
            best = letter
        }
    }

    return best;

};

console.log(mostFrequentChar('bookeeper'))     // 'e'
console.log(mostFrequentChar('david'))         // 'd'
console.log(mostFrequentChar('abby'))          // 'b'
console.log(mostFrequentChar('mississippi'))   // 'i'
console.log(mostFrequentChar('potato'))        // 'o'
console.log(mostFrequentChar('eleventennine')) // 'e'
console.log(mostFrequentChar("riverbed"))      // 'r'