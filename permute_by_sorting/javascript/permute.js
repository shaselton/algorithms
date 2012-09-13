/**
 * @author haselton
 * Simple randomly permuting arrays function
 * pg 101 Intro to Algorithms
 */

var PermuteBySorting = function( Arr ){
	var priority = {},
		priorityArr = [],
		result = [],
		len = Arr.length,
		value;
	console.log("initial array: ", Arr );
	for( var i = 1; i <= len; i++ ){
		
		priority[ i - 1 ] = ( Math.round( Math.random( 0, 1 ) * Math.pow( len, 3 ) ) );  // basically a random value that is inclusive from (1, n^3)
		priorityArr.push( priority[ i - 1 ] );
		
	}
	
	console.log("priority obj: ", priority );
	priorityArr.sort();
	console.log("priorityArr sorted: ", priorityArr );
	
	for( var j = 1; j <= len; j++ ){
		
		for ( var key in priority ) {

		    if ( priority.hasOwnProperty( key ) && priority[ key ] == priorityArr[ j - 1 ] ) {
		        result.push( Arr[ key ] );
		        break
		    }
		   
		}
		
	}
	return result;
};


var testarray = [1,2,3,4,5,6,7,8,9,0];

console.log( PermuteBySorting( testarray ) );
