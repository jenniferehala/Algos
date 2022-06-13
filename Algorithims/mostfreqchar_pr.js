const mostFrequentChar = (s) => {

    const count = {}

    // instantiate/add
    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0
        }

        count[char] += 1
    }

    // store characters in second key category

    // categorization error     const best = ""
    // I made best equate to an empty string, but it would be better to make it null
    // why?


    let best = null;
    // Also made the mistake of looping through count, when i should have been looping through s the string
    // Categorical Mistake = string better?
    // solution uses string but you could use count too. Same result
    //  for (let char in count)

    for (let char of s) {
        if (best === null || count[char] > count[best])
            // I didn't factor in if best doesn't exist (which happens when before the loop instantiates it)
            // So "if (count[char] > count[best])" would return empty because best is always empty unlees you account for it in if statement
            best = char;
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