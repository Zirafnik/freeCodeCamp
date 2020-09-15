/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.
*/

function destroyer(arr, ...args) {
    for(let j=0; j<args.length; j++) {
      while(arr.indexOf(args[j])>=0) { 
       
        arr.splice(arr.indexOf(args[j]), 1);
        
      }
    }return arr;
  }
  
  //console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
  console.log(destroyer([2, 3, 2, 3], 2, 3));