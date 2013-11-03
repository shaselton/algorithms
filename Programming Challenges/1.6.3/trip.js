/**
 * The Trip

A number of students are members of a club that travels annually to exotic locations. Their destinations in the past have included Indianapolis, Phoenix, Nashville, Philadelphia, San Jose, and Atlanta. This spring they are planning a trip to Eindhoven. The group agrees in advance to share expenses equally, but it is not practical to have them share every expense as it occurs. So individuals in the group pay for particular things, like meals, hotels, taxi rides, plane tickets, etc. After the trip, each student's expenses are tallied and money is exchanged so that the net cost to each is the same, to within one cent. In the past, this money exchange has been tedious and time consuming. Your job is to compute, from a list of expenses, the minimum amount of money that must change hands in order to equalize (within a cent) all the students' costs.

The Input

Standard input will contain the information for several trips. The information for each trip consists of a line containing a positive integer, n, the number of students on the trip, followed by n lines of input, each containing the amount, in dollars and cents, spent by a student. There are no more than 1000 students and no student spent more than $10,000.00. A single line containing 0 follows the information for the last trip.

The Output

For each trip, output a line stating the total amount of money, in dollars and cents, that must be exchanged to equalize the students' costs.


Sample Input

3
10.00
20.00
30.00
4
15.00
15.01
3.00
3.01
0


Sample Output

$10.00 
$11.99

//shaselton
 */


;(function(){
	
	var theTrip = function( students ){
		var average,
			total = 0,
			i = 0,
			len = students.length,
			received = 0,
			gave = 0,
			difference = 0;

		for( ; i < len; i++ ){
			total += students[i];
		}

		average = ((total).toFixed(2) / len).toFixed( 2 );
		average = parseFloat( average );
		total = 0;

		for( i = 0; i < len; i++ ){
			difference = students[i] - average;
			if( difference > 0 ){
				// how much it takes for the over-average numbers to match the average
				received += parseFloat( difference.toFixed(2) );
			}else{
				// how mmuch it takes for the under-average numbers to match the average
				gave -= difference.toFixed(2);
			}
		}

		return ( received < gave ? received : gave );

	};

	var initialize = function(){

		var studentInput = document.querySelector( '.student-input' ),
			studentSubmit = document.querySelector( '.student-submit' ),
			studentBreakdown = document.querySelector( '.student-breakdown' ),
			studentTotal = document.querySelector( '.total-students' );
			domStudents = document.querySelector( '.students' ),
			submitExpenses = document.querySelector( '.expenses' ),
			students = [];

		studentSubmit.onclick = function(){
			var totalStudents = studentInput.value;
			if( totalStudents <= 0 || isNaN( totalStudents) ){
				//error handling here
				return;
			}

			studentTotal.classList.add( 'not-active' );
			generateStudentContribution( totalStudents );
			studentBreakdown.classList.remove( 'not-active' );

		};

		submitExpenses.onclick = function(){
			var values = domStudents.querySelectorAll( 'input' ),
				hack;

			for( var i = 0, len = values.length; i < len; i++ ){
				//http://stackoverflow.com/questions/2283566/tofixed-returns-a-string-in-javascript?answertab=votes#tab-top
				hack = parseFloat( values[i].value ).toFixed( 2 );
				students.push( parseFloat( hack ) );
			}

			console.time( "theTrip" );
			console.log(theTrip( students ));
			console.timeEnd( "theTrip" );

			students = [];

		};

		var generateStudentContribution = function( amount ){

			var fragment = document.createDocumentFragment(),
				label,
				input;

			domStudents.innerHTML = "";

			for( var i = 0; i < amount; i++ ){
				label = document.createElement("label");
				input = document.createElement("input");
				input.setAttribute( "type", "number" );
				label.innerHTML = "student " + (i + 1);
				label.appendChild( input );
				fragment.appendChild( label );
			}

			domStudents.appendChild( fragment.cloneNode(true) );

		};

	}

	initialize();


})();