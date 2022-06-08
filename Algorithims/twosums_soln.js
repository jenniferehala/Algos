var twoSum = function (arr, target) {
    var map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[target - arr[i]] >= 0) {
            return [map[target - arr[i]], i]
        }
        else {
            map[arr[i]] = i;   //use map to store the value and index position
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));