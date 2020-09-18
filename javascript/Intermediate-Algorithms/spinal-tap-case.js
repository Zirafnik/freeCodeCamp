//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    return str
    .replace(/\-/g, ' ')
    .split(/(?=[A-Z]|_|\s)/g)
    .map(item => item.trim())
    .filter(item => /[a-z]/gi.test(item))
    .join('-')
    .toLowerCase()
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap"));
  console.log(spinalCase("The_Andy_Griffith_Show"));
  console.log(spinalCase("Teletubbies say Eh-oh"));
  console.log(spinalCase("AllThe-small Things"));
  console.log(spinalCase('the-andy-griffith-show'));


  // no need to replace the existing hyphens, just add new ones
 /* return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
*/