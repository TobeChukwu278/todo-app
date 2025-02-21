// script.js
const taskInput = document.getElementById('taskInput'); // Gets the input field where the user types tasks.
const addTaskBtn = document.getElementById('addTaskBtn'); // Gets the "Add Task" button.
const taskList = document.getElementById('taskList'); // Gets the unordered list element where tasks will be displayed.

addTaskBtn.addEventListener('click', addTask); // Gets the unordered list element where tasks will be displayed.


function addTask() {
    const taskText = taskInput.value.trim(); // Gets the text entered in the input field and removes leading/trailing whitespace.

    if (taskText !== "") { // a conditioner that checks if the task is not empty
        const li = document.createElement('li'); // Creates a new list item (<li>) element for the task.
        const taskSpan = document.createElement('span'); // Span for the task text
        taskSpan.textContent = taskText; // Sets the text content of the span to the task text.
        const deleteButton = document.createElement('button'); // creates a button for deleting a text
        deleteButton.textContent = 'Delete'; ///sets the text to be shown in the button to "delete"
        deleteButton.addEventListener('click', deleteTask); // Adds a click event listener to the delete button. When clicked, the `deleteTask` function will be executed.

        const completeButton = document.createElement('button'); // Add complete button for a task
        completeButton.textContent = 'Complete'; //sets the text to be shown in the button to "complete"
        completeButton.addEventListener('click', completeTask);  // Adds a click event listener to the complete button. When clicked, the `completeTask` function will be executed.



        li.appendChild(taskSpan); // Add the span to the li
        li.appendChild(completeButton); // Add complete button
        li.appendChild(deleteButton); // Adds the complete button to the list item.
        taskList.appendChild(li);  // Adds the newly created list item to the task list (<ul>).

        taskInput.value = ''; // Clear the input field after a task is been added to the list
        alert("Task added  succfully💥"); // Show an alert that a task was added successfully
    } else {
        alert('Please enter a task'); // Prompts a user to enter a task
    }
}

// Delete function
function deleteTask(event) {
    const listItem = event.target.parentNode; // targets the parent element (the <li>) of the clicked delete button.
    taskList.removeChild(listItem); // Removes the list item from the task list.
    alert('You just clicked delete, and the task will be deleted'); //creates an alert telling the user a task is being deleted.
}
// Complete task function:
function completeTask(event) {
     const listItem = event.target.parentNode; // targets the parent element (the <li>) of the clicked complete button.
    listItem.classList.toggle('completed'); // Toggle the 'completed' class
    alert("You have successfully completed the selected task. 🥳🍾"); // creates an alert to tell user that a task is completed.
}


// Add event listener for "Enter" key press in the input field
// Event Listener for Enter Key: where 13 is the key code for the Enter key on the keyboard
// when it is been clicked it calls the "Add Task" button.
taskInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 is the code for "Enter"
        addTask();
    }
});

