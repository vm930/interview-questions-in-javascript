// 206. Reverse Linked List
// Reverse a singly linked list.
//Example:

// Input:  1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL

//time o(n)
//space o(1)

var reverseList = function(head) {
	let preval = null;
	let current = head;
	// let nextval = head.next

	// 1<-2<-3<-4  preval
	// null <-5    current

	while (current !== null) {
		let nextval = current.next;
		current.next = preval;
		preval = current;
		current = nextval;
		// nextval = nextval.next;
		// console.log(preval)
		// console.log(current)
		// console.log(nextval)
	}
	// preval.next = null;
	// current.next = preval;
	// console.log(preval);
	return preval;

	while (current !== null) {
		let nextval = current.next;
		current.next = preval;
		preval = current;
		current = nextval;
	}
};
