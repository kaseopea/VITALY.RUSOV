// Strings
//
// 1. Write a JavaScript function reverses string and returns it
//     * Example: "sample" -> "elpmas".
var reversString = function(string) {
  var str = string || '';
  return string.split('').reverse().join('');
}
// console.log(reversString('sample'));
// console.log(reversString('correct expression'));

// 2. Write a JavaScript function to check if in a given expression the brackets are put correctly.
//     * Example of correct expression: `((a+b)/5-d)`.
//     * Example of incorrect expression: `)(a+b))`.

var expression1 = '((a+b)/5-d)';
var expression1 = ')(a+b))';

var checkBrackets = function(expression) {

  //case 1:  quantity of open and close brackets is not equal = incorrect
  //case 2: quantity is equal, but incorrect placement

  return true;
}
// console.log(checkBrackets());

// 3. Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//     **Example**: The target substring is **"in"**. The text is as follows: We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don't have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.
//     The result is: 9.

var testString = 'We are liv<b>in</b>g **in** an yellow submar<b>in</b>e. We don\'t have anyth<b>in</b>g else. **In**side the submar<b>in</b>e is very tight. So we are dr<b>in</b>k<b>in</b>g all the day. We will move out of it **in** 5 days.';

var searchTimesString = function(search, string) {
  var search = search.split('**')[1]; //todo rewrite detection
  var regSearch = new RegExp(search, 'gi');
  var count = (string.match(regSearch)|| []).length;
  return count;
}

console.log(searchTimesString('**in**', testString));

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


// 5. Write a function that replaces non breaking white-spaces in a text with `&nbsp;`
var testString = '';
var processWhitespaces = function(string) {
  return string.replace('\xa0', '&nbsp;');
}
console.log(processWhitespaces(testString));

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
