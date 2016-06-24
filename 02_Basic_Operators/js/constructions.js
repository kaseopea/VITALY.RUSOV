'use strict';
// ------------------------------------------------------------------------------------------------------------
// task 1
// Дано два числа A и B где (A<B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var sumRange = function (start, end) {
  var sum = 0;
  if (start && end && (start < end)) {
    for ( var i = start; i <= end; i++) {
      sum += i;
    }
  } else {
    return "Введите корректные данные";
  }
  return sum;
}

var oddNumbersRange = function (start, end) {
  var numbers = [];
  if (start && end && (start < end)) {
    var first = ( start % 2 == 0 ) ? (start + 1) : (start);
    for ( var i = first; i <= end; i += 2) {
      numbers.push(i);
    }
  } else {
    return "Введите корректные данные";
  }

  return numbers.toString();
}

console.log("[ Задача 1 ]");
console.log("Сумма чисeл в диапазоне [10..30] - " + sumRange(10,30));
console.log("Нечетные числа в диапазоне [10..20] - " + oddNumbersRange(-10,10));

console.log("\n\n");

// ------------------------------------------------------------------------------------------------------------
// Task 2
// Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара.
// Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while .

var possibleDeliveryOptions = function (number) {
  var factorial = 1;
  var counter = number || 1;
  do {
      if (counter == 0) {
          break;
      }
      factorial *= counter;
      counter -= 1;
  } while (counter > 0);

  return factorial;
}

console.log("[ Задача 2 ]");
var goods = 7;
console.log("Исходные данные: " + "Количество товаров = " + goods);
console.log("Количество возможных вариантов доставки товара: " + possibleDeliveryOptions(goods));
console.log("\n\n");


// ------------------------------------------------------------------------------------------------------------
// Task 3
// Используя циклы нарисуйте в браузере с помощью пробелов (&nbsp) и звездочек (*):
// · Прямоугольник
// · Прямоугольный треугольник
// · Равносторонний треугольник
// · Ромб.

// Функция рисования прямоугольника
var drawRectangle = function (width, height) {
  var output = '';
  var width = width || 5;
  var height = height || 10;
  for ( var i = 0; i < height; i++) {
    for ( var j = 0; j < width; j++) {
      if ( (i == 0) || (i == height - 1) || (j == 0) || (j == width - 1)) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  return output;
}

// Функция рисования прямоугольного треугольника
var triangleRight = function (size) {
  var output = '';
  var size = size || 10;
  for ( var i = 0; i < size; i++) {
    for ( var j = 0; j < i + 1; j++ ) {
      if ((j == 0) || (j == i) || (i == size - 1)) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  return output;
}

// Функция рисования равностороннего треугольника
var triangleEqual = function (size) {
  var output = '';
  var size = size || 10;
  for( var i = 0; i < size; i++ ) {
    for( var j = -size + 1; j <= i; j++) {
      if ((Math.abs(j) == i) || (i == size - 1)) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }
  return output;
}

// Функция рисования ромба
var rhombus = function (side) {
  var output = '';
  var side = side || 5 ;
  var steps = side * 2 - 1;
  for( var i = -side + 1; i < side; i++ ) {
    for( var j = -side + 1; j < steps - Math.abs(i); j++) {
      if (Math.abs(j) == side - Math.abs(i) - 1) {
        output += "*";
      } else {
        output += " ";
      }
    }
    output += "\n";
  }

  return output;
}


console.log("[ Задача 3 ]");
console.log(drawRectangle(30,5));
console.log(triangleRight(10));
console.log(triangleEqual(7));
console.log(rhombus(5));
