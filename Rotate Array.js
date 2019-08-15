//Leetcode Rotate Array
// Input: [1, 2, 3, 4, 5, 6, 7] and k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// Input: [-1, -100, 3, 99] and k = 2
// Output: [3, 99, -1, -100]

var rotate = function(nums, k) {
	//splice the array from (0 to k) and store in a variable
	//push the variable to the end of the array; subtract k-=1
	while (k >= 0) {
		let temp = nums.splice(0, 1);
		nums.push(temp[0]);
		k--;
	}
	console.log(nums);
};

rotate([ 1, 2, 3, 4, 5, 6, 7 ], 3);
rotate([ -1, -100, 3, 99 ], 2);
