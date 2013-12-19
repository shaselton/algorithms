/*
 * Light, More Light problem from Programming Challenges.
 *
 * Runtime is O(1)
*/
(function(n, d){
	'use strict';

	function light( walkAmount ){
		console.log( walkAmount, !(Math.sqrt( walkAmount )%1) ? 'yes' : 'off' );
	};

	while( !!n.length ){
		console.time('light3');
		light( n.pop() );
		console.timeEnd('light3');
	}


})([
	1,
	2,
	9,
	729,
	1024,
	8250,
	3910,
	1930,
	256,
	1321,
	8447,
	1969,
	6241,
	6444,
	4926,
	3845,
	9583
], document);