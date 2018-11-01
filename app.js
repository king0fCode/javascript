// Storage controller

//item controller
const ItemCtrl = (function() {
    // console.log('Item Controller');
    const Item = function(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
        // Data structure / State
    const data = {
            items: [{
                    id: 0,
                    name: 'Steak Dinner',
                    calories: 1200
                },
                {
                    id: 1,
                    name: 'Cookies',
                    calories: 400
                }, {
                    id: 2,
                    name: 'Eggs',
                    calories: 300
                },
            ],
            currentItem: null,
            totalCalories: 0
        }
        // public methods
    return {
        getItems: function() {
            return data.items;
        },
        addItem: function(name, calories) {
            // console.log(name, calories);
            // Create ID


            let ID;
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // create new item
            newItem = new Item(ID, name, calories);

            //Add to items array
            data.items.push(newItem);
            return newItem;

        },
        logData: function() {
            return data;
        }
    }

})();



// UI controller
const UICtrl = (function() {

    const UISelectors = {
            itemList: '#item-list',
            addBtn: '.add-btn',
            itemNameInput: '#item-name',
            itemCaloriesInput: '#item-calories'
        }
        //public methods
    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="edit-item secondary-content"><i class="fa fa-pencil"></i></a>
            </li>`
            })

            // Insert List Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function() {
            return UISelectors;
        },
        getItemInput: function() {
            return {

                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        }
    }
})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
    // console.log(ItemCtrl.logData());


    //Load event listeners
    const loadEventListeners = function() {
        //get UI Selectors
        const UISelectors = UICtrl.getSelectors();

        //add Item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    }

    // Add item Submit
    const itemAddSubmit = function(e) {
            // console.log('Add');
            // get form input from UI Controller
            const input = UICtrl.getItemInput();
            // check for name and calories
            if (input.name !== '' && input.calories !== '') {

                //Add item
                const newItem = ItemCtrl.addItem(input.name, input.calories);
                console.log(newItem);

            }

            e.preventDefault();
        }
        // public methods
    return {
        init: function() {
            console.log('Initializing App...');

            //fetch item from data structure
            const items = ItemCtrl.getItems();
            // console.log(items);

            //populate list with items
            UICtrl.populateItemList(items);

            // load event listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

// Initializing App
App.init();