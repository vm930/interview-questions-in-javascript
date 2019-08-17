// Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
	let fast = head;
	let slow = head;

	for (let i = 0; i < n; i++) {
		fast = fast.next;
	}
	// console.log(fast)

	if (fast === null) {
		return head.next;
	}

	while (fast.next !== null) {
		slow = slow.next;
		fast = fast.next;
	}

	// console.log("fast",fast)
	// console.log("slow",slow)
	slow.next = slow.next.next;
	return head;
};
