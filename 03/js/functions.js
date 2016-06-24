// Functions
//
// 1. Write a function that returns the last digit of given integer as an English word.
// Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"

var lastDigitName = function(number) {
  var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (Number.isInteger(number)) {
    var numberChars = number.toString().split('');
    var last = numberChars[numberChars.length - 1];
  } else {
    throw new Error('Please, specify an integer input value');
  }
  return digitNames[last];
}
//tests
console.log('Task 1');
console.log('512 > ' + lastDigitName(512));
console.log('1024 > ' + lastDigitName(1024));
console.log('12309 > ' + lastDigitName(12309));
// console.log('512 > ' + lastDigitName('512'));
// console.log('12.309 > ' + lastDigitName(12.309));
// console.log(lastDigitName('101010'));
// console.log(lastDigitName());

console.log('\n\n');

// 2. Write a function that reverses the digits of given decimal number. Example: 256 -> 652
var reversDigits = function(number) {
  if (Number.isInteger(number)) {
    var result = Math.abs(number).toString().split('').reverse().join('');
    if (number >=0) {
      return result;
    } else {
      return '-'.concat(result);
    }
  } else {
    throw new Error('Please, specify an integer input value');
  }

}
console.log('Task 2');
console.log(reversDigits(256));
console.log(reversDigits(12309));
console.log(reversDigits(-312309)); //saves negative value
console.log(reversDigits(0));
// console.log(reversDigits());
// console.log(reversDigits('werty'));

console.log('\n\n');

// 3. Write a function that finds all the occurrences of word in a text
//     * The search can case sensitive or case insensitive
//     * Use function overloading

var searchForWord = function searchForWord() {

  //insensitive
  this.insensitive = function(search, string) {
    var reg = new RegExp(search, 'gi');
    var result = string.match(reg);

    return (result) ? result.length : 0;

  }

  //sensitive
  this.sensitive = function(search, string, casesensetive) {
    var reg = new RegExp(search, 'g');
    var result = string.match(reg);
    if (casesensetive === true) {
        return (result) ? result.length : 0;
    }
  }

  //overloading
  if (arguments.length == 2) {
    return (this.insensitive.apply(this, arguments));
  } else if (arguments.length == 3) {
    return (this.sensitive.apply(this, arguments));
  } else {
    throw new Error('No correct input specified.');
  }
}
console.log('Task 3');
var string = 'Write a function text that finds all the Text, occurrences of word in a text';
console.log(searchForWord('o', string));
console.log(searchForWord('text', string));
console.log(searchForWord('text', string, true));
// console.log(searchForWord('text'));
// console.log(searchForWord());


console.log('\n\n');

// 4. Write a function to count the number of divs on the web page
var countDivs = function() {
  var divs = document.getElementsByTagName('div');
  return divs.length;
}
console.log('Task 4');
console.log('Number of divs: ' + countDivs());
