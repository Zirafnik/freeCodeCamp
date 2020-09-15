/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let filtered=arr.filter(item => func(item));
    let index=arr.indexOf(filtered[0]);
  
    if(index==-1) {
      return [];
    }
    return arr.slice(index)
  }
  
  //console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));