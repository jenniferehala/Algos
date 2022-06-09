const uncompress = (s) => {
    var res = [];
    var i = 0;
    for (var j = 1; j < s.length; j++) {
        const isNum = !isNaN(s[j])
        if (isNum) {
            j++;
        }
        const num = Number(s.slice(i, j));
        for (let count = 0; count < num; count++) {
            if (s[j] > 0) {
                break;
            }
            res.push(s[j]);

        }
        j++
        i = j
    }
    return res.join("");
};

console.log(uncompress("3n12e2z")) // 'nnneeeeeeeeeeeezz'
console.log(uncompress("2c3a1t")) // "ccaaat"
console.log(uncompress("4s2b")) // 'ssssbb'
console.log(uncompress("2p1o5p")) // 'ppoppppp'
console.log(uncompress("10y")) // 'yyyyyyyyyyyyyyyyyyyyyyyyy'

// Smaller Time Complexity