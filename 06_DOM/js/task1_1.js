/*

 Task 1 1
 1. Write a script that selects all the div nodes that are directly inside other div elements
 * Create a function using querySelectorAll()
 * Create a function using getElementsByTagName()

 */
//using querySelectorAll()
var countDivInsideDiv1 = function () {
    var divs = document.querySelectorAll('div > div');
    var result = document.querySelector('#result1 span');
    var counter = divs.length;

    console.log('We have found ' + counter + ' divs inside divs');
    result.innerHTML = counter;
};

//using getElementsByTagName()
var countDivInsideDiv2 = function () {
    var counter = 0;
    var divs = document.getElementsByTagName('div');
    var result = document.querySelector('#result2 span');

    _.forEach(divs, function (el) {
        if (el.parentElement.nodeName === 'DIV') {
            counter++;
        }
    });

    console.log('We have found ' + counter + ' divs inside divs');
    result.innerHTML = counter;

};