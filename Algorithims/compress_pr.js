const compress = (s) => {
    var result = ""
    var i = 0
    var j = 0

    while (j < s.length) {
        // Better Conditional Choice       if (s[j] !== s[i]) {j++ i = j}
        // Start from matching
        if (s[j] === s[i]) {
            j++
            i = j
        }
        // Too many conditionals and not enough logic behind it
        // if (s[j] !== s[i] && s[j] !== s[j + 1]) {result += s[j] j++ i = j}
        // I was trying to explicitly say if s[j] does not equal s[i], which I did in the other statement above
        // and the next letter isn't the same, then we push.
        // a little crowded in conditionals and a repeat

        let count = j - i;
        for (count = 0; count < s.length; count++) {
            result += s[i]
        }

        j++
        i = j


    }

    return result;

}

console.log(compress('ccaaatsss')); // '2c3at3s'
console.log(compress('ssssbbz')); // '4s2bz'
console.log(compress('ppoppppp')); // '2po5p'
console.log(compress('nnneeeeeeeeeeeezz')); // '3n12e2z'
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')); // '127y'
