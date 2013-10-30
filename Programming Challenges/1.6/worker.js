
onmessage = function (event) {

	var count = 0,
		sequence = [];

	startPoint = event.data;
	function compute( startPoint ){
		count++;
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

	compute( event.data );

  postMessage( [count, sequence] );
};