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
    var _head = null,
        _tail = null,
        _length = 0;

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
      remove: function(data){ // O(n)
        var prev = _head,
            current = _head;

        if(current === null){
          return null;
        }

        if(current.getData === data){
          _head = current.getNext();
          if(_tail.getData === data){
            _tail = _head;
          }
          return current;
        }else{
          while(current !== null){
            if(current.getData === data){
              prev.next(current.getNext());
              if(prev.getNext() === null){
                _tail = prev;
              }
              return current;
              break;
            }
            prev = current;
            current = current.getNext();
          }
          return null;
        }
      },
      reverse: function(){
        var current = _head,
            prev = null,
            next = null;

        _tail = _head;
        while(current !== null){
          next = current.getNext();
          current.next(prev);
          prev = current;
          current = next;
        }
        _head = prev;
      },
      recursiveReverse: function(current = _head, prev = null){
        var next = null;

        if(current === null){
          _head = prev;
          return;
        }

        if(prev === null){
          _tail = current;
        }

        next = current.getNext();
        current.next(prev);
        this.recursiveReverse(next, current);
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

