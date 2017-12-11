// The next num for the list
var listNum = 8;
// The original contents of the heading
var origHeading = document.getElementById("h").innerHTML
// The next num for fib sequence
var fib = [];

// Function to be run when the button is clicked, adding an item
// and incrementing the list item count
var addItem = function() {
    var li = document.createElement('li');
    li.innerHTML = 'item ' + listNum;
    li.addEventListener('mouseover', hoverHeading);
    li.addEventListener('mouseout', resetHeading);
    li.addEventListener('click', removeItem);

    var ol = document.getElementById("thelist");
    ol.appendChild(li);
    listNum++;
};

// Function to be run when a list item is hovered over
var hoverHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = this.innerHTML;
    this.setAttribute("style", "background-color:tomato");
};

// Function to reset the heading when the mouse leaves the ist item
var resetHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = origHeading;
    this.setAttribute("style", "background-color:white");
};

// Function to remove the item when clicked
var removeItem = function() {
    this.remove()
};

// Function to add to the fib list
var addFibList = function() {
    var li = document.createElement('li');
    if (fib.length == 0) {
        fib.push(1);
        li.innerHTML = 1;
    } else if (fib.length == 1) {
        fib.push(1);
        li.innerHTML = 1;
    } else {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        li.innerHTML = fib[fib.length - 1];
    }
    var fiblist = document.getElementById("fiblist");
    fiblist.appendChild(li);
};

// The button that generates list items
var b = document.getElementById("b");
// The list items that already exist
var listItems = document.getElementsByTagName("li");

// Add all the event listeners for elements that already exist
b.addEventListener('click', addItem);
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseover', hoverHeading);
}

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('mouseout', resetHeading);
}

for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', removeItem);
}

var fb = document.getElementById('fb');
fb.addEventListener('click', addFibList);

console.log(Math.PI);
