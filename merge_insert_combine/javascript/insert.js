/**
 * @author Scott Haselton
 * @reference Introductions to Algorithms 2nd ed, page 17
 * @param arrayToSort
 * The runtime of this basic sorting algorithm is O(Cn^2) where C = constant.
 */


var InsertionSort = function( arrayToSort ){
	var key,
		initialItem = arrayToSort[0],
	    sortedArray = [arrayToSort[0]], // fill up the first element of the array to be sorted into the sorted array.
	    i;
	
	// looping through the array the needs to be sorted
	for( var j = 1, len = arrayToSort.length; j < len; j++ ){
		key = arrayToSort[ j ];
		i = j - 1;
		while( i >= 0 && sortedArray[ i ] > key ){
			sortedArray[ i + 1 ] = sortedArray[ i ];
			i -= 1;
		}
		sortedArray[ i + 1 ] = key;
	}	

	console.log("InsertionSort: sortedArray", sortedArray, "arrayToSort", arrayToSort, "Array.isArray()", Array.isArray(arrayToSort), "initialItem", initialItem );
	return sortedArray;
}



