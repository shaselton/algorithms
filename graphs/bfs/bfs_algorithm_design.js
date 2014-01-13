
var bfs = {};

;(function( b ){
	'use strict';

	b.isInitialized = false;

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
	};

	b.processVertexEarly = function( vertex ){
		console.log('processed vertex: ', vertex);
	};
	b.processVertexLate = function( vertex ){};
	b.processEdge = function( currentVertex, successorVertex ){
		console.log('processed edge: ', currentVertex, successorVertex);
	};

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
	}

})( bfs );