# todo-app

# Simple To-Do App

This is a simple to-do list application built using HTML, CSS, and JavaScript.  It allows users to add, complete, and delete tasks.

## Table of Contents

- Introduction
- Features
- How to Use
- Technologies Used
- Project Structure
- Future Enhancements
- Contributing
- License


## Introduction

This project provides a basic to-do list functionality.  It's a great example for learning fundamental JavaScript DOM manipulation and event handling.  Users can input tasks, mark them as complete, and remove them from the list.

## Features

* *Add Tasks:*  Users can type in a task and click the "Add Task" button (or press Enter) to add it to the list.
* *Complete Tasks:* Clicking the "Complete" button toggles a "completed" class on the task, visually indicating completion (e.g., strikethrough).
* *Delete Tasks:* Clicking the "Delete" button removes the task from the list.
* *Input Validation:* Prevents adding empty tasks.
* *Enter Key Support:* Adds tasks when the Enter key is pressed in the input field.

## How to Use

1.  *Clone the Repository:*  git clone https://github.com/TobeChukwu278/todo-app.git 
2.  **Open index.html:** Navigate to the project directory and open the index.html file in your web browser.
3.  *Add a Task:* Type your task in the input field and click the "Add Task" button or press Enter.
4.  *Complete a Task:* Click the "Complete" button next to the task.
5.  *Delete a Task:* Click the "Delete" button next to the task.

## Technologies Used

*   *HTML:* For structuring the web page.
*   *CSS:* For styling the elements (Note:  While not explicitly in the provided code, you'll likely have a CSS file to style the app).
*   *JavaScript:* For adding interactivity and dynamic functionality.

## Project Structure

simple-todo-app/
├── index.html       // Main HTML file
├── script.js       // JavaScript file for functionality
└── styles.css       // (Optional) CSS file for styling


*   **index.html:** Contains the basic HTML structure, including the input field, buttons, and the unordered list to display tasks.  It links to the script.js file.
*   **script.js:** Contains the JavaScript code that handles adding, deleting, and completing tasks, as well as the event listeners.
*   **styles.css:** (Optional) Contains the CSS rules to style the to-do list elements.

## Structure explanation

*   **HTML Structure:** Clearer structure with a <span> element to hold the task text, making it easier to style and manipulate.
*   **CSS Styling:** Improved styling for better visual appeal, including hover effects, better spacing, and a completed class for completed tasks. Increased font sizes for better readability. Added word-break: break-all; to the task text span to prevent long words from breaking the layout.
*   **JavaScript Functionality:**
*   *Enter Key Support:* Added event listener to allow adding tasks by pressing Enter in the input field.
*   *Complete Task Feature:* Added a "Complete" button to each task. Clicking it toggles the completed class, which applies strikethrough styling via CSS.
*   *Task Text Span:* Uses a <span> to hold the task text, making it easier to style and manipulate separately from the buttons.
*   *Trim Input:* Uses taskInput.value.trim() to remove leading/trailing whitespace from the input, preventing empty tasks from being added.
*   *Clear Input:* Clears the input field after adding a task.
*   *Delete Task:* Function to delete tasks.
*   *Comments:* Added comments to the code to explain what each part does.

## Future Enhancements

*   *Local Storage:* Implement local storage to persist tasks even after the browser is closed.
*   *Styling:* Improve the visual design and user experience with CSS.
*   *Edit Task Functionality:* Add the ability to edit existing tasks.
*   *Task Prioritization:*  Add a feature to prioritize tasks.
*   *More Robust Styling:*  Use a CSS framework like Bootstrap or Tailwind CSS for a more polished look.

## Summary: 

In summary, this JavaScript code creates a simple to-do list application. It allows users to:

*   *Add tasks:* Type a task into the input field and click "Add Task" or press Enter.
*   *Delete tasks:* Click the "Delete" button next to a task to remove it.
*   *Mark tasks as complete:* Click the "Complete" button to toggle a "completed" class on the task, which can be styled (e.g., strikethrough).
*   The code interacts with the HTML elements of the to-do list, dynamically creating, adding, and removing list items based on user input.  The use of event listeners makes the page interactive.
*  The trim() function handles cases where the user enters only spaces.  The span element for the task text allows the text to be styled separately from the buttons.

## Contributing

Contributions are welcome!  Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes.
4.  Push your branch to your forked repository.
5.  Submit a pull request.

## License


MIT License

Copyright (c) 2025 TobeChukwu Ejiofor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated 1  documentation files , to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:   
 1. 
f-lab.kr
f-lab.kr

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.