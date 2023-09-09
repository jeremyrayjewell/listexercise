var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
    if (input.value.length > 0) { // Check the value property for input
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
});

input.addEventListener("keydown", function (event) {
    if (input.value.length > 0 && event.key === 'Enter') { // Check the value property and 'Enter' key
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
});
