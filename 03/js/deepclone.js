// 3. Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.

// Разобраться с материалом
// http://blog.soulserv.net/understanding-object-cloning-in-javascript-part-ii/

Object.prototype.deepCopy = function (obj) {

  if ((obj === null) || (obj === undefined) || (typeof obj !== 'object')) {
    console.log('ok');
    return obj;
  }

  if (arguments.length > 0) {

    if (obj instanceof Object) {
        return almostDeepCopy(obj);
    } else {
      var clone = obj;
      return clone;
    }

  } else {
    return 'Please, specify data for cloning.';
  }

  // almost deep copy
  function almostDeepCopy( original ) {
      // First create an empty object with same prototype of our original source
      var clone = Object.create( Object.getPrototypeOf( original ) ) ;
      var i , descriptor , keys = Object.getOwnPropertyNames( original ) ;

      for ( i = 0 ; i < keys.length ; i ++ ) {
          // Save the source's descriptor
          descriptor = Object.getOwnPropertyDescriptor( original , keys[ i ] ) ;
          if ( descriptor.value && typeof descriptor.value === 'object' ) {
              // If the value is an object, recursively deepCopy() it
              descriptor.value = almostDeepCopy( descriptor.value ) ;
          }

          Object.defineProperty( clone , keys[ i ] , descriptor ) ;
      }
      return clone ;
  }
  // return clone;
}

//reference types
var varObject = {
    name: "Arthur",
    familyName: "Dent",
    age: "30",
    origin: "Earth"
}

var varArray = [2, 1, 1, 2, 3, 3, { name: 'text1', class: { class1: 'bold', class2: 'italic'}}, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1];

var varFunction = function () {
  var arr = [3,2,1];
  return arr.sort( function(a, b) {
    return a - b;
  });
}

var cloneArray = Object.deepCopy(varArray);
varArray[2] = 7770;
// console.log(varArray);
// console.log(cloneArray);

// console.log(Object.deepCopy(varArray));
// console.log(Object.deepCopy(varFunction));
var cloneObj = Object.deepCopy(varObject);
varObject.age = 50;
// console.log(varObject);
// console.log(cloneObj);

//primitives
// var varBoolean = true;
// var varNull = null;
// var varUndefined = undefined;
// var varNaN = NaN;
// var varNumber = 77;
// var varString = 'Hello world!';
//
// var newBoolean = Object.deepCopy(varBoolean);
// var newNull = Object.deepCopy(varNull);
// var newUndefined = Object.deepCopy(varUndefined);
// var newNumber = Object.deepCopy(varNumber); //includes NaN
// var newString = Object.deepCopy(varString);
//
// // console.log('------------------------------------');
// // varBoolean = false;
// // console.log(varBoolean);
// // console.log(newBoolean);
// // console.log('------------------------------------');
// // varNull = 1;
// // console.log(newNull);
// // console.log('------------------------------------');
// // varUndefined = 1;
// // console.log(newUndefined);
// // console.log('------------------------------------');
// // varNumber = 88;
// // console.log(varNumber);
// // console.log(newNumber);
// // console.log('------------------------------------');
// // varString = 'Bye-Bye!';
// // console.log(varString);
// // console.log(newString);
// // console.log('------------------------------------');
