// Task 1.
//
// Create a function constructor for Person. Each Person must have:
// 1. properties firstname, lastname and age
// 	1.1. firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
// 	1.2. age must always be a number in the range (0, 150), inclusive
// 		1.2.1. the setter of age can receive a convertible-to-number value
// 	1.3. if any of the above is not met, throw Error
//
// 2. property fullname
// 	2.1. the getter returns a string in the format 'FIRST_NAME LAST_NAME'
// 	2.2. the setter receives a string is the format 'FIRST_NAME LAST_NAME'
// 		2.2.1. it must parse it and set firstname and lastname
//
// 3. method introduce() that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
//
// 4. all methods and properties must be attached to the prototype of the Person

/**
 * Person class
 * @param firstname
 * @param lastname
 * @param age
 * @constructor
 */
function Person(firstname, lastname, age) {
    //Options
    var _minCharsName = 3;
    var _maxCharsName = 20;
    var _minAge = 0;
    var _maxAge = 150;

    // Privates
    var _firstname = '';
    var _lastname = '';
    var _age = 0;

    // Firstname property
    Object.defineProperty(this, 'firstname', {
        get: function () {
            return _firstname;
        },
        set: function (firstname) {
            if (this.nameValidator(firstname, _minCharsName, _maxCharsName)) {
                _firstname = firstname;
            } else {
                console.error('Firstname is invalid. It should be between '+ _minCharsName + '..' + _maxCharsName + ' letters long.');
            }
        }
    });


    // Lastname property
    Object.defineProperty(this, 'lastname', {
        get: function () {
            return _lastname;
        },
        set: function (lastname) {
            if (this.nameValidator(lastname, _minCharsName, _maxCharsName)) {
                _lastname = lastname;
            } else {
                console.error('Lastname is invalid. It should be between '+ _minCharsName + '..' + _maxCharsName + ' letters long.');
            }
        }
    });

    // Age Property
    Object.defineProperty(this, 'age', {
        get: function () {
            return _age;
        },
        set: function (age) {
            if (this.ageValidator(age, _minAge, _maxAge)) {
                _age = age;
            } else {
                console.error('Check age. It should be in range of ' + _minAge + '..' + _maxAge);
            }
        }
    });

    // Setting up
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;


    // Fullname property
    Object.defineProperty(this, 'fullname', {
        get: function () {
            return this.firstname + ' ' + this.lastname;
        },
        set: function (fullname) {
            var names = fullname.split(' ');
            var fname = names[0];
            var lname = names[1];

            if (this.nameValidator(fname, _minCharsName, _maxCharsName) && this.nameValidator(lname, _minCharsName, _maxCharsName)) {
                this.firstname = names[0];
                this.lastname = names[1];

            } else {
                console.error('Firstname or lastname is invalid');
            }
        }
    });

};


// nameValidator method
Person.prototype.nameValidator = function (name, minChar, maxChar) {
    var nameRegexp = new RegExp('^[a-z]+', 'ig');
    if (_.isString(name)) {
        return (nameRegexp.test(name) && _.inRange(name.length, minChar, maxChar));
    } else {
        return false;
    }

};

// ageValidator method
Person.prototype.ageValidator = function (age, minAge,maxAge) {
    return (_.inRange(age, minAge, maxAge + 1) && (age >= 0) && (_.isNumber(age) || _.isString(age)) && !isNaN(parseInt(age)));
};

// introduce method
Person.prototype.introduce = function () {
    return 'Hello! My name is ' + this.firstname + ' ' + this.lastname + ' and I am ' + this.age + '-years-old';
};


// Tests

console.log('Task 1 ***********************************\n\n');

var person1 = new Person('Vitaly', 'Rusov', '32');
console.log(person1.introduce());
console.log(person1.fullname);

console.log('person1 instanceof Person ', person1 instanceof Person);
console.log('Person.prototype === person1.__proto__ ', Person.prototype === person1.__proto__);


console.log('\n\n');

var person2 = new Person('Ivan', 'Ivanov', 20);
console.log(person2.introduce());
console.log(person2.fullname);


//var person3 = new Person('32');
//var person4 = new Person('Olga', {}, '-32');
//var person3 = new Person('', '');