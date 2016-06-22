// Functions
//
// 1. Write a function that returns the last digit of given integer as an English word. Examples: 512 -> "two", 1024 -> "four", 12309 -> "nine"

var lastDigitName = function(number) {

  var digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  console.log(typeof number);

  if (Number.isInteger(number)) {
    var numberChars = number.toString().split('');
    var last = numberChars[numberChars.length - 1];
  }
  return digitNames[last];
}
console.log(lastDigitName(512));
console.log(lastDigitName(1024));
console.log(lastDigitName(12309));

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
  } else return 'Введите корректные данные';

}
console.log(reversDigits(256));
console.log(reversDigits(12309));
console.log(reversDigits(-312309));
console.log(reversDigits('werty'));

console.log('\n\n');

// 3. Write a function that finds all the occurrences of word in a text
//     * The search can case sensitive or case insensitive
//     * Use function overloading
var string = 'Write a function text that finds all the Text occurrences of word in a text';
var searchWord = function(search, string, casesensetive) {
  if (typeof string != 'string') return 'Введите корректные данные';
  if (typeof search != 'string') return 'Введите корректные данные';
  var cs = casesensetive || false; //default setting for case sensitive
  var str = string.split(' ');
  var count = 0;
  for ( var i = 0; i < str.length; i++) {
    if (cs) {
      var word = str[i];
    } else {
      var word = str[i].toLowerCase();

    }
    if (word === search) count++;
  }
  if (count) {
    return count;
  } else {
    return 'Совпадений не найдено';
  }
}
console.log(searchWord('text', string));
console.log(searchWord('text', 10));
console.log(searchWord('text', string, true)); //case sensetive setting
console.log(searchWord('fuckjs', string, true)); //case sensetive setting

console.log('\n\n');

var search = {};
var addSearchCondition = function (context, name, fn) {
  var oldFn = context[name];
  context[name] = function() {
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    } else {
      return oldFn.apply(this, arguments);
    }
  }
}
addSearchCondition( search, 'searchWord', function() {
  return 'No values';
});
addSearchCondition( search, 'searchWord', function(search) {
  return 'Not enough input data.';
});
addSearchCondition( search, 'searchWord', function(search, string) {
  return '2 values';
});
addSearchCondition( search, 'searchWord', function(search, string, casesensetive) {
  return '3 values';
});

console.log(search.searchWord());
console.log(search.searchWord('text'));
console.log(search.searchWord('text', string));
console.log(search.searchWord('text', string, true));
console.log('\n\n');


// 4. Write a function to count the number of divs on the web page
var countDivs = function() {
  // var count = 0;
  var divs = document.getElementsByTagName('div');
  return divs.length;
}
console.log('Number of divs: ' + countDivs());
