var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var exportButton = document.getElementById("export"); // Define the export button

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Remove'));
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = "";
    deleteButton.addEventListener("click", removeListItem);
}

function removeListItem(event) {
    event.target.parentNode.remove();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeydown(event) {
    if (inputLength() > 0 && event.key === 'Enter') {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keydown", addListAfterKeydown);

function exportAsPDF() {
    const doc = new jsPDF();

    const listItems = document.querySelectorAll('ul li');

    let y = 20;

    listItems.forEach((item) => {
        const text = item.textContent.trim();
        doc.text(20, y, text);
        y += 10;
    });

    doc.save('todo-list.pdf');
}

// Add an event listener for the export button
exportButton.addEventListener("click", exportAsPDF);
