/*
 Animation
 --------------------------
 1. Draw the following graphics using canvas (see Picture1.png, Picture2.png, Picture3.png)

 */
(function () {
    var offset = 20;

    function PIX(id, picWidth, picHeight, offset) {
        var canvas;

        canvas = document.getElementById(id);
        canvas.width = picWidth + 2 * offset;
        canvas.height = picHeight + 2 * offset;

        return canvas;
    }

    //Helpers
    //==================================================================================================================
    CanvasRenderingContext2D.prototype.drawEllipse = function (x, y, a, b) {
        this.save();
        this.beginPath();
        this.translate(x, y);
        this.scale(a / b, 1);
        this.arc(0, 0, b, 0, Math.PI * 2, true);
        this.restore();
        this.closePath();
    };


    //==================================================================================================================


    //PIC 1 HEAD
    //==================================================================================================================
    var pic1Canvas = new PIX('pic1', 250, 355, offset);
    var pic1 = pic1Canvas.getContext('2d');

    pic1.translate(pic1Canvas.width / 2, pic1Canvas.height / 2);

    //head
    // pic1.drawEllipse(-104, 22, 46, 100);
    pic1.drawEllipse(8.5, 76.5, 115, 100);
    pic1.fillStyle = '#90c0d7';
    pic1.fill();
    pic1.lineWidth = 3;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    //left eye
    pic1.drawEllipse(-60.5, 39, 20, 14);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.drawEllipse(-67, 39, 6, 10);
    pic1.fillStyle = '#22545f';
    pic1.fill();
    pic1.closePath();

    //right eye
    pic1.drawEllipse(27, 39, 20, 14);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.drawEllipse(20, 39, 6, 10);
    pic1.fillStyle = '#22545f';
    pic1.fill();
    pic1.closePath();

    // nose
    pic1.beginPath();
    pic1.moveTo(-17, 40.5);
    pic1.lineTo(-42, 89.5);
    pic1.lineTo(-17, 89.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    pic1.save();

    // mouth
    pic1.translate(-17, 126.5);
    pic1.rotate(Math.PI / 20); //rotate
    pic1.drawEllipse(0, 0, 45.5, 15.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#22545f';
    pic1.stroke();
    pic1.closePath();

    pic1.restore();
    pic1.save();

    //hat
    pic1.drawEllipse(0, -14, 126, 25.5);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.beginPath();
    pic1.moveTo(-57, -33);
    pic1.lineTo(-57, -150.5);
    pic1.lineTo(74.5, -150.5);
    pic1.lineTo(74.5, -33);
    pic1.bezierCurveTo(74.5, 5, -57, 5, -57, -33);
    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.beginPath();
    pic1.drawEllipse(9, -150.5, 66, 22);

    pic1.lineWidth = 4;
    pic1.strokeStyle = '#262626';
    pic1.stroke();
    pic1.fillStyle = '#396693';
    pic1.fill();
    pic1.closePath();

    pic1.restore();

    //PIC 2 BIKE
    //==================================================================================================================
    var pic2Canvas = new PIX('pic2', 580, 380, 0);
    var pic2 = pic2Canvas.getContext('2d');

    // wheels
    pic2.beginPath();
    pic2.arc(114, 265, 93, 0, 2 * Math.PI, false);
    pic2.fillStyle = '#90cad7';
    pic2.fill();
    pic2.lineWidth = 3;
    pic2.strokeStyle = '#337d8f';
    pic2.stroke();
    pic2.closePath();

    pic2.beginPath();
    pic2.arc(468, 265, 93, 0, 2 * Math.PI, false);
    pic2.fillStyle = '#90cad7';
    pic2.fill();
    pic2.lineWidth = 3;
    pic2.strokeStyle = '#337d8f';
    pic2.stroke();
    pic2.closePath();

    //chassis
    pic2.beginPath();
    pic2.moveTo(114, 265);
    pic2.lineTo(221, 146);
    pic2.lineTo(444, 146);
    pic2.lineTo(272, 265);
    pic2.lineTo(114, 265);

    // seating
    pic2.moveTo(272, 265);
    pic2.lineTo(221, 146);
    pic2.lineTo(203, 100);
    pic2.moveTo(165, 100);
    pic2.lineTo(245, 100);

    // steering
    pic2.moveTo(468, 265);
    pic2.lineTo(435, 80);
    pic2.lineTo(360, 102);
    pic2.moveTo(435, 80);
    pic2.lineTo(483, 21);
    // pic2.closePath();

    pic2.lineWidth = 3;
    pic2.strokeStyle = '#337d8f';
    pic2.stroke();
    pic2.closePath();

    // Pedal
    pic2.beginPath();
    pic2.arc(272, 265, 25, 0, 2 * Math.PI, false);
    pic2.lineWidth = 3;
    pic2.strokeStyle = '#337d8f';
    pic2.stroke();
    pic2.closePath();

    pic2.save();

    pic2.translate(272, 265);
    pic2.rotate(Math.PI / 1.33);
    pic2.moveTo(0, 49);
    pic2.lineTo(0, 24);
    pic2.moveTo(0, -49);
    pic2.lineTo(0, -24);

    pic2.lineWidth = 3;
    pic2.strokeStyle = '#337d8f';
    pic2.stroke();
    pic2.closePath();

    pic2.restore();


    //PIC 3
    //==================================================================================================================
    var pic3Canvas = new PIX('pic3', 500, 640, 0);
    var pic3 = pic3Canvas.getContext('2d');

    //house
    pic3.beginPath();
    pic3.moveTo(25, 612);
    pic3.lineTo(25, 276);
    pic3.lineTo(250, 27);
    pic3.lineTo(475, 276);
    pic3.lineTo(475, 612);
    pic3.lineTo(25, 612);

    pic3.fillStyle = '#975b5b';
    pic3.fill();

    pic3.moveTo(25, 276);
    pic3.lineTo(475, 276);

    pic3.lineWidth = 3;
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();

    drawWindow(pic3, 58, 315, 78, 50, 4, '#000');
    drawWindow(pic3, 277, 315, 78, 50, 4, '#000');
    drawWindow(pic3, 277, 460, 78, 50, 4, '#000');

    //door
    pic3.beginPath();
    pic3.moveTo(73,612);
    pic3.lineTo(73,498);
    pic3.bezierCurveTo(73, 450, 200, 450, 200, 500);
    pic3.lineTo(200,612);
    pic3.moveTo(138,612);
    pic3.lineTo(138,462);

    pic3.lineWidth = 3;
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();

    pic3.beginPath();
    pic3.arc(119, 568, 7.25, 0, 2 * Math.PI, false);
    pic3.lineWidth = 4;
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();

    pic3.beginPath();
    pic3.arc(155, 568, 7.25, 0, 2 * Math.PI, false);
    pic3.lineWidth = 4;
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();

    pic3.beginPath();
    pic3.moveTo(337,214);
    pic3.lineTo(337,89);
    pic3.lineTo(388,89);
    pic3.lineTo(388,214);

    pic3.fillStyle = '#975b5b';
    pic3.fill();
    pic3.lineWidth = 4;
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();

    pic3.beginPath();
    pic3.drawEllipse(363, 88, 25, 6);
    pic3.fillStyle = '#975b5b';
    pic3.fill();
    pic3.strokeStyle = 'black';
    pic3.stroke();
    pic3.closePath();


    //helper functions
    //====================================================

    function drawWindow(ctx,x, y, cellW, cellH, cellSpace, fillColor) {
        ctx.save();
        ctx.translate(x, y);
        ctx.beginPath();

        ctx.rect(0, 0, cellW, cellH);
        ctx.rect(cellW + cellSpace, 0, cellW, cellH);
        ctx.rect(0, cellH + cellSpace, cellW, cellH);
        ctx.rect(cellW + cellSpace, cellH + cellSpace, cellW, cellH);

        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

})();