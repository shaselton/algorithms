/*
 * Light, More Light problem from Programming Challenges.
 *
 * Runtime is ...?
*/
(function(n, d){
	'use strict';

	function light( nbulbs ){
		var lights = Array.apply(null, new Array(nbulbs)).map(Boolean.prototype.valueOf,true), // first iteration, all bulbs are flipped
			finalState;
		for( var walks = 2; walks <= nbulbs; walks++ ){
			for( var bulb = walks; bulb <= nbulbs; bulb *= walks){ // only loop throught the items that are divisible
				lights[bulb-1] = !lights[bulb-1];
			}
		}
		finalState = lights.pop();
		console.log( nbulbs, (finalState) ? 'yes' : 'off' );
	};

	for( var i = 0, len = n.length; i < len; i++ ){
		console.time('light2');
		light( n[i] );
		console.timeEnd('light2');
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