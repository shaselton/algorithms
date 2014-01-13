/**
 * Notes on why to use adjacency lists vs matrices (most of the time)
 * Reference can be found on pg 152 in 'The Algorithm Design Manual'
 * --------------------------------------------------------------------------------------
 * Faster to test if (x,y) is in graph?    	|	adjacency matrices
 * Faster to find the degree of a vertex?	|	adjacency list
 * Less memory on small graphs?				|	adjacency lists (m+n) va (n^2)
 * Less memory on big graphs?				|	adjacency matrices (a small win)
 * Edge insertion or deletion?				|	adjacency matrices O(1) vs. O(d)
 * Faster to traverse the graph?			|	adjacency lists Omega(m+n) vs Omega(n^2)
 * Better for most problems?				|	adjacency lists
 * --------------------------------------------------------------------------------------
 */

/**
 * not really needed...  Could use if implementing in C, struct
 */
function EdgeNode( ){
	this.y = null; 		// adjacency info
	this.weight = null;	// weight of the edge, if there
};

function Graph() {
	this.edges = [];		//adjacency info
	this.degree = [];		//outdegree of each vertex
	this.nVertices = null;	//number of vertices in graph
	this.nEdges = null;		//number of edges in graph
	this.directed = false;	//is the graph directed?
};

var graph = {};
/**
 * More of a C implementation with passing "graph" into the argument list
 * @param  {[type]} g [description]
 * @return {[type]}   [description]
 */
;(function( g ){
	'use strict';
	
	g.initialize = function( graph, directed, nodes, edges ){

		graph.nVertices = nodes;
		graph.nEdges = edges.length;
		graph.directed = directed;

		// This would be nice but i need to figure out to have the index start at "1" instead of "0"
		// graph.degree = Array.apply(null, new Array(edges.length)).map(Number.prototype.valueOf,0);		
		for( var i = 1; i <= nodes; i++ ){
			graph.degree[i] = 0;
			graph.edges[i] = [];
		}

	};

	/**
	 * [readGraph description]
	 * @param  {[array]} input    [graph input.  input: [ total_nodes, [ vertices ..]]]
	 * @param  {[boolean]} directed [if the edges have directions or bi-directional]
	 * @return {[type]}          [description]
	 */
	g.readGraph = function( input, directed ){

		var graph = new Graph();
		g.initialize( graph, directed, input.shift(), input );

		for( var i = 0; i < graph.nEdges; i++ ){
			g.insertEdge( graph, input[i], graph.directed );
		}

		return graph;

	};

	g.insertEdge = function( graph, edgeNode, directed ){

		var edge = new EdgeNode(),
			x = edgeNode.shift(),
			y = edgeNode.shift();

		edge.weight = null;
		edge.y = y;

		graph.edges[x].push( edge );
		graph.degree[x]++;

		if( directed === false ){
			g.insertEdge( graph, [ y, x ], true );
		}

	};

	/**
	 * printing all of the values in the graph has a runtime of O(n^2)
	 * @return {[void]}     
	 */
	g.printGraph = function( graph ){

		var edgeNodes;

		for( var i = 1, len = graph.nVertices; i <= len; i++ ){
			console.log('node: ', i);
			for( var j = 0, totalEdges = graph.edges[i].length; j < totalEdges; j++ ){
				console.log('connected edges: ', graph.edges[i][j]);
			}
		}

	};


})( graph );


