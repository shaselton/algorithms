/**
 * @implementer shaselton
 * @reference Introductions to Algorithms 2nd ed, page 532
 * @param [Graph]
 * The runtime of this basic sorting algorithm is O(Cn^2) where C = constant.
 */

'use strict';

var WHITE = 0, GRAY = 1, BLACK = 2;

var BFS_ADJACENCY = function( Graph, size ){
	var nodes = [],
		queue = []; // line 8

	/**
	 * lines 1-4 pg. 532
	 */
	for( var i = 0, len = Graph.length; i < len; i++ ){
		nodes[i] = {
			color : WHITE,
			distance : Infinity,
			predecssor : null,
			adjNodeValues : Graph[i],
			value: i
		};
		console.log( 'new node added!', nodes[i] );
	};

	/**
	 * initialize
	 * lines 5-7
	 */
	if( !!nodes[0] ){
		nodes[0].color = GRAY;
		nodes[0].distance = 0;
	}else{
		console.log( 'empty graph' );
		return false;
	}

	queue.push( nodes[0] ); // line 9

	while( queue.length > 0 ){ // line 10
		var node = queue.pop(); // line 11
		for( var i = 0, len = node.adjNodeValues.length; i < len; i++ ){ // 12
			console.log( 'scanning near by nodes!', node.adjNodeValues[i], nodes[node.adjNodeValues[i]] );
			if( nodes[node.adjNodeValues[i]].color === WHITE ){ // 13
				nodes[node.adjNodeValues[i]].color = GRAY; // 14
				nodes[node.adjNodeValues[i]].distance = node.distance + 1; // 15
				nodes[node.adjNodeValues[i]].predecssor = node; // 16
				console.log( 'new node found! Changing colors to GRAY', nodes[node.adjNodeValues[i]].value, nodes[node.adjNodeValues[i]] );
				console.log( 'queue entry!' );
				queue.push( nodes[node.adjNodeValues[i]] ); // 17
			}
		}
		console.log( 'current node search finished! Turn to BLACK', node.value, node );
		node.color = BLACK; // 18
	}

};

var adjacencyList = [ [1, 4], [0, 4, 2, 3], [1, 3], [1, 4, 2], [3, 0, 1] ];
BFS_ADJACENCY( adjacencyList );