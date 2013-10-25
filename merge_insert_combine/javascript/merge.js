
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
var Merge = function( Arr, p, q, r, k ){
	
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

	left.push( Infinity );  // sentinel card (didn't know javascript had an "Infinity" keyword...pretty awesome.)
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
 * MergeInsertSort
 * This guy starts the chain reaction, recursively, for Merge to be called. 
 * @param Arr array to be sorted
 * @param p the minimum index in which the array is to be sorted
 * @param r the length of the array to be sorted
 * @param k the value of the length we want are sub arrays to sorted by the insert sort.  Basically, we don't want to break up the arrays any farther past this number.
 * @returns nada...works off of a global variable.
 */
var MergeInsertSort = function( Arr, p, r, k ){

	var q,
		tempArr = [];
	if( p < r ){
		q = Math.floor( ( p + r ) / 2 );
		console.log("q",q, "r", r, "p", p);
		if( k < (q - p) ){ // do we want to use the insert sort when we're done splittin' the arrays?
			console.log("merging sorting");
			MergeInsertSort( Arr, p, q, k  );
			MergeInsertSort( Arr, q + 1, r, k );		
			console.log( Arr );
		}else{
			console.log( "tempArr", tempArr, "Arr", Arr );
			tempArr = InsertionSort( Arr.slice( (p-1), k ) );
			for( var i = 0, len = tempArr.length; i < len; i++ ){
				Arr.splice( p - 1 + i, 1, tempArr[i] );
			}
			//Arr.splice( p - 1, k, InsertionSort( Arr.slice( (p-1), k ) ) );
			
			console.log("insert sorting at: ", q, "Arr", Arr, "Arr.slice( (p-1), k )", Arr.slice( (p-1), k ), "tempArr", tempArr);
		}
		Merge( Arr, p, q, r, k );		
	}
	
}

