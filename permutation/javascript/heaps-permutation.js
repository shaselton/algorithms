;(function(){

  var permList = [1,2,3,4],
      permutations = [];

  var swap = function(positionA, positionB, array){
    var temp = array[positionA];
    
    array[positionA] = array[positionB];
    array[positionB] = temp;
  }

  function generate(n, array){
    if(1 === n){
      permutations.push(array.join(''));
    }else{
      for(var i = 0; i < n-1; i++){
        generate(n - 1, array);
        if(0 === n%2){
          swap(i, n-1, array);
        }else{
          swap(0, n-1, array);
        }
      }
      generate(n - 1, array);
    }
  }

  generate(permList.length, permList);
  console.log(permutations, permutations.length);
})();