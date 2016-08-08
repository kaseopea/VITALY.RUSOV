/*
5*. Create a TreeView component
* Initially only the top items must be visible
* On item click
* If its children are hidden (collapsed), they must be made visible (expanded)
* If its children are visible (expanded), they must be made hidden (collapsed)
* Research about events


see example in "http://i.imgur.com/cqaTqTC.png"
*/

(function () {

    var _options = {
        menuId: 'treeview',
        menuItemActiveClass: 'active',
        hideClass: 'hide'
    };

    var menu = document.getElementById(_options.menuId);
    var items = menu.children;

    // Hiding all child elements
    if (items.length) {
        _.forEach(items, function (item) {
            //console.log(item);
            if (item.children.length) {
                item.className = _options.menuItemActiveClass;
                item.children[0].className = _options.hideClass;
            }
        });
    }

    // Adding Event Listener
    menu.addEventListener('click', function(ev) {
        var clicked = ev.target;
        if (clicked.children.length) {
            clicked.children[0].classList.toggle('hide');
        }
        console.log();
    });

})();

