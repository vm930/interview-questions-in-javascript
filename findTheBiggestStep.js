function findTheBiggestStep(n, k) {
	//n=4;
	//k=6  >bad step that needs to be skipped
	//biggest number of step: k-1
	let output = 0;
	let isContainsBadStep = false;

	for (let i = 1; i < n + 1; i++) {
		output += i;
		if (output === k) {
			isContainsBadStep = true;
		}
	}

	if (isContainsBadStep) {
		return output - 1;
	} else {
		return output;
	}
}

console.log(findTheBiggestStep(4, 6));
console.log(findTheBiggestStep(4, 5));
