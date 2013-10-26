/**
 * @implementer shaselton
 * @reference Introductions to Algorithms 2nd ed, page 532
 * @param [Graph] represented in an adjacency list 
 */

var GRAPH_SPEED = 1000,
	j = 0,
	createNodes;

'use strict';

var WHITE = 0, GRAY = 1, BLACK = 2;

var BFS_ADJACENCY = function( Graph ){
	var nodes = [],
		queue = []; // line 8

	console.warn( 'STARTING A NEW TRAVERSAL' );
	console.time( "time" );
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


	//createNodes = setInterval('drawNodes(nodes)', GRAPH_SPEED);

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
	console.log( 'current queue', queue );
	while( queue.length > 0 ){ // line 10
		var node = queue.pop(); // line 11
		console.log( 'queue pop(), current queue', queue, node );
		for( var i = 0, len = node.adjNodeValues.length; i < len; i++ ){ // 12
			console.log( 'scanning near by nodes!', node.adjNodeValues[i], nodes[node.adjNodeValues[i]] );
			if( nodes[node.adjNodeValues[i]].color === WHITE ){ // 13
				nodes[node.adjNodeValues[i]].color = GRAY; // 14
				nodes[node.adjNodeValues[i]].distance = node.distance + 1; // 15
				nodes[node.adjNodeValues[i]].predecssor = node; // 16
				console.log( 'new node found! Changing colors to GRAY', nodes[node.adjNodeValues[i]].value, nodes[node.adjNodeValues[i]] );
				console.log( 'queue entry!' );
				queue.unshift( nodes[node.adjNodeValues[i]] ); // 17
				console.log( 'current queue', queue );
			}
		}
		console.log( 'current node search finished! Turn to BLACK', node );
		node.color = BLACK; // 18
	}

	console.timeEnd( "time" );

};

var drawNodes = function( nodes ){
	var html_node = document.createElement('div');
	if( nodes.length > j ){
		html_node.className = 'node';
		html_node.innerHtml = nodes[j].value;
		document.querySelector('.board').appendChild(html_node);
		++j;
	}else{
		clearInterval(createNodes);
	}
};

var adjacencyUndirectedList = [ [1, 4], [0, 4, 2, 3], [1, 3], [1, 4, 2], [3, 0, 1] ],
	adjacencyDirectedList = [ [1, 3], [4], [5, 4], [1], [3], [5] ];
BFS_ADJACENCY( adjacencyUndirectedList );
BFS_ADJACENCY( adjacencyDirectedList );