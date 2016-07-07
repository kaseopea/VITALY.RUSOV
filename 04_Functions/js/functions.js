'use strict';

// Task 1. FDS
// Create function conc which should concatenate two parameters a and b and return concatanating string
// using Function Declaration Statement (FDS). Call this function before its declaration.
// Test Data: a = “1”, b = “1”, result = “11” a = 1, b = 1, result = “11”

function conc(a,b) {
  var a = a || '';
  var b = b || '';
  return a.toString() + b.toString();
}

//Tests
var a = 1;
var b = 1;

// console.log(conc(a,b));
// console.log(conc('1','1'));

// console.log('\n\n');

// Task 2. FDE
// Create function comp which should compare two parameters a and b
// and return 1 if a equal b and -1 if a not equal b using Function Definition Expression (FDE).
// Call this function before its declaration. Test Data: a = “abc”, b = “abc”, result = 1 a = “abC”, b = “abc”, result = -1

var a = 'abc';
var b = 'abc';
var c = 'abC';



//In case of FDE we can't call our function before it's declaration
//We should call it after or use FDS
// console.log(comp(a,b));
// console.log(comp(a,c));

var comp = function(a,b) {
  var a = a || '';
  var b = b || '';
  return (a === b) ? 1 : -1;
}

// console.log('\n\n');

// Task 3. AF
// Create anonymous function which should log message “message in console” to the console
// and use it as a click handler for button.
var createButton = function() {
  var button = document.createElement("input");
  button.type = 'button';
  button.value = 'magic button';
  button.onclick = function () {
    console.log('message in console');
  };
  document.body.appendChild(button);
}
// createButton();

// Task 4.
// NFE Create function fibo to calculate fibonachi numbers using named function expression
var fib = function calcFib(x) {
  if (!calcFib.cache[x]) {
    if (x > 1) {
      calcFib.cache[x] = calcFib(x-1) + calcFib(x-2);
    } else {
      calcFib.cache[x] = x;
    }
  }
  return calcFib.cache[x];
}
fib.cache = {};

// for (var i = 0; i < 450; i++) {
//   console.log((i+1) + '. Fib = ' + fib(i));
// }
// console.log('\n\n');

// Task 5. IIFE
// Make the function conc immediately-invoked function expression
var a = 1;
var b = 1;

(function (a,b) {
  var a = a || '';
  var b = b || '';
  // console.log(a.toString() + b.toString());
}(a,b));

// console.log('\n\n');

// Task 6. Arguments Object
// Create function parts which takes several parameters.
// Each parameter is a group of sentences. This function should extract the substring
// from the sign “:”(colon) to the sign “.”(period) of each parameter and return the array
// of this substrings Use Function Definition Expression.
// Test Data: param1 = "This is the first sentence. This is a sentence with
// a list of items: cherries, oranges, apples, bananas." param2 = "This is the second sentence.
// This is a sentence with a list of items: red, blue, yellow, black."
// result = [“cherries, oranges, apples, bananas”, “red, blue, yellow, black”]

var parts = function () {
  var args = Array.prototype.slice.call(arguments);
  var pattern = /(:)(.+)+(\.)/gi;
  return args.map(function(el) {
    var extract = el.match(pattern).toString();
    return extract.slice(1,-1).trim();
  });
}

var param1 = 'This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas.';
var param2 = 'This is the second sentence.This is a sentence with a list of items: red, blue, yellow, black.';

// console.log(parts(param1, param2));
// console.log('\n\n');

// Task 7. Optional Arguments
// Create function find(testString, test) which should return the position of test string in testString.
 // If you don’t pass the second parameter use test = testString.
 // Use Function Definition Expression.
 // Test Data:
 // testString = “abc”, test =”b”, result = 1
 // testString = “abc”, result = 0
 // testString = ”abc”, test = “d”, result = -1
 // testString = “abc”, test=”a”, test2=”b”, result = 0 - Q!

var find = function(testString, test) {
  var test = test || testString;
  return testString.indexOf(test);

}
// console.log(find('abc', 'b'));
// console.log(find('abc'));
// console.log(find('abc', 'd'));
// console.log(find('abc', 'a', 'b'));
//
// console.log('\n\n');

// Task 8. Function as an Object
// Create the function str which takes one parameter and alert(“String is non empty”)
// if string is non empty and alert(String is empty) otherwise. Use following funtion to check this condition.
// Create the function isNonEpmtyStr as a property of function str. This function takes one parameter
// and return true if its parameter is NonEmptyStr.
// Test Data:
// str.isNonEmptyStr(), result = false
// str.isNonEmptyStr(“”), result = false
// str.isNonEmptyStr(“a”), result = true
// str.isNonEmptyStr(1), result = false
// str(), alert(“String is empty”)
// str(“a”), alert(“String is non empty”)

// check function
var str = function(str) {
  return (str === '') ? 'String is empty' : 'String is non empty';
}
str.isNonEmptyStr = function(str) {

}


// Task 9. Function as a Parameter
// Create the function to Console with one parameter, which display the value of its parameter in console.log
// Create the function toAlert with one parameter, which display the value of its parameter using alert()
// Create the function splitToWords with two parameters: msg and callback.
// This function splits msg into words and using callback displays words in console or by alert.
// If the second parameter is omitted, return the array of words.
// Test Data:
// splitToWords("My very long text msg", toConsole); result  My  very  long  text  msg
// splitToWords("My very long text msg", toAlert); result = alert(My), …. console.log(
// splitToWords("My very long text msg") ); result = [“My”, “very”, “long”, “text”, “msg”]


// Task 10. Function as a Result
// Create function copyright which return another function with one parameter.
// Returned function adds sign © (“\u00A9”) at the beginning of its parameter.
// Declare copyright sign in outer function.
// Test Data console.log( copyright()(“EPAM”) ); result = © EPAM.

var copyright = function() {
  var symbol = '\u00A9';
  return function(text) {
    return symbol + text;
  }
}
// console.log(copyright()('EPAM'));


// Task 11. Function as a Method
// Create object literal Employee with the following properties:
// name: “Ann”, work – function which display message "I am "+ this.name +". I am working..." in console.log.
// Test Data
// Employee.work() result in console "I am Ann. I am working..."

var Employee = {
  name: 'Ann',
  work: function () {
    console.log('I am ' + this.name + '. I am working...');
  }
}
console.log(Employee.work());
