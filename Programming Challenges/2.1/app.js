/**
Children are taught to add multi-digit numbers from right to left, one digit at a time. Many find the ``carry" operation, where a 1 is carried from one digit position to the next, to be a significant challenge. Your job is to count the number of carry operations for each of a set of addition problems so that educators may assess their difficulty.

Input

Each line of input contains two unsigned integers less than 10 digits. The last line of input contains ``0 0''.
Output

For each line of input except the last, compute the number of carry operations that result from adding the two numbers and print them in the format shown below.
Sample Input

123 456
555 555
123 594
0 0
Sample Output

No carry operation.
3 carry operations.
1 carry operation.


//implementor: shaselton
 */

;(function(){

	'use strict';

	angular.module( 'programmingChallenges', [] )
	.controller( 'shaselton', [ '$scope', function( $scope ){
		$scope.numbers = new Array(1);
		$scope.addTestCase = function(){
			$scope.numbers.push({});
		}
	}])
	/**
	 * TODO: pull out and put into generic code base?
	 * TODO: testing of exceptions
	 */
	.service( 'exceptions', [ function(){

		function notANumberException( value ){
			this.value = value;
			this.message = "Please enter an int";
			this.toString = function(){
				return "you didn't enter a corrent number type: " + this.value + ". " + this.message;
			}
		};

		return{
			notANumberException: function( value ){
				return new notANumberException( value );
			},
			processException: function( exception ){
				if( exception instanceof notANumberException ){
					console.error(exception.toString());
				}else{
					console.error(exception);
				}
			}
		}
	}])
	.service( 'carryService',  [ 'exceptions', function( exceptions ){

		var carry = function( firstNumber, secondNumber ){
			var first,
				second,
				digit,
				result = [],
				carryCount = 0,
				carryAmount = 0;

			console.time('carry');

			if( isNaN( parseInt( firstNumber, 10 ) ) || isNaN( parseInt( secondNumber, 10 ) ) ){
				if( isNaN( parseInt( firstNumber, 10 ) ) ){
					throw exceptions.notANumberException( firstNumber );
				}else{
					throw exceptions.notANumberException( secondNumber );
				}
			}

			first = parseInt(firstNumber, 10).toString().split('');
			second = parseInt(secondNumber, 10).toString().split('');

			first.reverse();
			second.reverse();

			for( var i = 0, len = Math.max( first.length, second.length ); i < len; i++ ){
				firstNumber = first[i] || 0;
				secondNumber = second[i] || 0;
				digit = parseInt( firstNumber, 10 ) + parseInt( secondNumber, 10 ) + carryAmount;
				carryAmount = 0;
				if( digit >= 10 ){ // carry the digit
					result[i] = (digit % 10) + carryAmount;
					carryCount++;
					carryAmount += Math.floor( digit/10 ); // technically, this isn't necessary, but more flexible if carryAmounts was tracking multiplication
				}else{
					result[i] = digit;
				}
			}
			if( carryAmount > 0 ){
				result[result.length] = carryAmount;
			}

			console.timeEnd('carry');
			return [carryCount, parseInt( result.reverse().join('') )];
		};

		return{
			carry:function( firstNumber, secondNumber ){
				try{
					return carry( firstNumber, secondNumber );
				}catch( exception ){
					exceptions.processException( exception );
				}
			}
		}
	}])
	.filter( 'carryAmount', [function(){
		return function( amount ){
			if( !angular.isNumber( amount ) ){
				return '';
			}
			if( amount === 0 ){
				return 'No carry operation.';
			}else if( amount === 1 ){
				return amount + ' carry operation.';
			}else{
				return amount + ' carry operations.';
			}
		};
	}])
	.directive( 'carryPair', [ function(){
		return{
			restrict: 'E',
			controller:['$scope', '$element', 'carryService', function($scope, $element, carryService){
				$scope.calculateCarry = function(){
					var result
					result = carryService.carry( $scope.firstNumber.trim(), $scope.secondNumber.trim() );
					$scope.output = result[0];
					$scope.total = result[1];
				}
			}],
			link: function(scope, element){
				scope.$watch( 'firstNumber + secondNumber', function(){
					if( !!scope.firstNumber && !!scope.secondNumber ){
						scope.calculateCarry();
					}else{
						scope.output = '';
					}
				});
			},
			scope:{},
			template: '<div><input ng-model="firstNumber" type="text"/><input ng-model="secondNumber" type="text"> <span>{{output | carryAmount}} {{total}}</span></div>'
		};
	}]);

})();