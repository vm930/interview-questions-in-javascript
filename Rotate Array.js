//Leetcode Rotate Array
// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]

var rotate = function(nums, k) {
	//[1,2,3,4,5,6,7] and k = 3
	//[5,6,7,1,2,3,4]

	// step1 reverse all the numbers [7,6,5,4,3,2,1] k=3
	// step2 reverse the k numbers [5,6,7,4,3,2,1]
	// step3 reverse rest [5,6,7,1,2,3,4]

	let newNums = reverse(nums, 0, nums.length - 1);
	reverse(newNums, 0, k - 1);
	reverse(newNums, k, newNums.length - 1);

	function reverse(arr, startIndx, lastIndx) {
		let i = lastIndx;
		let j = startIndx;

		while (j < i) {
			let temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
			i--;
			j++;
		}
		return arr;
	}
	// console.log(arr);
	// console.log(newNums);
};

rotate([ 1, 2, 3, 4, 5, 6, 7 ], 3);
rotate([ -1, -100, 3, 99 ], 2);
