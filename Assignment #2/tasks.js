
//Task1:

var allAreLessThanSeven = all([1,2,9], function(num){
  return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(array, callback){
  for(let i =0;i<array.length;i++){
    if(!callback(array[i])){
      return false;
    }
  }
  return true;
}

  //-----------------------------------------------------------

  //Task2:
  var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}

