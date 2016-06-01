/**
you are on a biz trip and travelling from one city to another. you have a stack of unsorted flight boarding passes. only departure city and destination city are on the boarding pass. how do you find the first departure city and your final destination city, write the solution in javascript.
**/

function businessTrip(tickets){
  var startLocation = new Set(),
      endingLocation = new Set(),
      ticketStart,
      ticketEnd;

  tickets.forEach(function(element, index){
    ticketStart = element[0];
    ticketEnd = element[1];

    startLocation.add(ticketStart);
    endingLocation.add(ticketEnd);
  });

  endingLocation.forEach(function(element){
    if(!startLocation.has(element)){
      ticketEnd = element;
    }
  });

  startLocation.forEach(function(element){
    if(!endingLocation.has(element)){
      ticketStart = element;
    }
  });

  return [ticketStart, ticketEnd];
}

// expect(businessTrip([[1,2], [2,3], [3,4]])).toBe([1,4]);
// expect(businessTrip([[2,3], [3,4], [1,2]])).toBe([1,4]);