/*
3. Create a "textarea" and two "input"s with "type="color""
* Make the font "color" of the text area as the value of the first color "input"
* Make the "background-color" of the "textarea" as the value of the second "input"

*/

var fontColor = document.getElementById('fontcolor');
var bgColor = document.getElementById('bgcolor');

fontColor.addEventListener('change', function() {
    var textarea = document.getElementById('designArea');
    textarea.style.color = fontColor.value;
});

bgColor.addEventListener('change', function() {
    var textarea = document.getElementById('designArea');
    textarea.style.background = bgColor.value;
});

