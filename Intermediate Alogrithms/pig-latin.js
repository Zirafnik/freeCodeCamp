/* 

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
    let testRegex= /^[^aeiou]+/gi;
    if(testRegex.test(str)) {
      let conosants=str.match(testRegex).join();
      return str.substring(conosants.length) + conosants + 'ay';
    } else {
      return str + 'way';
    }
  }
  
  console.log(translatePigLatin("glove"));
  