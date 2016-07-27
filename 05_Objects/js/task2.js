/**
 * domElement Object
 * @type {{type: null, innerHTML: null, content: null, attributes: Array, children: null, parent: null, init: Function, appendChild: Function, addAttribute: Function, removeAttribute: Function}}
 */
var domElement = {

    // init method ------------------------------------------------------------------------------------------
    init: function(element) {
        var typeRegex = new RegExp('^[a-z0-9]+$', 'i');
        var _this = this;
        var innerContents = '';

        if (_.isString(element) && typeRegex.test(element)) {

            // Type property
            _this.type = element;

            // Attributes property
            _this.attributes = [];

            //innerHTML property
            Object.defineProperty(this, 'innerHTML', {
                get: function () {
                    var elAtts, elContent, childrenInnerHTML = '';

                    // Prepare Attributes
                    if (_this.attributes.length) {
                        elAtts = _this.attributes.reduce(function(a, b) {
                            return a + ' ' + b.name + '="' + b.value + '"'
                        }, '');
                    } else {
                        elAtts = '';
                    }

                    // Prepare children ( Children or Content)
                    if (_this.children.length) {
                        _.forEach(_this.children, function (item) {
                            childrenInnerHTML += item.innerHTML;
                        });
                        elContent = childrenInnerHTML;
                    } else {
                        elContent = _this.content;
                    }

                    // output
                    return '<' + _this.type + elAtts +'>' + elContent + '</' + _this.type + '>';
                }
            });

            // Contents property
            Object.defineProperty(this, 'content', {
               set: function (value) {
                    if (!this.children.length) {
                        innerContents = value;
                    } else {
                        console.error('You can\'t add content to element that have children');
                    }
               },
                get: function() {
                    return innerContents;
                }
            });

            // Child propertie
            this.children = [];

            // Parent propertie
            this.parent = null;

            return this;
        } else {
            console.error('Not a valid domElement');
        }
    },

    // append child method ------------------------------------------------------------------------------------------
    appendChild: function(element) {
        var parentEl = this; //head
        var childEl = element; //meta

        childEl.parent = parentEl;
        parentEl.children.push(childEl);

        // todo: check if it is enough

        return this;
    },

    // add attribute method ------------------------------------------------------------------------------------------
    addAttribute: function (attrName, attrValue) {
        var attr, attrNameRegex, attrValueRegex;
        var _this = this;

        //assume that if we have a type property - it's valid
        if (_this.type) {

            attrNameRegex = /^[a-z0-9-]+$/i;
            attrValueRegex = /^[a-z0-9:#%_;\.\/\'"()-\s\[\]]+$/ig;
            if (_.isString(attrName) && _.isString(attrValue) && attrNameRegex.test(attrName) && attrValueRegex.test(attrValue)) {
                attr = {
                    name: attrName,
                    value: attrValue
                };
                _this.attributes.push(attr);
                _this.attributes.sort( function(a,b) {
                    return a.name > b.name;
                });

                return _this;

            } else {
                console.error('Invalid params for attribute');
            }

        } else {
            console.error('You should define element type first to add attr');
        }

    },

    // remove attribute method -------------------------------------------------------------------------------------
    removeAttribute: function(attr) {
        var _this = this;
        var i, attrItem, found = false;

        for (i = 0; i < _this.attributes.length; i++) {
            attrItem = _this.attributes[i];
            if (attrItem.name === attr) {
                _this.attributes.splice(i, 1);
                found = true;
                continue;
            }
        }
        if (!found) {
            throw new Error('No "' + attr + '" attribute on the "' + _this.type + '" domElement');
        }
        return _this;
    }
};




// Tests --------------------------------------------------------------------------------------------------------
console.log('Task 2 ***********************************\n\n');

var meta = Object.create(domElement)
    .init('meta')
    .addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
    .init('head')
    .appendChild(meta)

var div = Object.create(domElement)
    .init('div')
    .addAttribute('class', 'contents text3d');

div.content = 'Hello, world!';

var body = Object.create(domElement)
    .init('body')
    .appendChild(div)
    .addAttribute('id', 'myid')
    .addAttribute('style', 'background-color: #012345');

var root = Object.create(domElement)
    .init('html')
    .appendChild(head)
    .appendChild(body);

var bodyOutput = Object.create(domElement)
    .init('div')
    .addAttribute('class', 'flexbox block shadow')
    .appendChild(div);

document.write(bodyOutput.innerHTML);
console.log(root.innerHTML);
//document.write(root.innerHTML);

console.log('\n\n');

// Tests --------------------------------------------------------------------------------------------------------
var anyElement = Object.create(domElement);
console.log(anyElement);
console.log(domElement);
console.log('anyElement.__proto__ === domElement ', anyElement.__proto__ === domElement);

console.log('\n\n');

// Tests --------------------------------------------------------------------------------------------------------

var divInner = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'border: 5px solid green;');
var div = Object.create(domElement)
    .init('div')
    .addAttribute('style', 'border: 10px solid red; margin-top: 3em;')
    .appendChild(divInner);

var divs = Object.create(domElement)
    .init('div')
    .appendChild(div);
console.log(divs.innerHTML);
//document.write(divs.innerHTML);