var twoSum = function (arr, target) {
    for (var i = 0; i < arr.length; i++) {
        // work out the complement
        // eg. arr[i] === 3, target === 7, the complement will be 4
        var complement = target - arr[i];

        // Iterate the rest of the number and check if the complement of arr[i] exists
        // This part takes a lot of time
        var found = arr.indexOf(complement, i + 1);
        if (found !== -1) {
            return [i, found];
        }
    }
    return [0, 0];
};

console.log(twoSum([3, 6, 10], 9));