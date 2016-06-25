'use strict';
// ------------------------------------------------------------------------------------------------------------
// Task 1
//
// Создайте 3 переменные   x = 6, y = 15, и z = 4:
// Выполните и отобразите результат следующих операций для этих переменных:
// · x += y - x++ * z ;
// · z = -- x - y * 5 ;
// · y /= x + 5 % z ;
// · z = x++ + y * 5 ;
// · x = y - x++ * z ;

var x = 6;
var y = 15;
var z = 4;

console.log("[ Задача 1 ]");
console.log("Исходные данные: " + "x = " + x + ", y = " + y + ", z = " + z);


//1
console.log("\n1.\n");
console.log("x += y - x++ * z");
console.log("Результат: x = " + (x += y - x++ * z));

//2
console.log("\n2.\n");
console.log("z = --x - y * 5");
console.log("Результат: z = " + (z = --x - y * 5));

//3
console.log("\n3.\n");
console.log("y /= x + 5 % z");
console.log("Результат: y = " + (y /= x + 5 % z));

//4
console.log("\n4.\n");
console.log("z = x++ + y * 5");
console.log("Результат: z = " + (z = x++ + y * 5));

//5
console.log("\n5.\n");
console.log("x = y - x++ * z");
console.log("Результат: x = " + (x = y - x++ * z));


console.log("\n\n");


// ------------------------------------------------------------------------------------------------------------
// Task 2
//
// Вычислите среднее арифметическое трех целочисленных значений и выведите его на экран.
var x = 6;
var y = 15;
var z = 4;

console.log("[ Задача 2 ]");
console.log("Среднее арифметическое трех целочисленных значений");
console.log("Исходные данные: " + "x = " + x + ", y = " + y + ", z = " + z);
console.log( "Результат: " + (( x + y + z ) / 3) );

console.log("\n\n");


//Функция для подсчета среднего арифметического
var arithmeticMean = function () {
  var length = arguments.length;
  var sum = 0;
  if(length > 0 ) {
    var args = [];
    for ( var i = 0; i < length; i++) {
        sum += arguments[i];
    }
    return sum / length;
  } else {
    return "Задайте операнды";
  }
}
console.log("Подсчет через функцию: ");
console.log("Среднее арифметическое: " + arithmeticMean(x, y, z));
console.log("Среднее арифметическое: " + arithmeticMean(32, 8, 1, 10, 34));

console.log("\n\n");

// ------------------------------------------------------------------------------------------------------------
// Task 3
//
// Напишите программу расчета объема - V и площади поверхности - S цилиндра.
// Объем V цилиндра радиусом - r и высотой – h, вычисляется по формуле: V = πr 2 h.
// Площадь S поверхности цилиндра вычисляется по формуле: S = 2π rh + 2π r 2 = 2π r (r+ h).
// Результаты расчетов выведите на экран.

var cylinderVolume = function (radius, height) {
  var r = radius || 0;
  var h = height || 0;
  if ((r > 0) && (h > 0)) {
    return Math.PI * Math.pow(r, 2) * h;
  } else {
    return "Задайте корректные данные";
  }

}

var cylinderSurfaceArea = function (radius, height) {
  var r = radius || 0;
  var h = height || 0;
  if ((r > 0) && (h > 0)) {
    return 2 * Math.PI * r * (r + h) ;
  } else {
    return "Задайте корректные данные";
  }
}

//Tests
var r = 15;
var h = 24;

console.log("[ Задача 3 ]");
console.log("Исходные данные:");
console.log("Радиус = " + r);
console.log("Высота = " + h);
console.log("Объем цилиндра: " + cylinderVolume(r,h));
console.log("Площадь поверхности: " + cylinderSurfaceArea(r,h));
