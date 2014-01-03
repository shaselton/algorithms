;(function(ms){
	'use strict';

	/*
	4.1
	Goal: Solve in O(n log n) time.
	Merge sort has a O(n log n) runtime...lets us it.
	Divide the numbers as polorized as possible
	 */
	function four_one( sizeOfTeam, rankingMax ){
		var totalPlayerAmount = 2 * sizeOfTeam,
			playerRankings = random(totalPlayerAmount, rankingMax),
			sortedPlayers = ms.init( playerRankings );
		console.log( "lower half team: ", sortedPlayers.splice( 0, Math.floor( totalPlayerAmount/2) ), " upper half team: ", sortedPlayers);
	}

	function random( players, maxRating ){
		var result = [];

		for( var i = 0; i < players; i++){
			result.push( Math.floor( Math.random() * maxRating ) + 1 );
		}

		return result;
	}

	four_one(10, 100);

})( mergeSort );