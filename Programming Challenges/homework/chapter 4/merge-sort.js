var mergeSort = {};

/**
 * The initial implementation was due in part of the Algorithm Design Manual.  
 * After implementing, much of the same js ideas were verified here: http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
 * 
 */
;(function( ms ){
	'use strict';
	var mergeSort = {};
	/**
	 * The classic divide and conquer base of the algorithm
	 * @param  {array} list [list to be divided]
	 * @param  {int} low  [the lower index of the array segment]
	 * @param  {int} high [the top index of the array segment]
	 * @return {[type]}      [description]
	 */
	mergeSort.divide = function( list ){
		
		if( list.length < 2 ){
			return list;
		}

		var middle = Math.floor( list.length / 2 ),
			leftSide = list.splice( 0, middle ),
			rightSide = list;

		return mergeSort.merge( mergeSort.divide( leftSide ), mergeSort.divide( rightSide ) );
	};

	/**
	 * reassembling the broken recursive array in order
	 * @param  {array} leftSide   [the array to be sorted]
	 * @param  {array} rightSide    [the lowest index of the array]
	 */
	mergeSort.merge = function( leftSide, rightSide ){
		var result = [],
			leftCount = 0,
			rightCount = 0,
			leftLength = leftSide.length,
			rightLength = rightSide.length;

		/**
		 * The O(n) runtime in the O( n log n ) end result
		 */
		while( rightLength > rightCount && leftLength > leftCount ){
			/**
			 * sorting the smallest first.
			 */
			if( leftSide[leftCount] < rightSide[rightCount] ){
				result.push( leftSide[leftCount++] );
			}else{
				result.push( rightSide[rightCount++] );
			}
		}

		/**
		 * This particular style was found here: http://www.nczonline.net/blog/2012/10/02/computer-science-and-javascript-merge-sort/
		 */
		result = result.concat( leftSide.slice( leftCount ) ).concat( rightSide.slice( rightCount ) );
		console.log(result);
		return result;
	};

	/**
	 * The public initialize method to merge sort.
	 * @param  {array} list  the array the needs to be sorted or broken down
	 */
	ms.init = function( list ){
		return mergeSort.divide( list );
	};

})(mergeSort);
