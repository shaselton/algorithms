/**
Light, more light


		

There is man named Mabu who switches on-off the lights along a corridor at our university. Every bulb has its own toggle switch that changes the state of the light. If the light is off, pressing the switch turns it on. Pressing it again will turn it off. Initially each bulb is off.

He does a peculiar thing. If there are n bulbs in a corridor, he walks along the corridor back and forth n times. On the ith walk, he toggles only the switches whose position is divisible by i. He does not press any switch when coming back to his initial position. The ith walk is defined as going down the corridor (doing his peculiar thing) and coming back again. Determine the final state of the last bulb. Is it on or off?

Input

The input will be an integer indicating the nth bulb in a corridor, which is less than or equal to 232 - 1. A zero indicates the end of input and should not be processed.
Output

Output ``yes'' or ``no'' to indicate if the light is on, with each case appearing on its own line.

Sample Input

 3
6241
8191
0
Sample Output

 no
yes
no
 */

;(function(){
	'use strict';

	angular.module( 'programmingChallenges', [ 'exceptionModule' ] )
	.controller( 'shaselton', [ '$scope', function( $scope ){
		$scope.numbers = new Array(1);
		$scope.addTestCase = function(){
			$scope.numbers.push({});
		}
	}])
	.filter( 'isLightOn', [function(){
		return function( yes ){
			if( yes ){
				return 'yes';
			}else{
				return 'no';
			}
		};
	}])
	.directive( 'lights', [ function(){
		return{
			restrict: 'E',
			controller:['$scope', '$element', 'lightService', function($scope, $element, lightService){
				var status = false; // bulb off
				$scope.determineOn = function(){
					$scope.output = lightService.getLightStatus( $scope.bulbs );
				}
			}],
			link: function(scope, element){
				scope.$watch( 'bulbs', function(){
					if( !!scope.bulbs ){
						scope.determineOn();
					}else{
						scope.output = '';
					}
				});
			},
			scope:{},
			template: '<div><input ng-model="bulbs" placeholder="bulb amount" type="text"/><span ng-show="bulbs">{{output | isLightOn}} {{total}}</span></div>'
		};
	}])
	.service( 'lightService',  [ 'exceptions', function( exceptions ){

		var light = function( bulbs ){
			var bulbArray = [];

			
			if( !angular.isNumber( bulbs ) ){
				exceptions.notANumberExceptionCall( bulbs );
			}

			bulbArray = Array.apply(null, new Array(parseInt( bulbs, 10 )) ).map(Boolean,false);
			console.log(bulbArray);
			console.time('light');
			for (var i = 1; i <= bulbs; i++ ){

			}
			console.timeEnd('light');			
		};

		return{
			getLightStatus:function( bulbs ){
				try{
					return light( bulbs );
				}catch( exception ){
					throw exception;
				}
			}
		}
	}]);
})();