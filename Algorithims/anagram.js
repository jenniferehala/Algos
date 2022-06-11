const anagrams = (s1, s2) => {
    let str1 = s1.split("")
    let str2 = s2.split("")
    let arr1 = []
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            if (str1[i] == str2[j]) {
                arr1.push(str1[i])

                str2 = str2.splice(j, 0)
                console.log(str2)
                break;
            }
        }
    }
    if (arr1 === str1) {
        return true;
    }
    else {
        return false;
    }
};
console.log(anagrams('restful', 'fluster')); // true
console.log(anagrams('cats', 'tocs')); // false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // true
console.log(anagrams('paper', 'reapa')); // false
console.log(anagrams('elbow', 'below')); // true
console.log(anagrams('tax', 'taxi')); // false
console.log(anagrams('taxi', 'tax')); // false


// Here I was thinking that if I just make a new string (pushing it each time) and match it to the original string
//However, it did not work for test case where there were repeat numbers
// to fix that, I tried to splice it out, but then got causght up with the conversions or array to string
// did not figure it out that way. 
// there's a way nto do it this way I just have to go back in my notes.