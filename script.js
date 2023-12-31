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

 // Add a header
    doc.setFontSize(16); // Set font size for the header
    doc.text("To-Do List", 20, 20); // Position and text for the header

    // Get all the list items
    const listItems = document.querySelectorAll('ul li');

    let y = 70; // Adjust the Y position to start below the header and image

    listItems.forEach((item) => {
        // Exclude the text inside the "Remove" buttons
        const text = item.firstChild.textContent.trim(); // Get only the list item's text
        doc.text(20, y, text);
        y += 10;
    });

    doc.setFontSize(8); // Set a smaller font size for the text
    doc.text("https://github.com/jeremyrayjewell", 155, 5); // Position and text for the URL

    doc.save('todo-list.pdf');
}

// Add an event listener for the export button
exportButton.addEventListener("click", exportAsPDF);
