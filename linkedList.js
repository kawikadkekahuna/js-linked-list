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
			var plusOne = object.head.next;

			if(index === 1){
				return plusOne;
			}

			if(index >= 2){
				while(counter != index){
					if(plusOne.next !== null){
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

		var removed = _get(index);
		


		if(_getTail() === _get(index)){

			object.tail = _get(index - 1);

		}

		if(index === 0){

			object.head = object.head.next;
		}

		var previous = _get(index - 1);
		var current = _get(index);
		var upOne = _get(index + 1);

		previous.next = upOne;

		return removed;



		}

		function _insert(){


			}
		
	  }	



