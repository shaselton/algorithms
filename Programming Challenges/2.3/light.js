/*
 * Light, More Light problem from Programming Challenges.
 *
 * Runtime is O(n^2)
*/
(function(n, d){
	'use strict';

	function light( nbulbs ){
		var lights = Array.apply(null, new Array(nbulbs)).map(Boolean.prototype.valueOf,false),
			finalState;
		for( var walks = 1; walks <= nbulbs; walks++ ){
			for( var bulb = 1; bulb <= nbulbs; bulb++ ){
				if( 0 === bulb % walks ){
					lights[bulb-1] = !lights[bulb-1];
				}
			}
		}
		finalState = lights.pop();
		console.log( nbulbs, (finalState) ? 'yes' : 'off' );
	};

	for( var i = 0, len = n.length; i < len; i++ ){
		//console.time('light');
		light( n[i] );
		//console.timeEnd('light');
	}


})([
	1,
	2,
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