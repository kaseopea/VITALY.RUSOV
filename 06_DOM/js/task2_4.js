/*

 4. Create a tag cloud:
 * Visualize a string of tags (strings) in a given container
 * By given "minFontSize" and "maxFontSize", generate the tags with different "font-size", depending on the number of occurrences


 see example in "http://i.imgur.com/1Xtv2LC.png"

 var tags = [
 "cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http",
 "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript",
 "http", "http", "CMS"
 ];

 var tagCloud = generateTagCloud(tags, 17, 42);
 */

// Input values
//======================================================================================================================

var tags = ["cms", "javascript", "js", "ASP.NET MVC", "js", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "js", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"];

var options = {
    baseColor: '#add8e6'
};

var tagCloud = generateTagCloud(tags, options);


// generateTagCloud function
//======================================================================================================================
function generateTagCloud(tags, optionsObj) {
    // Defaults
    var _defaults = {
        minFontSize: 17,
        maxFontSize: 42,
        baseColor: '#808080'
    };
    var tagsArray = tags.map(function (item) {
        return item.toLowerCase();
    }).sort();

    var options, data, fontSize, tagsContainer, list, listItems, item, maxTimes, percent, color;

    // Sanitize options Obj
    options = _.pick(_.defaults(optionsObj, _defaults), _.keys(_defaults));

    // Collecting data
    data = getData(tagsArray);

    // Max occurrence val
    maxTimes = Math.max.apply(null, _.flatMap(data));

    // Preparing elements
    tagsContainer = document.getElementById('tagcloud');
    list = document.createElement('ul');
    tagsContainer.appendChild(list);

    // List items container
    listItems = document.createDocumentFragment();


    // Making cloud
    //=================================================================================================
    _.forEach(data, function (times, word) {
        item = document.createElement('li');
        item.innerText = word;

        // Calc font-size
        percent = times / maxTimes;
        fontSize = Math.round(options.minFontSize + ((options.maxFontSize - options.minFontSize) * percent));
        item.style.fontSize = fontSize + 'px';

        // Calc color
        color  = colorLuminance(options.baseColor, -percent);
        item.style.color = color;

        // Append child to list
        listItems.appendChild(item);
    });

    // Append all list items to list
    list.appendChild(listItems);
}

// Preparing data for tag cloud
//======================================================================================================================
function getData(array) {
    var data= {};
    var current = null;
    var cnt = 0, i;

    for (i = 0; i < array.length; i++) {
        if (array[i] != current) {
            if (cnt > 0) {
                data[current] = cnt;
            }
            current = array[i];
            cnt = 1;
        } else {
            cnt++;
        }
    }
    if (cnt > 0) {
        data[current] = cnt;
    }

    return data;
}

// Change color luminance
//======================================================================================================================
function colorLuminance(hex, lum) {
    var rgb = '#', c, i;

    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00"+c).substr(c.length);
    }

    return rgb;
}