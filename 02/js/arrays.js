"use strict";
// ------------------------------------------------------------------------------------------------------------
// Task 1
// Требуется: Создать массив размерностью N элементов, заполнить его произвольными целыми значениями.
// Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов,
// среднее арифметическое всех элементов, вывести все нечетные значения.

var randomArray = function (size) {
  var array = [];
  for (var i = 0 ; i < size; i++) {
    array.push(Math.floor( -10 + Math.random() * 20));
  }
  return {
    render: function() {
      return array;
    },
    minimum: function () {
      return Math.min.apply(Math, array);
    },
    maximum: function () {
      return Math.max.apply(Math, array);
    },
    sum: function () {
      return array.reduce( function (a,b) {
        return a + b;
      });
    },
    arithmeticMean: function () {
      return array.reduce( function (a,b) {
        return a + b;
      }) / array.length;
    },
    oddNumbers: function () {
      var odds = [];
      for( var i = 0; i < array.length; i ++) {
        if (array[i] % 2 != 0) {
          odds.push(array[i]);
        }
      }
      return odds;
    }

  };
}
console.log("[ Задача 1 ]");
var myArray = new randomArray(12);
console.log("Случайный массив: ");
console.log(myArray.render());
console.log("Минимальное значение: " + myArray.minimum());
console.log("Максимальное значение: " + myArray.maximum());
console.log("Сумма элементов: " + myArray.sum());
console.log("Среднее арифметическое всех элементов: " + myArray.arithmeticMean());
console.log("Нечетные номера: " + myArray.oddNumbers().toString());



console.log("\n\n");
// ------------------------------------------------------------------------------------------------------------
// Tasks 2
// Требуется: Создать двумерный массив элементов размерностью 5х5 и заполнить его произвольными целочисленными значениями.
// По главной диагонали все числа со знаком (-) заменить на 0, а числа со знаком (+) на число 1.

var multiArray = function(size) {
  var array = [];
  for ( var i = 0; i < size; i++ ) {
    var arr = [];
    for ( var j = 0; j < size; j++) {
      arr.push(Math.round(-100 + Math.random() * 200));
    }
    array.push(arr);
  }
  return array;
}

function processArray(array) {
  var arr = array;
    for (var i = 0; i < array.length; i++) {
      arr[i][i] = (arr[i][i] <= 0) ?  0 : 1;
    }
    return arr;
}

console.log("[ Задача 2 ]");
var array = multiArray(5);
console.log(processArray(array));
console.log(array);
