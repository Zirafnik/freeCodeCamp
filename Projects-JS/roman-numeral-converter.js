/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let arr=[];
   
    while(num>0){
      if(num>=1000) {
        arr.push('M');
        num-=1000;
      } else if(num>=900) {
        arr.push('CM');
        num-=900;
      } else if(num>=500) {
        arr.push('D');
        num-=500;
      } else if(num>=400) {
        arr.push('CD');
        num-=400;
      } else if(num>=100) {
        arr.push('C');
        num-=100;
      } else if(num>=90) {
        arr.push('XC');
        num-=90;
      } else if(num>=50) {
        arr.push('L');
        num-=50
      } else if(num>=40) {
        arr.push('XL');
        num-=40;
      } else if(num>=10) {
        arr.push('X');
        num-=10;
      } else if(num>=9) {
        arr.push('IX');
        num-=9;
      } else if(num>=5) {
        arr.push('V');
        num-=5;
      } else if(num>=4) {
        arr.push('IV');
        num-=4;
      } else if(num>=1) {
        arr.push('I');
        num-=1;
      }
    }
    return arr.join('');
   }
   
   console.log(convertToRoman(1900));
   console.log(convertToRoman(2000));
   console.log(convertToRoman(1984));
   
   //could have saved all the values in two arrays and then iterate through one to check if num>=, then get the index and add same index from second array of numeral to arr, and then num-= like I did here