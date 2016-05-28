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
        _head = null,
        _tail = null;

    return{
      add: function(data){ // O(1)
        var node = s.node(data);

        if(null === _head){
          _head = node;
          _tail = node;
        }else{
          _tail.next(node);
          _tail = node;
        }

        _length++;
        return _tail.getData;
      },
      remove: function(index){ // O(n)
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
      },
      item: function(index){
        var position = 0,
            current = _head;

        if(index > -1 && index < _length){
          while(position++ !== index){
            current = current.getNext();
          }
          return current;
        }else{
          return null;
        }
      }
    }
  };
})(shaselton);

