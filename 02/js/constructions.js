// ------------------------------------------------------------------------------------------------------------
// task 1
// Дано два числа A и B где (A<B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В.
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var sumRange = function (start, end) {
  var sum = 0;
  for ( var i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

var oddNumbersRange = function (start, end) {
  var numbers = [];
  var first = ( start % 2 == 0 ) ? (start + 1) : (start);
  for ( var i = first; i <= end; i += 2) {
    numbers.push(i);
  }
  return numbers.toString();
}

console.log("[ Задача 1 ]");
console.log("Сумма чисeл в диапазоне [10..20] - " + sumRange(10,20));
console.log("Нечетные числа в диапазоне [10..20] - " + oddNumbersRange(10,20));

console.log("\n\n");

// ------------------------------------------------------------------------------------------------------------
// Task 2
// Напишите программу, которая будет рассчитывать и выводить на экран количество возможных вариантов доставки товара. Для решения задачи, используйте факториал N!, рассчитываемый с помощью цикла do-while .
//
var possibleDeliveryOptions = function (number) {
  var factorial = 1;
  var counter = number;
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
  for ( var i = 0; i < width; i++) {
    for ( var j = 0; j < height; j++) {
      if ( (i == 0) || (i == width - 1) || (j == 0) || (j == height - 1)) {
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
  var steps = Math.ceil(size / 2);
  for( var i = 0; i < steps; i++ ) {
    for( var j = -steps + 1; j <= i; j++) {
      if ((Math.abs(j) == i) || (i == steps - 1)) {
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
var rhombus = function (size) {
  var output = '';
  var middle = Math.floor(size / 2);
  for( var i = -middle; i <= middle; i++) {
    var stars = size - (Math.abs(i)*2);
    output += renderLine(stars, size);
  }

  function renderLine ( stars, size ) {
    var sides = Math.floor((size - stars) / 2);
    var output = '';

    output += renderSide(sides);
    output += renderStar(stars);
    output += renderSide(sides);
    // console.log(output);
    return output + "\n";

    function renderStar(stars) {
      var output = '';
      for ( var i = 0; i < stars; i++ ) {
        output += "*";
      }
      return output;
    }

    function renderSide (size) {
      var output = '';
      for ( var i = 0; i < size; i++ ) {
        output += " ";
      }
      return output;
    }
  }
  return output;
}
console.log("[ Задача 3 ]");
console.log(drawRectangle(3,30));
console.log(triangleRight(10));
console.log(triangleEqual(9));
console.log(rhombus(3)); //check for minimal value

// todo
// check for minimal value triangleEqual and rhombus;
// optimize output
// try to make function where right triangle has different sizes