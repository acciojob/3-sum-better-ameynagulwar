function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b);
	let closetSum = Infinity;

	for(let i = 0; i < arr.length-2; i++){
		let left = i + 1;
		let right = arr.length - 1;

		while(left < right){
			const sum = arr[i] + arr[left] + arr[right];
			 if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
             closestSum = sum;
		}
		
      if (sum > target){
        right--;
      } 
	  else {
        left++;
      }
			
	}
  
}
	return closetSum;
}

module.exports = threeSum;