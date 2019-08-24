// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.
// Given linked list -- head = [4,5,1,9], which looks like following:

//Input: head = [4,5,1,9], node = 5
// Output: [4, 1, 9]
// Input: head = [4, 5, 1, 9], node = 1
// Output: [4, 5, 9]

function deleteNote(node) {
	// 4 5 1 9
	// 4 1 5 9
	// 4 1 9 5
	// 4 1 9
	// node = node.next;
	// console.log(node)
	// console.log(node.next.val)

	const initval = node.val;

	while (node.next) {
		let temp = node.next.val;
		node.next.val = node.val;
		node.val = temp;
		if (node.next.next === null) {
			// node = node.next
			node.next = null;
		} else {
			node = node.next;
		}

		// console.log(node.next)
	}
}
