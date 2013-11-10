/**
 *
 Australian ballots require that voters rank all the candidates in order of choice. Initially only the first choices are counted, and if one candidate receives more than 50% of the vote then that candidate is elected. However, if no candidate receives more than 50%, all candidates tied for the lowest number of votes are eliminated. Ballots ranking these candidates first are recounted in favor of their highest-ranked non-eliminated candidate. This process of eliminating the weakest candidates and counting their ballots in favor of the preferred non-eliminated candidate continues until one candidate receives more than 50% of the vote, or until all remaining candidates are tied.

Input

The input begins with a single positive integer on a line by itself indicating the number of cases following, each as described below. This line is followed by a blank line. There is also a blank line between two consecutive inputs.

The first line of each case is an integer n$ \le$20 indicating the number of candidates. The next n lines consist of the names of the candidates in order, each up to 80 characters in length and containing any printable characters. Up to 1,000 lines follow, each containing the contents of a ballot. Each ballot contains the numbers from 1 to n in some order. The first number indicates the candidate of first choice; the second number indicates candidate of second choice, and so on.

Output

The output of each test case consists of either a single line containing the name of the winner or several lines containing the names of all candidates who are tied. The output of each two consecutive cases are separated by a blank line.

Sample Input

1

3
John Doe
Jane Smith
Jane Austen
1 2 3
2 1 3
2 3 1
1 2 3
3 1 2
Sample Output

John Doe

// implemented: shaselton
 */

;(function(){
	'use strict';

	var voting = function( candidate, votes ){
		var // http://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array
			totals = Array.apply(null, new Array(candidate.length)).map(Number.prototype.valueOf,0),
			totalVotes = votes.length,
			lowest = Infinity;


		/**
		 * TODO: this method of removing candidates isn't the greatest.
		 * It could produce unexpected results if there happens to be candidates
		 * with the same name...  
		 */
		function removeCandidate( candidateIndex ){
			for( var j = 0, len = votes.length; j < len; j++ ){
				for( var i = 0, candidateLength = candidate.length; i < candidateLength; i++ ){
					// remove the votes for the candidate that was just removed
					if( votes[j][i] === candidateIndex ){
						votes[j].splice(i, 1);
					}

					// this adjusts the votes to make sure index is out of bounds
					if( votes[j][i] > candidate.length ){
						votes[j][i] -= 1;
					}
				}
			}
		};

		// count the votes
		for( var i = 0, len = votes.length; i < len; i++ ){
			totals[(votes[i][0]-1)] += 1;
		}

		console.log(totals);

		//check for 50% (and look for the lowest if 50% isn't determined)
		for( var i = 0, len = candidate.length; i < len; i++ ){
			//check lowest
			if( lowest > totals[i] ){
				lowest = totals[i];
			}

			//check 50%
			if( ((totals[i] / totalVotes).toFixed(4) * 100 ).toFixed(2) >= 50 ){
				return candidate[i];
			}
		}

		//check to see who is the lowest
		for( var i = 0, len = candidate.length; i < len; i++ ){
			if( totals[i] === lowest ){
				removeCandidate( (i + 1) );
			}
		}

		return voting( candidate, votes );

	};
	console.log(voting(['scott', 'erin', 'traci'], [[3,2,1],[2,1,3],[3,2,1],[2,1,3],[1,2,3]]  ));

})();