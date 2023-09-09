var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.length>0) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = "";
}
})

input.addEventListener("keydown", function(event){
    if (input.length>0 && event.key === 'Enter') {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = "";
}
})