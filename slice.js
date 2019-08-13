function largestPiece(radii, numberOfGuests) {
	//use pi
	//3.14159265359
	const pi = 3.14159265359;
	// sorting the array by desceding order
	radii.sort(function(a, b) {
		return b - a;
	});

	let biggestRadii = radii[0];
	let s = 0; //area of smallest possible slice
	let l = Math.pow(biggestRadii, 2) * pi; //area biggest possible slice of cake

	//if 7 slices > number of guest 6
	//mid 4.5
	//s = mid

	// if 1 slice < number of guest 6
	//mid 4.5
	//l = mid

	//constraint end - start > 1e-4
	while (l - s > 1e-4) {
		let midpoint = (s + l) / 2; //midpoint for how many slice
		let numberOfSlice = 0;

		for (let i = 0; i < radii.length; i++) {
			numberOfSlice = numberOfSlice + Math.floor(Math.pow(radii[i], 2) * pi / midpoint);
		}

		if (numberOfSlice >= numberOfGuests) {
			s = midpoint;
		} else {
			l = midpoint;
		}
	}
	return Math.round((s + l) / 2 * 10000) / 10000;
}

console.log(largestPiece([ 3, 2, 2, 1, 1, 1 ], 6));
console.log(largestPiece([ 1, 3, 2, 2, 1, 1 ], 7));
console.log(largestPiece([ 3, 2, 2, 1, 1, 1 ], 9));

// Math.round(1000 * X) / 1000
