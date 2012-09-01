/**
 * @author Scott Haselton
 * @reference Introductions to Algorithms 2nd ed, page 17
 * @param arrayToSort
 * The runtime of this basic sorting algorithm is O(Cn^2) where C = constant.
 */


var InsertionSort = function( arrayToSort ){
	var key,
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
	return sortedArray;
}

var unsortedArray = [2,1,6,3,4,10,1,4,1,5,76,4,3,2,5,6,6,3,23,7,3,5,1,67,28,5,3,12,5];

var sortedArray = new InsertionSort( unsortedArray );

console.log( unsortedArray, sortedArray );

