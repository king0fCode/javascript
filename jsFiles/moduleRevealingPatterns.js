// basic structure
// (function() {
//     // Declare private vars and functions
//     return {
//         // declare public var and functions
//     }
// })();
// standard module pattern
// const UICtrl = (function() {
//     let text = 'Hello World';
//     const changeText = function() {
//         const element = document.querySelector('h1');
//         element.textContent = text;
//     }
//     return {
//         callChangeText: function() {
//             changeText();
//             console.log(text);
//         }
//     }
// })();
// UICtrl.callChangeText();
// Revealing Module Pattern
const ItemCtrl = (function() {
    let _data = []; // private varibale define with _
    function add(item) {
        _data.push(item);
        console.log('Item Added');
    }

    function get(id) {
        return _data.find(item => {
            return item.id === id;
        })
    }
    return {
        add: add,
        get: get // comment it to make it private
    }
})();
ItemCtrl.add({
    id: 1,
    name: 'jhon'
});
console.log(ItemCtrl.get(1));