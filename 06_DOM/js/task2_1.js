/*
Task 2
DOM Manipulation
----------------------------------------------------------------------------------------------------------------
    1. Write a script that creates a number of "div" elements. Each "div" element must have the following
* Random "width" and "height" between "20px" and "100px"
* Random "background-color"
* Random "color"
* Random "position" on the screen
* A "strong" element with text "div" inside the "div"
* Random "border-radius"
* Random "border-color"
* Random "border-width" between "1px" and "20px"
* */

function Block(optionsObj) {

    var _defaults = {
        sizeMin: 20,
        sizeMax: 100,
        color: this.getRandomColor(),
        position: '0 0',
        borderRadiusMin: 0,
        borderRadiusMax: 50,
        borderColor: '',
        borderWidthMin: 1,
        borderWidthMax: 20,
        blockContentsText: 'div',
        blockContentsAppend: 'strong'
    };
    var options,
        viewportWidth,
        viewportHeight,
        divElement,
        innerContents;

    // Sanitize options Obj
    //=================================================================================================
    options = _.pick(_.defaults(optionsObj, _defaults), _.keys(_defaults));

    // Width & Heights
    //=================================================================================================
    this.width = _.random(options.sizeMin, options.sizeMax);
    this.height = _.random(options.sizeMin, options.sizeMax);


    // Colors
    //=================================================================================================
    this.bgColor = this.getRandomColor();
    this.color = this.getRandomColor();


    // Border
    //=================================================================================================
    this.borderColor = this.getRandomColor();
    this.borderWidth = _.random(options.borderWidthMin, options.borderWidthMax);
    this.borderRadius = _.random(options.borderRadiusMin, options.borderRadiusMax);


    // Text
    //=================================================================================================
    innerContents = document.createElement(options.blockContentsAppend);
    //assume that blockContentsText - is html free text only
    innerContents.appendChild(document.createTextNode(options.blockContentsText));

    // Position
    //=================================================================================================
    viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.left = _.random(0, viewportWidth - this.width  - (this.borderWidth * 2));
    this.top = _.random(0, viewportHeight - this.height - (this.borderWidth * 2));

    // Create element
    //=================================================================================================
    divElement = document.createElement('div');

    divElement.style.width = this.width + 'px';
    divElement.style.height = this.height + 'px';
    divElement.style.background = this.bgColor;
    divElement.style.color = this.color;

    divElement.style.position = 'absolute';
    divElement.style.top = this.top + 'px';
    divElement.style.left = this.left + 'px';

    divElement.style.border = this.borderWidth + 'px solid ' + this.borderColor;
    divElement.style.borderRadius  = this.borderRadius + 'px';

    divElement.style.textAlign  = 'center';
    divElement.style.lineHeight  = this.height + 'px';

    divElement.appendChild(innerContents);

    return divElement;
}

Block.prototype.getRandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function drawField(numberElements) {
    var divsContainer = document.createDocumentFragment();
    var containerClass = 'divField';
    var amount = numberElements || 10;
    var div, i, settings, container;

    for (i = 0; i < amount; i++) {

        // we can define some special settings
        settings = {
            //blockContentsText: 'JS'
        };

        div = new Block(settings);
        divsContainer.appendChild(div);
    }

    container = document.createElement('div');
    container.className = containerClass;
    container.appendChild(divsContainer);

    document.body.appendChild(container);

    return function () {
        // Function for deleting field
        var field = document.getElementsByClassName(containerClass)[0];
        document.body.removeChild(field);
    }
}

// Addition Background Color
//======================================================================================================================
document.body.style.background = Block.prototype.getRandomColor.call();

// Create
//======================================================================================================================
var field, amountOfDivs = 100;

field = drawField(amountOfDivs);


// Additional Window Resize effect to redraw divs
//======================================================================================================================
window.addEventListener('resize', function () {
    //remove current field
    field();
    // draw new field
    field = drawField(amountOfDivs);
});
