// Objects
//
// 1. Write functions for working with shapes in standard Planar coordinate system
//     * Points are represented by coordinates `P(X, Y)`
//     * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
//     * Calculate the distance between two points
//     * Check if three segment lines can form a triangle




// 2. Write a function that removes all elements with a given value
// 	* var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
//     * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];
//    * Attach it to the array object
//    * Read about `prototype` and how to attach methods
Array.prototype.remove = function (elements) {
  var array = this;
  var indexes = [];

  for (var i = 0; i < arguments.length; i++) {
    var deleteArg = arguments[i];
    array.forEach(function(el, i, arr) {
      if (arr[i] === deleteArg) {
        indexes.push(i);
      }
    });
  }
  indexes.sort(function(a,b) {
    return a - b;
  });
  for (var i = 0; i < indexes.length; i++) {
    array.splice(indexes[i] - i,1);
  }
  return array;
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
arr.remove(1);
console.log(arr);

console.log('---------------------------------------');

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
arr.remove(1,2);
console.log(arr);

console.log('---------------------------------------');

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
arr.remove('1', 1, 2);
console.log(arr);



// 3. Write a function that makes a deep copy of an object.
// The function should work for both primitive and reference types.


// 4. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
//    * Each person has properties `firstName`, `lastName` and `age`, as shown:
//    var persons = [
//      { firstName : "Gosho", lastName: "Petrov", age: 32 },
//      { firstName : "Bay", lastName: "Ivan", age: 81 }
//      ...
//    ];



// 5. Write a function that groups an array of persons by age, first or last name.
// The function must return an associative array, with keys - the groups,
// and values -arrays with persons in this groups.
// Use function overloading (i.e. just one function).
//
//    var persons = { ... };
//    var groupedByFirstName = group(persons, "firstname");
//    var groupedByAge = group(persons, "age");

function Person(name, lastName, age) {
   this.name = name;
   this.lastName = lastName;
   this.age = age;
   this.toString = function () {
       return this.name + " " + this.lastName + ", age: " + this.age;
   }
}
 var people = new Array();

people.push(new Person("Ivan", "Ivanov", 27));
people.push(new Person("Peter", "Petrov", 26));
people.push(new Person("Sidor", "Sidorov", 26));
people.push(new Person("Anka", "Hodor", 19));
people.push(new Person("Ivan", "Petrov", 33));
people.push(new Person("Anka", "Ivanov", 26));

console.log(people);

function group(people, property) {
    if (!people[0].hasOwnProperty(property)) {
        throw new Error("no such property!");
    }
    groups = {};
    people.map(function (current) {
        if (!groups[current[property]]) {
            groups[current[property]] = new Array();
        }
        groups[current[property]].push(current);
    });
    return groups;
}

// var groupedByFirstName = group(people, "name");
// var groupedByLastName = group(people, "lastName");
// var groupedByAge = group(people, "age");

// console.log(groupedByFirstName);
// console.log(groupedByLastName);
// console.log(groupedByAge);

printPeople(people);
printGrouped(people);

function printPeople(people) {
    for (var i = 0; i < people.length; i++) {
        console.log(people[i].toString());
    }
}
// console.log(typeof people);
function printGrouped(people) {
    for (var person in people) {
        //console.log(people[person]);
        console.log(person);
    }
}
