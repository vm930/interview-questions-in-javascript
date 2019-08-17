// 206. Reverse Linked List

// Reverse a singly linked list.
//Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
var reverseList = function(head) {
	// Input:   1->2->3->4->5->NULL
	// Output:  5->4->3->2->1->NULL

	//null <- 1 <- 2 <- 3 <- 4 <-5

	//preval = null  2
	//current = head  3
	//nextval = head.next 4

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
};
