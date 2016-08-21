'use strict';
(function() {

    var options = {
        todoListId: 'todolist',
        addTodoButtonId: 'addtext',
        todoTextInpitId: 'todotext',
        todoItemClass: 'todo-item',
        checkboxClass: 'checkbox',
        hideButtonId: 'hidetodo',
        showButtonId: 'showtodo',
        deleteButtonId: 'removetodo'
    };

// General module
//=================================================================================================

    var todolist = document.getElementById(options.todoListId);
    var currentElementId = 0;
    var hiddenTodos = [];


// Add todos
//=================================================================================================
    var addButton = document.getElementById(options.addTodoButtonId);

    addButton.addEventListener('click', function(e) {
        var textInput = document.getElementById(options.todoTextInpitId);
        var listItem, listTitle, listLabel, listCheckbox, listText;

        if (textInput.value.length) {

            // Create elements
            listItem = document.createElement('li');
            listItem.className = options.todoItemClass;
            listTitle = document.createElement('h3');
            listLabel = document.createElement('label');
            listCheckbox = document.createElement('input');

            // Preparing attributes
            listCheckbox.setAttribute('type', 'checkbox');
            listCheckbox.setAttribute('id', 'todo' + currentElementId);
            listCheckbox.className = 'checkbox';

            listText = document.createTextNode(textInput.value);

            // Making li element structure
            listLabel.appendChild(listCheckbox);
            listLabel.appendChild(listText);
            listTitle.appendChild(listLabel);

            console.log(listLabel.outerHTML);
            listItem.appendChild(listTitle);


            // Inserting
            todolist.insertBefore(listItem, todolist.firstChild);

            // Additional Settings
            currentElementId++;
            textInput.value = ''; // reset todoText
        }

    }, false);

// Get selected items
//=================================================================================================

    function getSelected() {
        var allItems = todolist.children;
        var checked = [];
        var i, item;

        for (i = 0; i < allItems.length; i++) {

            item = allItems[i].getElementsByClassName(options.checkboxClass)[0];

            if (item.checked) {
                checked.push(allItems[i]);
            }
        }
        return checked;
    }


// Hide selected items
//=================================================================================================
    var hideButton = document.getElementById(options.hideButtonId);

    hideButton.addEventListener('click', function(e) {
        var whatToHide = getSelected();
        var i;

        for (i = 0; i < whatToHide.length; i++) {
            whatToHide[i].style.display = 'none';
            hiddenTodos.push(whatToHide[i]);
        }

    }, false);

// Show selected items
//=================================================================================================
    var showButton = document.getElementById(options.showButtonId);

    showButton.addEventListener('click', function(e) {
        var i;

        for (i = 0; i < hiddenTodos.length; i++) {
            hiddenTodos[i].style.display = 'block';
        }

    }, false);

// Remove selected items
//=================================================================================================
    var deleteButton = document.getElementById(options.deleteButtonId);

    deleteButton.addEventListener('click', function(e) {
        var i;
        var whatToDelete = getSelected();

        if (whatToDelete.length) {
            for (i = 0; i < whatToDelete.length; i++) {
                todolist.removeChild(whatToDelete[i]);
            }

        } else {
            console.error('You should select at least one item');
        }

    }, false);

}());