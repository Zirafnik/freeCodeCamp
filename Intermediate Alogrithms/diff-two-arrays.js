/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    var newArr=arr1.concat(arr2);
    let finalArr=[];
    
    let duplicates=newArr.filter((currentVal,index)=>newArr.indexOf(currentVal)!==index);
  
    for(let i=0; i<newArr.length; i++) {
      if(duplicates.indexOf(newArr[i])==-1) {
        finalArr.push(newArr[i]);
      }
    } return finalArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  
  //dont even need to concat or filter duplicates for the indexOf method. Just compare one array to another.