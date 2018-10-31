class EventObserver {
    constructor() {
        this.observers = [];
    }
    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscried to ${fn.name}`);
    }
    unsubscribe(fn) {
        // filter out from the list whatever matches the callback function. if there is no match, the callback gets to stay on the list. the filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }
    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}
const click = new EventObserver();
// event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurseconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurseconds);
});
document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});
// Click handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
const getCurseconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}