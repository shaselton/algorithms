// steps
// s

function Permutation(str){
  var permutationList = [];

  function doPerm(str, arr) {
    console.log('str:', str.join(','));
    if (str.length == 0){
      console.log('arr:', arr);
      permutationList.push(arr.join(''));
      console.log('permutationList:', permutationList);
    }
    for (var i = 0; i < str.length; i++) {
        var x = str.splice(i, 1);
        arr.push(x);
        // console.log('x:', x);
        // console.log('arr:', arr);
        doPerm(str, arr);
        arr.pop();
        // console.log('arr:', arr);
        str.splice(i, 0, x);
        console.log('str splice:', str.join(','));
    }
  }
  
  doPerm(str.split(''), []);
  return permutationList;
};

console.log(Permutation("abcefgh"));


// expect(Permutation("ab")).toBe(['ab', 'ba'])