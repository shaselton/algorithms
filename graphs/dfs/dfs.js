/**
 * @implementer shaselton
 * @reference Introductions to Algorithms 2nd ed, page 541
 * @param [Graph] represented in an adjacency list 
 */

var GRAPH_SPEED = 1000,
	j = 0,
	createNodes,
	time;

'use strict';

var WHITE = 0, GRAY = 1, BLACK = 2;

var DFS_ADJACENCY = function( Graph ){
	var nodes = [],
		queue = []; 

	console.warn( 'STARTING A NEW TRAVERSAL' );
	console.time( "time" );

	for( var i = 0, len = Graph.length; i < len; i++ ){
		nodes[i] = {
			color : WHITE,
			predecssor : null,
			adjNodeValues : Graph[i],
			startTime: 0,
			endTime: 0,
			value: i
		};
		console.log( 'new node added!', nodes[i] );
	};

	time = 0;
	
	for( var j = 0, len = nodes.length; j < len; j++ ){
		if( nodes[j].color === WHITE ){
			DFS_VISIT(nodes[j], nodes);
		}
	}

	console.log( nodes );
	console.timeEnd( "time" );

};

var DFS_VISIT = function( node, nodes ){
	node.color = GRAY;
	time += 1;
	node.startTime = time;
	for( var i = 0, len = node.adjNodeValues.length; i < len; i++ ){
		if( nodes[node.adjNodeValues[i]].color === WHITE ){
			nodes[node.adjNodeValues[i]].predecssor = node;
			DFS_VISIT( nodes[node.adjNodeValues[i]], nodes );
		}
	}
	node.color = BLACK;
	time += 1;
	node.endTime = time;
};

var adjacencyUndirectedList = [ [1, 4], [0, 4, 2, 3], [1, 3], [1, 4, 2], [3, 0, 1] ],
	twoRootedjacencyUndirectedList = [ [1, 4], [0, 4, 2, 3], [1, 3], [1, 4, 2], [3, 0, 1], [5] ],
	adjacencyDirectedList = [ [1, 3], [4], [5, 4], [1], [3], [5] ];
DFS_ADJACENCY( adjacencyUndirectedList );
DFS_ADJACENCY( twoRootedjacencyUndirectedList );
DFS_ADJACENCY( adjacencyDirectedList );