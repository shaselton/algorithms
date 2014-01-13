
var bfs = {};

;(function( b ){
	'use strict';

	b.isInitialized = false;
	b.color = [];
	b.biPartite;
	b.UNCOLORED = -1;
	b.WHITE = 0;
	b.BLACK = 1;

	b.initializeSearch = function( graph ){
		if( this.isInitialized ){
			return false;
		}

		graph.processed = [];
		graph.discovered = [];
		graph.parent = [];

		for( var i = 1, len = graph.nVertices; i <= len; i++ ){
			graph.processed[i] = graph.discovered[i] = false;
			graph.parent[i] = -1;
		}

		this.isInitialized = true;
	};

	b.search = function( graph, startingPosition ){
		var queue = [],
			currentVertex,
			successorVertex,
			edgeNodes;

		this.initializeSearch( graph );		

		queue.push( startingPosition );
		graph.discovered[startingPosition] = true;

		while( queue.length > 0 ){
			currentVertex = queue.shift();
			this.processVertexEarly( currentVertex );
			graph.processed[ currentVertex ] = true;
			edgeNodes = graph.edges[ currentVertex ];
			for( var i = 0, len = edgeNodes.length; i < len; i++ ){
				successorVertex = edgeNodes[i].y;
				if( graph.processed[ successorVertex ] == false || graph.directed ){
					this.processEdge( currentVertex, successorVertex );
				}
				if( graph.discovered[ successorVertex ] == false ){
					queue.push( successorVertex );
					graph.discovered[ successorVertex ] = true;
					graph.parent[ successorVertex ] = currentVertex;
				}
			}
			this.processVertexLate( currentVertex );
		}

		this.isInitialized = false;
	};

	b.processVertexEarly = function( vertex ){
		console.log('processed vertex: ', vertex);
	};
	b.processVertexLate = function( vertex ){};
	b.processEdge = function( currentVertex, successorVertex ){
		console.log('processed edge: ', currentVertex, successorVertex);
	};

	/**
	 * Determines how many non-connected parts exist in a given graph.  page 167
	 * @param  {[type]} graph [description]
	 * @return {[type]}       [description]
	 */
	b.connectedComponents = function( graph ){

		var componentNumber = 0;

		this.initializeSearch( graph );

		for( var i = 1, len = graph.nVertices; i <= len; i++ ){
			if( graph.discovered[ i ] == false ){
				componentNumber++;
				console.log( "component: ", componentNumber );
				this.search( graph, i );
			}
		}
	};

	/**
	 * Determines (or trys to) whether a graph can be a two-colored graph...meaning that the parent vertex and current vertex need to be one of two colors but different from each other.
	 * @param  {[type]} graph [description]
	 * @return {[type]}       [description]
	 */
	b.twoColor = function( graph ){

		this.biPartite = true;

		for( var i = 1, len = graph.nVertices; i <= len; i++ ){
			this.color[i] = this.UNCOLORED;
		}

		this.initializeSearch( graph );

		//override the generic process edge
		this.processEdge = function( currentVertex, successorVertex ){
			if( this.color[ currentVertex ] == this.color[ successorVertex ] ){
				this.biPartite = false;
				console.log('Warning: not a bipartite due to: ', currentVertex, successorVertex );
			}

			this.color[successorVertex] = this.complement( this.color[ currentVertex ] );
			console.log('color of vertex: ', successorVertex, ' is: ', this.color[successorVertex] );
		};

		for( var i = 1, len = graph.nVertices; i <= len; i++ ){
			if( graph.discovered[i] == false ){
				this.color[i] = this.WHITE;
				this.search( graph, i );
			}
		}

		this.search( graph, 1 );

	};

	b.complement = function( color ){
		if( color == this.WHITE ){
			return this.BLACK;
		}else if( color == this.BLACK ){
			return this.WHITE;
		}

		return this.UNCOLORED;
	};

})( bfs );