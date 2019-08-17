function spellingBeeSolutions(wordlist, puzzles) {
	// wordlist: ['APPLE', 'PLEAS', 'PLEASE']
	// puzzles: ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPXY', 'XAELPSY']

	//[0, 1, 3, 2, 0]
	let lookup = {};
	let sortedPuzzles = [];
	let solution = [];

	//store the wordlist in a obj with key as sorted letters, value as number of time this has occur
	//go thru array of wordlist and sort them
	for (let i = 0; i < wordlist.length; i++) {
		let uniqLetters = [ ...new Set(wordlist[i]) ];
		let sortedUniqLetters = uniqLetters.sort().join('');
		// console.log(uniqLetters)
		if (lookup[sortedUniqLetters] === undefined) {
			lookup[sortedUniqLetters] = 1;
		} else {
			lookup[sortedUniqLetters]++;
		}
	}
	//sort the puzzles
	for (let j = 0; j < puzzles.length; j++) {
		let sortedWord = puzzles[j].split('').sort().join('');
		sortedPuzzles.push(sortedWord);
	}

	//loop thru sortedPuzzles
	// need to look for the 1st keyword

	for (let k = 0; k < sortedPuzzles.length; k++) {
		let counter = 0;
		let checker = puzzles[k][0];
		if (lookup[checker]) {
			counter += lookup[checker];
		}
		for (let l = 0; l < 7; l++) {
			if (sortedPuzzles[k][l] !== puzzles[k][0]) {
				//add letter to the string to compare
				checker += sortedPuzzles[k][l];
				checker.split('').sort().join('');
				if (lookup[checker]) {
					counter += lookup[checker];
				}
			}
		}
		solution.push(counter);
	}

	return solution;
}

spellingBeeSolutions([ 'APPLE', 'PLEAS', 'PLEASE' ], [ 'AELPSXY', 'AELWXYZ', 'AELPXYZ' ]);
