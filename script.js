function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let closestSum = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            if (sum > target) {
                right--;
            } else {
                left++;
            }
        }
    }
    return closestSum;
}

module.exports = threeSum;


