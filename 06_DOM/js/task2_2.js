/*
 2. Write a script that creates 5 "div" elements and moves them in circular path with interval of 100 milliseconds
 */

function Rotator (optionsObj) {
    var _defaults = {
        speed: 10, // in degress
        rotatorSize: 500,
        amountElements: 25,
        rotatorId: 'rotator',
        ballSize: 20,
        containerClass: 'rotator-contents'
        //containerSize: 500
    };
    var i,
        options,
        rotatorDiv,
        circleArray,
        circle;

    // Sanitize options Obj
    //=================================================================================================
    options = _.pick(_.defaults(optionsObj, _defaults), _.keys(_defaults));

    // Container
    //=================================================================================================
    rotatorDiv = document.getElementById(options.rotatorId);
    rotatorDiv.style.width = options.rotatorSize + 'px';
    rotatorDiv.style.height = options.rotatorSize + 'px';

    circleArray = document.createDocumentFragment();

    for (i = 0; i < options.amountElements; i++) {
        circle = document.createElement('div');
        circle.className = 'ball ball' + i;
        circle.style.display = 'none';
        circle.style.background = getRandomColor();
        circleArray.appendChild(circle);
    }
    rotatorDiv.appendChild(circleArray);

    // Random Color Generator
    //=================================================================================================
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };


    return function () {
        var step = 360 / options.amountElements;
        var angles = [], angle;
        var rotatorHeight = options.rotatorSize;
        var radius = (rotatorHeight - (options.ballSize)) / 2;
        var speed = options.speed/180*Math.PI; // speed in radians
        var posX, posY;

        var rotator = document.getElementById(options.rotatorId);
        var balls = rotator.getElementsByClassName('ball');

        for (i = 0; i <= options.amountElements; i++) {
            angles.push((step / 180 * Math.PI * i) + speed);
        }

        for (i = 0; i < balls.length; i++) {
            angle = angles[i];
            circle = balls[i];

            posX = Math.round(radius * (Math.cos(angle)) + (options.ballSize/2)) + 'px';
            posY = Math.round(radius * (Math.sin(angle)) - (options.ballSize/2)) + 'px';

            circle.style.display = 'block';
            circle.style.top  = ((rotatorHeight / 2) - parseInt(posX.slice(0, -2),10)) + 'px';
            circle.style.left = ((rotatorHeight / 2) + parseInt(posY.slice(0, -2),10)) + 'px';

        }

        options.speed += 10;
    };

}

var rotator = new Rotator();
setInterval( rotator, 100 );

