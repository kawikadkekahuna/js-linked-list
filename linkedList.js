	function linkedListGenerator(){
	  var index = 0;
	  
		var object = {
			head : null,
			tail : null

		};

		return{

			getHead: _getHead,
			getTail: _getTail,
			add: _add,
			get: _get,
			remove: _remove,
			insert: _insert

		};


		function _getHead(){
	    
		return object.head;  

		}

		function _getTail(){

		return object.tail;

		}

		function _add(n){

			var node = {
				value : n,
				next : null
			};


			index++;

			if(object.head === null && object.tail === null){
				object.head = node;
				object.tail = node;

			}else{
				object.tail.next = node;
				object.tail = node;
				
			}

			return node;
			

		}

		function _get(index){
			var counter = 1;
			var returnObj = object.head;
            var plusOne;
            if(object.head.next !== undefined){
			plusOne = object.head.next;
            }else{
              return false;
            }
            
			if(index === 1){
				return plusOne;
			}

			if(index >= 2){
				while(counter != index){
					if(plusOne.next !== undefined){
						returnObj = plusOne.next;
						plusOne = returnObj;
					}else{
						return false;
					}
					if(returnObj === null){
						return false;
					}
					counter++;
				}
			}

			return returnObj;

		}

		function _remove(index){
		var toRemove;

		if(_get(index) !== undefined){ //if undefined return false
		toRemove = _get(index);
		}else{
			toRemove = false;
		}

		if(toRemove === _getTail()){ //checks if removable value is tail;
			_get(index - 1).next = null;
			object.tail = _get(index-1);
		}

		if(toRemove === _getHead()){
			object.head = object.head.next;
		}

		_get(index - 1).next = _get(index + 1);


		return toRemove;
		}

		function _insert(value, index){


			var bridge = _get(index);// obj to link to new node

			var node = {
				value : value,
				next : null
			};

			if(index < 0){
				return false;
			}
			if(index === 0){ // Reassigns head
			object.head = node;
			node.next = bridge;
			return;
			}
			if(_get(index + 1) === false){
			object.tail = node;
			_get(index).next = node;
			}

			_get(index - 1).next = node;
			node.next = bridge; 
			



			}
		
	  }	
