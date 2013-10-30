/**
 * Consider the following algorithm to generate a sequence of numbers. 
 * Start with an integer n. If n is even, divide by 2. If n is odd, 
 * multiply by 3 and add 1. Repeat this process with the new value of n, 
 * terminating when n = 1. For example, the following sequence of numbers 
 * will be generated for n = 22:

22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1
It is conjectured (but not yet proven) that this 
algorithm will terminate at n = 1 for every integer n. 
Still, the conjecture holds for all integers up to 
at least 1, 000, 000.

For an input n, the cycle-length of n is the number of numbers 
generated up to and including the 1. In the example above, 
the cycle length of 22 is 16. Given any two numbers i and j, 
you are to determine the maximum cycle length over all numbers 
between i and j, including both endpoints.

Input

The input will consist of a series of pairs of integers i and j, 
one pair of integers per line. All integers will be 
less than 1,000,000 and greater than 0.

Output

For each pair of input integers i and j, output i, j in the same order 
in which they appeared in the input and then the maximum cycle length 
for integers between and including i and j. These three numbers 
should be separated by one space, with all three numbers on one line 
and with one line of output for each line of input.

Sample input       Sample Output
1 100              1 10 20
100 200            100 200 125
201 210            201 210 89
900 1000           900 1000 174



//shaselton
 */
;(function(){

	var program = document.getElementById( 'program' ),
		result = document.getElementById( 'results' ),
		input,
		startPoint,
		endPoint;

	program.addEventListener( 'keydown', readInput) ;

	function readInput( event ){
		if( event.keyCode === 13 ){
			input = program.value.split(' ');
			if( input.length >= 2 ){
				startPoint = parseInt( input[0], 10 );
				endPoint = parseInt( input[1], 10 );
				if( isNaN( startPoint ) || isNaN( endPoint ) ){
					return false;
				}
				var results = solution( startPoint, endPoint );
				result.value = startPoint + " " + endPoint + " " + results[0];
				console.log( results );
			}
		}
	};

	var solution = function( startPoint, endPoint ){

		var highest = [],
			i = startPoint,
			currentValue = 0,
			count = 0,
			sequence = [],
			log = [];

		function compute( startPoint ){
			count++;
			console.log(startPoint, count);
			sequence.push( startPoint );
			if( 1 === startPoint ){
				return count;
			}
			if( 0 ===  startPoint % 2 ){
				compute( startPoint/2 );
			}else{
				compute( startPoint * 3 + 1 );
			}
		}

		for( ; i <= endPoint; i++ ){
			compute( i );
			log.push({
				input: i,
				sequence: sequence,
				length: sequence.length
			});

			if( sequence.length > currentValue ){
				currentValue = sequence.length;
			}

			sequence = [];
			count = 0;

		}

		return [ currentValue, log ];
		
	}
})();