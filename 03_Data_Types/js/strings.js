// Strings
//
// 1. Write a JavaScript function reverses string and returns it
//     * Example: "sample" -> "elpmas".

var reversByChar = function(string) {
  var reversed = '';
  var char;

  if (_.isString(string)) {
    for ( char = string.length - 1; char >= 0; char--) {
      reversed += string.charAt(char);
    }
    return reversed;
  } else {
    throw new Error('Please, specify input string.');
  }

}

var reversString = function(string) {
  var str = string || '';
  if (_.isString(string)) {
    return string.split('').reverse().join('');
  } else {
    throw new Error('Please, specify input string');
  }
}
console.log('Task 1');
console.log(reversString('sample'));
console.log(reversString('correct expression'));
// console.log(reversString());
// console.log(reversString(5));
console.log(reversString(''));
console.log(reversByChar('sample'));
console.log(reversByChar('correct expression'));
// console.log(reversByChar());
// console.log(reversByChar(10));

console.log('\n\n');


// 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
//     * Example of correct expression: `((a+b)/5-d)`.
//     * Example of incorrect expression: `)(a+b))`.

var checkBrackets = function(expression) {
  var brackets = 0;
  if (_.isString(expression) && (expression !== '')) {
    for (var i = 0 ; i < expression.length; i++ ) {
      if (expression.charAt(i) === '(') {
        brackets++;
      }
      if (expression.charAt(i) === ')') {
        brackets--;
      }
      if (brackets < 0) {
        return false;
      }
    }
    if (brackets == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error('Please, specify input string expression');
  }
}
console.log('Task 2');
var expression1 = '((a+b)/5-d)';
var expression2 = ')(a+b))';

var result1 = (checkBrackets(expression1)) ? 'correct' : 'incorrect';
var result2 = (checkBrackets(expression2)) ? 'correct' : 'incorrect';

console.log('((a+b)/5-d) is ' + result1);
console.log(')(a+b)) is ' +  result2);

// console.log(checkBrackets());
// console.log(checkBrackets(10));
// console.log(checkBrackets(''));

console.log('\n\n');


// 3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//     **Example**: The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.
//     The result is: 9.

var testString = 'We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.';

var searchTimesString = function(search, string) {
  var pattern;
  var count;
  if (_.isString(search) && _.isString(string)) {
    pattern = new RegExp(search.toString(), 'gi');
    count = (string.match(pattern)|| []).length;
    return count;
  } else {
    throw new Error('Please, specify correct input strings.');
  }

}

console.log('Task 3');
console.log(testString);
console.log('Search for \'in\' : ' + searchTimesString('in', testString) + ' times');
// console.log(searchTimesString());
// console.log(searchTimesString('in'));

console.log('\n\n');


// 4. You are given a text. Write a function that changes the text in all regions:
//     * `<upcase>text</upcase>` to uppercase.
//     * `<lowcase>text</lowcase>` to lowercase
//     * `<mixcase>text</mixcase>` to mix casing (random)
//     **Example**: `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`
//     The expected result: `We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`
//     Regions can be nested.

var newParser = function (string) {
  var result = string || '';
  var mixcasePattern = /<mixcase>(.*?)<\/mixcase>/gi;
  var upcasePattern = /<upcase>(.*?)<\/upcase>/gi;
  var lowcasePattern = /<lowcase>(.*?)<\/lowcase>/gi;

  if(_.isString(result)) {

    result = result.replace(mixcasePattern, function (match, inner) {
        var newMixCase = '';
        var upperOrLower;
        var replaced;
        for (i = 0; i < inner.length; i++) {
            upperOrLower = Math.round(Math.random());
            replaced = (upperOrLower) ? inner.charAt(i).toUpperCase() : inner.charAt(i).toLowerCase();
            newMixCase += replaced;
        }
        return newMixCase;
      });

    result = result.replace(upcasePattern, function (match, inner) {
      upcasePattern = /<upcase>(.*?)<\/upcase>$$/gi;
      match = match.replace(upcasePattern, inner.toUpperCase());
      return inner.toUpperCase();
    });
    result = result.replace(lowcasePattern, function (match, inner) {
      match = match.replace(lowcasePattern, inner.toLowerCase());
      return inner.toLowerCase();
    });
    return result;
  } else {
    throw new Error('Please specify string to parse;');
  }


}
console.log('Task 4');
var testString = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
'We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';
var nested = '<upcase>yellow <lowcase>submarine</lowcase></upcase>';
console.log(newParser(testString));
console.log(newParser(nested));


console.log('\n\n');

// 5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`
var testString = document.getElementById('test');

var processWhitespaces = function(string) {
  var pattern;
  if ( _.isString(string)) {
    pattern = /\s{1,}/g;
    return string.replace(pattern, '&nbsp;');
  } else {
    throw new Error('Incorrect input data.');
  }
}
console.log('Task 5');
console.log(processWhitespaces(testString.innerHTML));

console.log('\n\n');

// 6. Write a function that extracts the content of a html page given as text.
// The function should return anything that is in a tag, without the tags:
//     <html>
//         <head>
//             <title>Sample site</title>
//         </head>
//         <body>
//             <div>text<div>more text</div>and more...</div>in body
//         </body>
//     </html>
//     Result: `Sample sitetextmore textand more...in body`

var testString = document.getElementById('test_html');

var extractTextFromHTML = function(string) {
  var result = '', pattern;
  if (typeof string == 'string') {
    pattern = /<.*?>/g;
    result = string.replace(pattern, '');
    pattern = /\s{2,}/g;
    result = result.replace(pattern,'').trim();
    return result;
  } else {
    throw new Error('Incorrect input data.');
  }
}
console.log('Task 6');
console.log(extractTextFromHTML(testString.value));


console.log('\n\n');


// 7. Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and `[resource]` elements. Return the elements in a JSON object.
//     For example from the URL `http://www.tut.by/forum/index.php` the following information should be extracted:
//     {
//         protocol: "http",
//         server: "www.tut.by",
//         resource: "/forum/index.php"
//     }

var createUrlObject = function(url) {
  var protocolMatch, serverMatch, resourceMatch;
  var parsed = {
    "protocol": "",
    "server": "",
    "resource": "",
    "toString": function() {
      return '[protocol: "' + this.protocol + '", server: "' + this.server + '", resource: "' + this.resource + '"]';
    }
  }

  if (typeof url != 'string') {
    return 'Incorrect input data';
  }

  protocolMatch = url.match(/(.*):\/\//);
  serverMatch = url.match(/:\/\/(.*?)\//);
  resourceMatch = url.match(/[a-zA-Z](\/.*)/);

  parsed.protocol = (protocolMatch) ? protocolMatch[1] : '';
  parsed.server = (serverMatch) ? serverMatch[1] : '';
  parsed.resource = (resourceMatch) ? resourceMatch[1] : '';

  return parsed;
}

//tests
console.log('Task 7');
console.log(createUrlObject(10));
console.log(createUrlObject());
console.log(createUrlObject('http://www.tut.by/forum/index.php'));
console.log(createUrlObject('http://tut.by/forum/index.php'));
console.log(createUrlObject('http://tut.by/forum/index.php?param=true'));
console.log(createUrlObject('ftp://ftp.is.to.com/docs/data1788.txt'));
