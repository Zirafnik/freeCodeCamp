/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".


TESTS:
titleCase("I'm a little tea pot") should return a string.
Passed
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
Passed
titleCase("sHoRt AnD sToUt") should return Short And Stout.
Passed
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.
*/

//string-->array-->strings-->array-->string
function titleCase(str) {
    //create array of words in string
    let words= str.split(" ");

    let strNew='';
    let arr= [];
    let final='';
  
    //iterate through array;
    //turn every first character of string to uppercase, then concatentate the end slice of word in lowercase
    //push each word to new array
    for (let i=0; i<words.length; i++) {
     strNew= words[i][0].toUpperCase() + words[i].slice(1,words[i].length).toLowerCase();
     arr.push(strNew);
    }
  
    //go through new array and concatentate each element with previous + a space
    //special condition (no space) for last element
    for (let i=0; i<arr.length; i++) {
      if (arr[i]!=arr[arr.length-1]) {
        final= final+ arr[i] + ' ';
      } else {
        final= final+ arr[i];
      }
    } return final;
  
  }
  
  titleCase("I'm a little tea pot"); //returns I'm A Little Tea Pot
