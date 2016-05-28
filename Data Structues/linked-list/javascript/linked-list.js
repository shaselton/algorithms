var shaselton = {};
;(function(s){
  'use strict';
  s.node = function sNode(data){
    var next = null,
        data = data;

    return {
      next: function(node){
        next = node;
      },
      getNext: function(){ 
        return next 
      },
      getData: data
    }
  };

  s.list = function LinkedList(){
    var _length = 0,
        _head = null;

    return{
      add: function(data){
        var current,
            node = s.node(data);

        if(null === _head){
          _head = node;
        }else{
          current = _head;
          while(null !== current.getNext()){ // O(n)
            current = current.getNext();
          };

          current.next(node);
        }

        _length++;
      }  
    }
  };
})(shaselton);

