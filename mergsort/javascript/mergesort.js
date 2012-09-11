/**
 * @author Scott Haselton
 * @reference Introductions to Algorithms 2nd ed, starting at page 29
 * @speed O( n log n )
 * @size O( 1 ) hey-o!!.
 * @notes explanation for the O( n log n ) might be a bit hard for these notes.  On pg 33, you can see the mathematical explanation.
 */

/**
 * Merge!!
 * This function is the second part of the recursion calls that are splitting the array by 2.  
 * It compares the parts of the arrays, builds two arrays to sort against each other to build out the final output.
 * @param Arr the array that is being worked upon
 * @param p the left most element in the Arr we wish to compare and merge.
 * @param q the left most element of the second half of the array block we wish to sort
 * @param r is the total length of the arrays to be merged.
 * @note this rule should be followed: p <= q < r
 */
var Merge = function( Arr, p, q, r ){
	
	var n1, n2, left = [], right = [], index, i, j;
	n1 = q - p + 1;
	n2 = r - q;
	for( i = 0; i < n1; i++ ){
		index = p + i - 1;
		left.push( Arr[index] ); // we have to remember that array lookup is at the zero index.
	}
	
	
	
	for( j = 0; j < n2; j++ ){
		index = q + j;
		right.push( Arr[index] ); // we have to remember that array lookup is at the zero index.
	}
	
	left.push( Infinity ); // sentinel card (didn't know javascript had an "Infinity" keyword...pretty awesome.)
	right.push( Infinity ); // sentinel card.
	
	i = 0;
	j = 0;


	for( var k = (p-1); k < r; k++ ){
		if( left[i] <= right [j] ){
			Arr[k] = left[i];
			i++;
		}else{
			Arr[k] = right[j];
			j++;
		}
	}
	
}


/**
 * MergeSort
 * This guy starts the chain reaction, recursively, for Merge to be called. 
 * @param Arr array to be sorted
 * @param p the minimum index in which the array is to be sorted
 * @param r the length of the array to be sorted
 * @returns nada...works off of a global variable.
 */
var MergeSort = function( Arr, p, r ){
	
	var q;
	if( p < r ){
		q = Math.floor( ( p + r ) / 2 );
		MergeSort( Arr, p, q );
		MergeSort( Arr, q + 1, r );
		Merge( Arr, p, q, r );
	}
	
}

arrayToSort = [2,1,6,3,4,10,1,4,1,5,76,4,3,2,5,6,6,3,23,7,3,5,1,67,28,5,3,12,5];

MergeSort( arrayToSort, 1, arrayToSort.length );

console.log( arrayToSort );
