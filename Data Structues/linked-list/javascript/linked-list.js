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
      },
      remove: function(index){
        var position = 0,
            prev = null,
            current = _head;

        if(index > -1 && index < _length){
          if(0 === index){
            _head = current.getNext();
          }else{
            while(++position !== index){
              prev = current;
              current = current.getNext();
            };
            
            prev.next(current.getNext());
          }

          _length--;

          return current;
        }else{
          return null;
        }
      }
    }
  };
})(shaselton);

