// Strings
//
// 1. Write a JavaScript function reverses string and returns it
//     * Example: "sample" -> "elpmas".
var reversByChar = function(string) {
  var reversed = '';
  for ( var char = string.length - 1; char >= 0; char--) {
    reversed += string.charAt(char);
  }
  return reversed;
}

var reversString = function(string) {
  var str = string || '';
  return string.split('').reverse().join('');
}
// console.log(reversString('sample'));
// console.log(reversString('correct expression'));
// console.log(reversByChar('sample'));
// console.log(reversByChar('correct expression'));

// 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
//     * Example of correct expression: `((a+b)/5-d)`.
//     * Example of incorrect expression: `)(a+b))`.

var expression1 = '((a+b)/5-d)';
var expression2 = ')(a+b))';

var checkBrackets = function(expression) {
  var brackets = 0;
  for (var i = 0 ; i < expression.length; i++ ) {
    if ( expression.charAt(i) == '(') {
      brackets++;
    }
    if ( expression.charAt(i) == ')') {
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
  return true;
}
// var result1 = (checkBrackets(expression1)) ? 'correct' : 'incorrect';
// var result2 = (checkBrackets(expression2)) ? 'correct' : 'incorrect';
// console.log('((a+b)/5-d) is ' + result1);
// console.log(')(a+b)) is ' +  result2);

// 3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//     **Example**: The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.
//     The result is: 9.

var testString = 'We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.';

var searchTimesString = function(search, string) {
  // var search = search.split('**')[1]; //todo rewrite detection
  var pattern = new RegExp(search.toString(), 'gi');
  var count = (string.match(pattern)|| []).length;
  return count;
}

// console.log(searchTimesString('in', testString));

// 4. You are given a text. Write a function that changes the text in all regions:
//     * `<upcase>text</upcase>` to uppercase.
//     * `<lowcase>text</lowcase>` to lowercase
//     * `<mixcase>text</mixcase>` to mix casing (random)
//
//     **Example**: `We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.`
//
//     The expected result: `We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.`
//
//     Regions can be nested.

var testString = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.';

var parseString = function(string) {

  if (typeof string == 'string') {
    var result = string;

    // regular expressions
    var mixcasePattern = /<mixcase>(.*?)<\/mixcase>/gi;
    var upcasePattern = /<upcase>(.*?)<\/upcase>/gi;
    var lowcasePattern = /<lowcase>(.*?)<\/lowcase>/gi;

    // uppercase
    result = result.replace(upcasePattern, function (match) {
      var pattern = /<upcase>|<\/upcase>/g;
      return match.replace(pattern,'').toUpperCase();
    });

    // lowercase
    result = result.replace(lowcasePattern, function (match) {
      var pattern = /<lowcase>|<\/lowcase>/g;
      return match.replace(pattern,'').toLowerCase();
    });

    //replace using an anonymous function for random upper/lower case
    result = result.replace(mixcasePattern, function (match) {
      // console.log(match);
      for ( var i = 0; i < match.length; i++) {
        var upperOrLower = Math.round(Math.random());
        var replaced = (upperOrLower) ? match[i].toUpperCase() : match[i].toLowerCase();
        match = match.replace(match[i], replaced);
      }
      var pattern = /<mixcase>|<\/mixcase>/gi;
      return match.replace(pattern,'');
    });

    return result;
  } else {
    return 'No correct input data.';
  }
}
// console.log(parseString());
console.log(parseString(testString));

// 5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`
var testString = document.getElementById('test');

var processWhitespaces = function(string) {
  if (typeof string == 'string') {
    var pattern = /\s{1,}/g;
    return string.replace(pattern, '&nbsp;');
  } else {
    return 'Incorrect input data.';
  }
}
// console.log(processWhitespaces(testString.innerHTML));

// 6. Write a function that extracts the content of a html page given as text. The function should return anything that is in a tag, without the tags:
//
//     ```html
//     <html>
//         <head>
//             <title>Sample site</title>
//         </head>
//         <body>
//             <div>text<div>more text</div>and more...</div>in body
//         </body>
//     </html>
//     ```
//
//     Result: `Sample sitetextmore textand more...in body`
//

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
    return 'Incorrect input data.';
  }
}
// console.log(extractTextFromHTML(testString.value));

// 7. Write a script that parses an URL address given in the format: `[protocol]://[server]/[resource]` and extracts from it the `[protocol]`, `[server]` and `[resource]` elements. Return the elements in a JSON object.
//
//     For example from the URL `http://www.tut.by/forum/index.php` the following information should be extracted:
//
//
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

  if (typeof url != 'string') return 'Incorrect input data';

  protocolMatch = url.match(/(.*):\/\//);
  serverMatch = url.match(/:\/\/(.*?)\//);
  resourceMatch = url.match(/[a-zA-Z](\/.*?)/); //correct regex

  parsed.protocol = (protocolMatch) ? protocolMatch[1] : '';
  parsed.server = (serverMatch) ? serverMatch[1] : '';
  parsed.resource = (resourceMatch) ? resourceMatch[1] : '';

  return parsed;
}

console.log(createUrlObject(10));
console.log(createUrlObject());
console.log(createUrlObject('http://www.tut.by/forum/index.php'));
console.log(createUrlObject('http://tut.by/forum/index.php'));
console.log(createUrlObject('http://tut.by/forum/index.php?param=true'));
console.log(createUrlObject('ftp://ftp.is.co.za/rfc/rfc1808.txt'));
console.log(createUrlObject('ldap://[2001:db8::7]/c=GB?objectClass?one'));
