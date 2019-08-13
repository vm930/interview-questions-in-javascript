function findlargestsqmaxtrix(matrix) {
	//set a temp arr
	//set a highval
	let temp = [];
	let highval = 0;

	//initialize an array
	for (let i = 0; i < matrix.length; i++) {
		let temp2 = [];
		temp.push(temp2);
		for (let j = 0; j < matrix[0].length; j++) {
			temp2.push(0);
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				//find the top  temp[i-1][j]
				//find the left top  temp[i-1][j-1]
				//find the left temp[i][j-1]
				let top = 0;
				let leftTop = 0;
				let left = 0;
				// console.log(i, j);
				// console.log(i - 1, j);
				if (temp[i - 1] !== undefined) {
					top = temp[i - 1][j];
				}

				if (temp[i - 1] !== undefined && temp[i - 1][j - 1] !== undefined) {
					leftTop = temp[i - 1][j - 1];
				}
				if (temp[i][j - 1] !== undefined) {
					left = temp[i][j - 1];
				}
				//look for minium num & set it +=1
				let minVal = Math.min(top, leftTop, left);
				temp[i][j] = minVal + 1;

				if (temp[i][j] > highval) {
					highval = temp[i][j];
				}
			}
		}
	}
	return highval;
	// console.log(temp);
}

console.log(
	findlargestsqmaxtrix([
		[ 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 0 ],
		[ 1, 1, 1, 1, 0 ],
		[ 1, 1, 1, 1, 0 ],
		[ 0, 1, 1, 1, 0 ]
	])
);
console.log(findlargestsqmaxtrix([ [ 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 0 ], [ 1, 1, 1, 1, 0 ] ]));
