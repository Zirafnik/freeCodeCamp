/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/


function convertHTML(str) {
    let charaArr=str.match(/[&<>"']/g);
    let final=str;
    console.log(charaArr);
    let obj= {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;',
    } 
  
    if(/[&<>"']/g.test(str)) {
      for(let i=0; i<charaArr.length; i++) {
        final=final.replaceAll(charaArr[i], obj[charaArr[i]]);
       }
    }
    return final;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));
  console.log(convertHTML("Hamburgers < Pizza < Tacos"));
  console.log(convertHTML("<>"));
  console.log(convertHTML("abc"));
  