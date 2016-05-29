var bubbleSort = function(arrayList){ //0(n^2)
  console.log(arrayList);
  function swap(arrayList, swap1, swap2){
    var tmp = arrayList[swap1];

    arrayList[swap1] = arrayList[swap2];
    arrayList[swap2] = tmp;
  };

  for(var i = 0, len = arrayList.length; i < len; i++){
    for(var j = 0; j < len-i; j++){
      if(arrayList[j] > arrayList[j+1]){
        swap(arrayList, j, j+1);
      }
    }
  }

  return arrayList;
};

console.log(bubbleSort([1,2,6,1,3,1,6,10,2,66,32,1,7,5,3,4,8,9,4,3,9]));