// Objects
//
// 1. Write functions for working with shapes in standard Planar coordinate system
//     * Points are represented by coordinates `P(X, Y)`
//     * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
//     * Calculate the distance between two points
//     * Check if three segment lines can form a triangle

var Point = function(x,y) {
  if (_.isNumber(x) && _.isNumber(y)) {
    this.x = x;
    this.y = y;
  } else {
    throw new Error('Please, specify correct coordinates');
  }

  this.clone = function() {
    return new Point(this.x, this.y);
  }

  this.getDistance = function (point) {
    return Math.sqrt(Math.pow((this.x - point.x), 2) + Math.pow((this.y - point.y), 2));
  }
  this.toString = function() {
    return 'Point: [ x = ' + this.x + ' | y = ' + this.y +' ]';
  }
}

var Line = function(point1, point2) {
  this.start = point1.clone();
  this.end = point2.clone();

  // calculate distance between points
  this.length = function () {
    return this.start.getDistance(this.end);
  }

  this.toString = function () {
    return "Start: " + this.start + " | End: " + this.end;
  }
}

var checkIfTrianglePossible = function(line1, line2, line3) {
  var length1 = line1.length();
  var length2 = line2.length();
  var length3 = line3.length();
  return (length1 + length2 > length3) && (length2 + length3 > length1) && (length1 + length3 > length2);
}

//tests
console.log('Task 1');
var p1 = new Point(7,2);
var p2 = new Point(1,8);
var p3 = new Point(1,2);

var p4 = new Point(0,9);
var p5 = new Point(9,9);


var lineA = new Line(p2,p3);
var lineB = new Line(p3,p1);
var lineC = new Line(p1,p2);

var lineD = new Line(new Point(0,9),new Point(9,9));
var lineE = new Line(new Point(1,0),new Point(1,1));
var lineF = new Line(new Point(7,0),new Point(7,1));

console.log(p1.toString());
console.log(p2.toString());
// console.log(p1.getDistance(p2));
// console.log(p2.getDistance(p1));
console.log('---------------------------------------');
console.log('Line A: ' + lineA + ' | Length: ' + lineA.length());
console.log('Line B: ' + lineB + ' | Length: ' + lineB.length());
console.log('Line C: ' + lineC + ' | Length: ' + lineC.length());
console.log('---------------------------------------');

console.log('Check if triangle possible: ' + checkIfTrianglePossible(lineA, lineB, lineC));
console.log('Check if triangle possible: ' + checkIfTrianglePossible(lineD, lineE, lineF));

console.log('\n\n');


// 2. Write a function that removes all elements with a given value
// 	* var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, "1"];
//     * arr.remove(1); // arr = [2, 4, 3, 4, 111, 3, 2, "1"];
//    * Attach it to the array object
//    * Read about `prototype` and how to attach methods

Array.prototype.remove = function (elements) {
  var array = this;
  var indexes = [];
  var deleteArg;
  var i;

  for (i = 0; i < arguments.length; i++) {
    deleteArg = arguments[i];
    array.map(function(el,j,arr) {
      if (arr[j] === deleteArg) {
        array.splice(j, 1);
      }
    });

  }
  return array;
}

//tests
console.log('Task 2');
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

console.log('\n\n');

//Task3
// reference - deepclone.js
console.log('Task 3');
console.log('See deepclone.js');
console.log('\n\n');

// 4. Write a function that finds the youngest person in a given array of persons and prints his/hers full name
//    * Each person has properties `firstName`, `lastName` and `age`, as shown:
//    var persons = [
//      { firstName : "Gosho", lastName: "Petrov", age: 32 },
//      { firstName : "Bay", lastName: "Ivan", age: 81 }
//      ...
//    ];
function Person(name, lastName, age, group) {
   this.name = name;
   this.lastName = lastName;
   this.age = age;
   this.group = group;
   this.toString = function () {
       return this.name + ' ' + this.lastName + ' [' + group +  '](' + this.age + 'yo)';
   }
}
 var people = new Array();

people.push(new Person("Ivan", "Ivanov", 26, 'designer'));
people.push(new Person("Peter", "Petrov", 26, 'developer'));
people.push(new Person("Sidor", "Sidorov", 26, 'developer'));
people.push(new Person("Anka", "Hodor", 19, 'designer'));
people.push(new Person("Ivan", "Petrov", 19, 'developer'));
people.push(new Person("Anka", "Ivanov", 26, 'developer'));
people.push(new Person("Mitri", "Valabanov", 27, 'developer'));
people.push(new Person("John", "Doe", 19, 'designer'));
// console.log(people);

var findYoungest = function(data) {
  var allyongest = [];
  if (data && (data instanceof Object)) {
    var yongest = data[0];
    for (var i = 0; i < data.length; i++) {
      if ((data[i].age < yongest.age) && Number.isInteger(data[i].age) && Number.isInteger(yongest.age)) {
        yongest = data[i];
      }
    }
    for (age in data) {
      if (data[age].age === yongest.age) {
        allyongest.push(data[age]);
      }
    }
    console.log(allyongest);
    return allyongest;
  } else {
    throw new Error('Please, specify correct input data object.');
  }

}

//tests
console.log('Task 4');
console.log('All people:');
console.log(people);
console.log('\n');
console.log('Youngest person(s) is(are):  ' + findYoungest(people).toString());
// console.log(findYoungest());
// console.log(findYoungest('sample'));

console.log('\n\n');

// 5. Write a function that groups an array of persons by age, first or last name.
// The function must return an associative array, with keys - the groups,
// and values -arrays with persons in this groups.
// Use function overloading (i.e. just one function).
//
//    var persons = { ... };
//    var groupedByFirstName = group(persons, "firstname");
//    var groupedByAge = group(persons, "age");

// var recommended_output = {
//   'designer': [
//     {name: "Ivan", lastName: "Ivanov", age: 27, group: "designer"},
//     {name: "Anka", lastName: "Hodor", age: 19, group: "designer"},
//     {name: "John", lastName: "Doe", age: 19, group: "designer"}
//   ],
//   'developer': [
//     {name: "Sidor", lastName: "Sidorov", age: 26, group: "developer"},
//     {name: "Peter", lastName: "Petrov", age: 26, group: "developer"}
//   ]
// };


// Recommended solution
var newGroup = function(obj, property) {
  var groups = {};
  var groupField = 'group';

  //sort by group
  obj.map(function(person) {
    var personGroup = person[groupField];

    if (!groups[personGroup]) {
      groups[personGroup] = [];
      groups[personGroup].push(person);
    } else {
      // group exists
      var currentGroup = groups[personGroup];

      for (var i = 0; i < currentGroup.length; i++) {
        var currentProp = currentGroup[i][property];

        //Check if current property is bigger than last array item, kind of optimization)
        if (person[property] > currentGroup[currentGroup.length - 1][property]) {
          groups[personGroup].push(person);
          break;
        }

        // checking and inserting property
        if (currentProp >= person[property]) {
          currentGroup.splice(i, 0, person);
          break;
        }
      }
    }
  });

  return groups;
}
console.log('Task 5');
console.log(people);
var groupedByFirstName = newGroup(people, "name");
var groupedByLastName = newGroup(people, "lastName");
var groupedByAge = newGroup(people, "age");

console.log(groupedByFirstName);
console.log(groupedByLastName);
console.log(groupedByAge);


// Another solution
var group = function (people, property) {
  var groups = {};

  //some checks
  if (!_.isObject(people)) {
    throw new Error("Input data is not an Object.");
  } else if (!people[0].hasOwnProperty(property)) {
    throw new Error("No such property!");
  }

  people.map(function (current) {
      if (!groups[current[property]]) {
          groups[current[property]] = new Array();
      }
      groups[current[property]].push(current);
  });
  return groups;
}

console.log('\nAnother solution');

var groups = {};

var groupedByFirstName = group(people, "name");
var groupedByLastName = group(people, "lastName");
var groupedByAge = group(people, "age");

groups['name'] = groupedByFirstName;
groups['lastName'] = groupedByLastName;
groups['age'] = groupedByAge;

console.log(groups);

console.log('\n\n');

// Some additional functions to present data
function printPeople(people) {
    for (var i = 0; i < people.length; i++) {
        console.log(people[i].toString());
    }
}

function printGrouped(data) {
  var person;
    for (var p in data) {
        // console.log(people[person]);
        console.log(p);
        for ( var i = 0; i < data[p].length; i++ ) {
          person = data[p][i];
          console.log(person.toString());
        }
        console.log('\n');
    }
}

console.log('>>> LIST OF PEOPLE');
printPeople(people);
console.log('\n>>> LIST GROUPED:');
printGrouped(newGroup(people, "age"));
