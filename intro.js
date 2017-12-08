var listNum = 8;

var origHeading = document.getElementById("h").innerHTML

var b = document.getElementById("b");

var listItems = document.getElementsByTagName("li");

var addItem = function() {
    var li = document.createElement('li');
    li.innerHTML = 'item ' + listNum;
    li.addEventListener('mouseover', hoverHeading);
    li.addEventListener('mouseout', resetHeading);
    li.addEventListener('click', removeItem);

    var ol = document.getElementById("thelist");
    ol.appendChild(li);
    listNum++;
}

var hoverHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = this.innerHTML;
    this.setAttribute("style", "background-color:tomato");
}

var resetHeading = function() {
    var heading = document.getElementById("h");
    heading.innerHTML = origHeading;
    this.setAttribute("style", "background-color:white");
}

var removeItem = function() {
    this.remove()
}

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
