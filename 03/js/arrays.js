'use strict';
// Arrays
//
// 1. Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5. Print the obtained array on the console.

var generateArray = function (size) {
  var array = Array(size);
  for ( var i = 0; i < array.length; i++) {
    array[i] = i * 5;
  }
  return array;
}

console.log(generateArray(20));

// 2. Write a script that compares two char arrays lexicographically (letter by letter).

var str1 = 'JavaScript';
var str2 = 'Javastrip';
var str3 = 'Javascript';
console.log('===========');
console.log(str3 > str2);
console.log('===========');

var compareLetterByLetter = function(str1, str2) {

  //check for input data
  var arr1 = str1.split(''), arr2 = str2.split('');
  var first;
  console.log(arr1.length);
  console.log(arr2.length);
  var minLength = (arr1.length > arr2.length) ? arr2.length : arr1.length;
  var i = 0;
  console.log('Comparing [' + arr1 + '] and [' + arr2 + ']');
  //
  while (i < minLength) {
    if (arr1[i] < arr2[i]) {
      first = 1;
      break;
    } else {
      first = 2;
      break;
    }
    i++;
  }
  var arr = (first - 1) ? arr2 : arr1;
  return '[' + arr + '] is first lexicographically.';
}

console.log(compareLetterByLetter(str1, str2));


// 3. Write a script that finds the maximal sequence of equal elements in an array.
//
//     **Example:** [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 1] -> [2, 2, 2].
var array = [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1];

var maxEqualSequence = function(array) {
  var arr = array;
  var currentSequence = 1;
  var longestSequence = 1;
  var indexOfLongest;

  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] == arr[i + 1])  && (!isNaN(arr[i]))) {
       currentSequence++;
    } else {
       if (longestSequence < currentSequence) {
           longestSequence = currentSequence;
           indexOfLongest = i - currentSequence + 1;
       }
       currentSequence = 1;
    }
   }
  // var result =
  return arr.slice(indexOfLongest, indexOfLongest + longestSequence);
}
console.log(maxEqualSequence(array));

// 4. Write a script that finds the maximal increasing sequence in an array.
//
//     **Example:** [3, 2, 3, 4, 2, 2, 4] -> [2, 3, 4].

var array = [3, 2, 3, 4, 2, 2, 4];
var maxIncSequence = function(array) {
  var arr = array;
  var currentSequence = 1;
  var longestSequence = 1;
  var indexOfLongest;

  for (var i = 0; i < arr.length; i++) {

    if ((arr[i] == (arr[i + 1] - 1)) && (!isNaN(arr[i]))) {
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
}
console.log(maxIncSequence(array));
