var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    var deleteButton = document.createElement('button'); // Create a delete button
    deleteButton.appendChild(document.createTextNode('Remove')); // Set the button text
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton); // Append the delete button to the list item
    ul.appendChild(li);
    input.value = "";
    deleteButton.addEventListener("click", removeListItem); // Add click event listener to delete button
}

function removeListItem(event) {
    event.target.parentNode.remove(); // Remove the parent list item when the delete button is clicked
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

    // Get all the list items
    const listItems = document.querySelectorAll('ul li');

    // Initialize the Y position for adding text
    let y = 20;

    listItems.forEach((item) => {
        const text = item.textContent.trim();
        doc.text(20, y, text);
        y += 10;
    });

    // Save the PDF with a filename "todo-list.pdf"
    doc.save('todo-list.pdf');
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

// Add an event listener for the export button
exportButton.addEventListener("click", exportAsPDF);