let arr = [11, 4, 33, 1, 3, 2];
let sum = 5;

function TwoSum(arr, sum) {
    arr.sort((a, b) => a - b);   // sort first

    let left = 0;
    let right = arr.length - 1;
    let result = [];

    while (left < right) {
        let current = arr[left] + arr[right];

        if (current === sum) {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        }
        else if (current < sum) {
            left++;
        }
        else {
            right--;
        }
    }

    return result;
}

console.log(TwoSum(arr, sum));
