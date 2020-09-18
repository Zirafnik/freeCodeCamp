/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    if(/[A-Z]+/i.test(str)) {
      return false;
    } else if(/[(]+/.test(str) && /[)]+/.test(str)==false
    || /[(]+/.test(str)==false && /[)]+/.test(str)) {
      return false;
    } else if(/^-/.test(str)) {
      return false;
    } else if(/\(\d{10}\)/.test(str)) {
      return false;
    }
    
    let splitRegex=/[()-\s]+/g;
    let arr=str.split(splitRegex).filter(x => x.length>0);
    console.log(arr);
    console.log(arr.length);
  
    if(arr.length===3
    && arr[0].length===3
    && arr[1].length===3
    && arr[2].length===4) {
      return true;
    } else if(arr.length===4
    && arr[0]==='1'
    && arr[1].length===3
    && arr[2].length===3
    && arr[3].length===4) {
      return true
    } else if(arr.length===1
    && arr[0].length===10) {
      return true;
    }
    return false;
  }
  
  //console.log(telephoneCheck("555-555-5555"));
  //console.log(telephoneCheck("555-555a-5555"));
  //console.log(telephoneCheck("1(555)555-5555"));
  //console.log(telephoneCheck("1 555-555-5555"));
  //console.log(telephoneCheck("(555)555-5555"));
  //console.log(telephoneCheck("1 555)555-5555"));
  //console.log(telephoneCheck("-1 (757) 622-7382"));
  //console.log(telephoneCheck("(6054756961)"));


  /* this could all have been also done with one regex line : 
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  */