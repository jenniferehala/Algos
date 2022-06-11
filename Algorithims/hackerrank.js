process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "1";
var input_stdin_array = "2";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
    var result = a + b;
    return result;
}


function main() {
    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    var res = solveMeFirst(a, b);
    console.log(res);
}

console.log(main)

return solveMeFirst(1, 2)