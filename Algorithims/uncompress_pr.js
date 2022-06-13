const uncompress = (s) => {

    // first I tried to variables to 1) have numbers 1234556789 to detect in for loop
    // 2) I made a definition for j set to zero
    // 3) I had a result to push the final letters into

    // Improper Planning Mistake
    //let number = [123456789]
    // let result = []
    // let j = 0

    // the numbers was fine, but I didn't think to match the numbers to the type of input, as a string""
    // I thought it would literally look for the whole string, 123 million, 1467 thousand, etc.

    // for the variable j, I knew I was going to need two variables, j and i
    // but i did not plan on how the for loops would work exactly

    let numbers = "123456789"
    let result = []
    var i = 0
    var j = 0

    // Iteration Mistake:  for (var i = 0; i < s.length; i++)
    // I didn't think about how I had to set i and j to the same value and that j travels frist
    // We are going to loop but should start with the variable that moves first


    while (j < s.length) {

        //I correctly detected numbers but didn't iterate the j, i.e. j++
        // this is why it wouldn't look like a normal for loop with these conditions where we have to have
        // specfic incrementing as a result of a criterion
        // also this is why we can't have a for loop, it expects three operations, while loop can just loop through j < s.length
        // we could break it but we'll go with the platform soln for now


        if (numbers.includes(s[j])) {
            j++;
        }

        // Condition and Iteration mistake =     for (count = number; count < s.length; count++)
        // didn't consider the condition of the "else" in the if statement
        // if not number else (letter) then we create a counter for loop
        // my counter for loop is ....
        // for (count = number; count < s.length; count++) {}
        // now we can store the previous indices, i.e. s[i] until s[j] to store number

        // Knowledge Blind Spot  - did not think of slice method () to help store indices with numbers

        else {
            let num = s.slice(i, j)
            for (count = 0; count < num; count++) {
                result.push(s[j]);

            }

            // forgot to include j++ and i=j to continute the loop after insertion into result

            j++
            i = j


        }

        //incorrect placement of i=j setting


    }
    return result.join("")
}

console.log(uncompress("3n12e2z")) // 'nnneeeeeeeeeeeezz'
console.log(uncompress("2c3a1t")) // "ccaaat"
console.log(uncompress("4s2b")) // 'ssssbb'
console.log(uncompress("2p1o5p")) // 'ppoppppp'
console.log(uncompress("25y")) // 'yyyyyyyyyyyyyyyyyyyyyyyyy'