'use strict';
// Arrays

// 1. Write a script that allocates array of 20 integers and initializes each
// element by its index multiplied by 5. Print the obtained array on the console.

var generateArray = function (size) {
  var array = [];
  var i;

  if (typeof size === 'undefined') {
    return array;
  }
  if (_.isInteger(size) && (size > 0)) {
    for (i = 0; i < size; i++) {
      array[i] = i * 5;
    }
    return array;
  } else {
    throw new Error('Please, provide an integer positive number for array size.');
  }

}

//tests
console.log('Task 1');
console.log(generateArray(20));
// console.log(generateArray(-20));
// console.log(generateArray(0));
// console.log(generateArray());
// console.log(generateArray('20'));

console.log('\n\n');

// 2. Write a script that compares two char arrays lexicographically
// (letter by letter).
var str1 = 'JavaScript'.split('');
var str2 = 'Javastrip'.split('');
var str3 = 'Javascript'.split('');
var str4 = 'Javascript'.split('');
var str5 = 'Javascripts'.split('');

var compareCharsArrays = function(charsArray1, charsArray2) {
  var arr1 = charsArray1;
  var arr2 = charsArray2;
  var minSize = 0;
  var char1, char2;
  var first = 0;
  var i = 0;

  if (_.isUndefined(charsArray1) || _.isUndefined(charsArray2) || (!_.isArray(charsArray1)) || (!_.isArray(charsArray2))) {
    throw new Error('Please, specify 2 chars arrays');
  }
  minSize = (arr1.length > arr2.length) ? arr2.length : arr1.length;

  while (i < minSize) {
    char1 = arr1[i].charCodeAt(0);
    char2 = arr2[i].charCodeAt(0);
    if (char1 > char2) {
      first = 1;
      return arr1 + ' is first lexicographically.';
    } else if (char2 > char1) {
      first = 2;
      return arr2 + ' is first lexicographically.';
    }
    i++;
  }
  if ( !first && (arr1.length === arr2.length)) {
    return arr1 + ' is equal to ' + arr2;
  } else {
    return (arr1.length > arr2.length) ? (arr1 + ' is first lexicographically.') : (arr2 + ' is first lexicographically.');
  }

}
console.log('Task 2');
console.log(compareCharsArrays(str1, str2));
console.log(compareCharsArrays(str3, str2));
console.log(compareCharsArrays(str3, str4));
console.log(compareCharsArrays(str5, str4));
// console.log(compareCharsArrays(10, 20));
// console.log(compareCharsArrays(str5));
// console.log(compareCharsArrays());

console.log('\n\n');


// 3. Write a script that finds the maximal sequence of equal elements in an array.
// **Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 1] -> [2, 2, 2].

var maxEqualSequence = function(array) {
  var arr = array;
  var currentSequence = 1;
  var longestSequence = 1;
  var indexOfLongest;
  var i;

  if (arr instanceof Array) {
    for (i = 0; i < arr.length; i++) {
      if ((arr[i] === arr[i + 1]) && (typeof arr[i] === typeof arr[i+1])) {
         currentSequence++;
      } else {
         if (longestSequence < currentSequence) {
             longestSequence = currentSequence;
             indexOfLongest = i - currentSequence + 1;
         }
         currentSequence = 1;
      }
     }
    return arr.slice(indexOfLongest, indexOfLongest + longestSequence);
  } else {
      throw new Error('Please, specify input array.');
  }
}

//tests
var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];
var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, true, true, true, true, 1, 1];
console.log('Task 3');
console.log(array);
console.log('Maximal sequence of equal elements:');
console.log(maxEqualSequence(array));

// console.log(maxEqualSequence(10));
// console.log(maxEqualSequence());

console.log('\n\n');


// 4. Write a script that finds the maximal increasing sequence in an array.
// **Example:** [3, 2, 3, 4, 2, 2, 4] -> [2, 3, 4].
var maxIncSequence = function(array) {
  var arr = array;
  var currentSequence = 1;
  var longestSequence = 1;
  var indexOfLongest;
  var i;

  if (_.isArray(arr)) {
    for (i = 0; i < arr.length; i++) {
      //check if number, same type and increases
      if ((arr[i] < (arr[i + 1])) && (_.isNumber(arr[i])) && (typeof arr[i] === typeof arr[i+1])) {
         currentSequence++;
      } else {
         if (longestSequence < currentSequence) {
             longestSequence = currentSequence;
             indexOfLongest = i - currentSequence + 1;
         }
         currentSequence = 1;
      }
     }
    return arr.slice(indexOfLongest, indexOfLongest + longestSequence);
  } else {
    throw new Error('Please, specify input array.');
  }
}

//tests
console.log('Task 4');
var array1 = [3, 2, 3, 4, 2, true, 2, 4.4, 8, 9];
var array2 = [5, 4, 3, 2, 1];
console.log(array1);
console.log(maxIncSequence(array1));
console.log(array2);
console.log(maxIncSequence(array2));
// console.log(maxIncSequence(10));
// console.log(maxIncSequence());
