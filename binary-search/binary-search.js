'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	//find the root by splitting the array and rounding up
	let root = Math.floor(array.length / 2 )
		//cut the array in half, lowest numbers on the left and highest on the right
	let lowArray = array.slice(0, root)
	let highArray = array.slice(root);
	if (target === root) {
		return true
	} else if (target < root) {
		if (lowArray.length < 2 && root !== target) {
			return false
		} else {
			binarySearch(lowArray, target)
		}
	} else {
		 if (binarySearch(highArray, target)) {
			return true
		} else {
			return false
		}
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
