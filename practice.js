//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
  return name
}
isTyler(name);

//Next problem


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

  //Code Here
  var getName = function(name)  {
    var name = prompt('What is your name?');
    alert(name);
  }
  getName(name);

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var welcome = function(name) {
    var name = prompt('What is your name?');
    alert('Welcome ' + name);
  }
  welcome(name);

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here
  var numbers = [1, 2, 3, 4, 5]

  var adder = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    alert("The Total Number was " + sum);
  };

  adder(numbers);

//examples for understanding the above problem
sum += arr[i]; //shortcut for the sum example below
sum = sum + arr[i];// longer version
// example of how the for loop works
sum = 0; // sum is the place holder each time the code goes through a loop
        for (i = 1; i <= 10; i++) {
            sum = sum + i
        }

//Next Problem



//What is the difference between arguments and parameters?

  //Answer Here
  Parameters are not stored and requires user input.
  Arguments are a previously stored variable.



//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
Falsy values are usaully equal to zero, false, empty string, null, undifined and NaN.
Falsy vaules can be determined by checking to see if the function equals any of the above falsy vaules.


//Next Problem


//Create a function called myName that returns your name

  //Code Here
  var myName = function() {
   return 'rick';
  }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem


//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  var outerFn = function() {
    return myName();
  }

  alert(outerFn());
  
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();

//Now invoke innerFn.

var innerFn = outerFn();

alert(innerFn);



