/*
Task 1.2
2. Create a function that gets the value of <input type="text"> ands prints its value to the console
*/


var printToConsole = function() {
    var input = document.querySelector('input#typeInput');

    if (input.value) {
        console.log(printBoxed(input.value));
    } else {
        console.log('Please, type something that we can log to console');
    }
};

function printBoxed(word) {
    var output ='',
        width = word.length + 4;

    _.times(width, function() {
        output +='*';
    });

    output += '\n* ' + word + ' *\n';

    _.times(width, function() {
        output +='*';
    });

    return output;
}