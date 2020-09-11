/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName= firstAndLast;
  
    this.getFullName = function() {
      return fullName;
    };
    this.getFirstName= function() {
      return fullName.split(' ')[0];
    };
    this.getLastName= function() {
      return fullName.split(' ')[1];
    };
  
    this.setFirstName= function(first) {
      fullName=`${first} ${fullName.split(' ')[1]}`;
    };
    this.setLastName= function(last) {
      fullName=`${fullName.split(' ')[0]} ${last}`;
    }
    this.setFullName= function(names) {
      fullName=names;
    }
  };
  
  var bob = new Person('Bob Ross');
  
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(bob.getLastName());
  
  bob.setFirstName('David');
  console.log(bob.getFirstName());
  console.log(bob.getFullName());