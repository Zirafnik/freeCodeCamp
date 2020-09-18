/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
    let regex=new RegExp(str);
    let alphabet='abcdefghijklmnopqrstuvwxyz';
    
  
    if(regex.test(alphabet)) {
      return undefined;
    } else {
      let alphaArr=alphabet.split('');
      let strArr=str.split('');
  
      for(let i=0; i<strArr.length; i++) {
        //console.log(alphabet.indexOf(strArr[i]));
        if(alphabet.indexOf(strArr[i+1])-alphabet.indexOf(strArr[i])>1) {
          return alphaArr[alphabet.indexOf(strArr[i])+1];
        }
      }
    }
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
  