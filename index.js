// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');

// // Add event listener for the "Add Task" button
// addButton.addEventListener('click', addTask);

// // Function to add a new task to the list
// function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === '') {
//         return; // Do nothing if the input is empty
//     }

//     const li = document.createElement('li');
//     li.classList.add('task');
    
//     const span = document.createElement('span');
//     span.textContent = taskText;
//     li.appendChild(span);
    
//     // Create a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.classList.add('delete');
//     deleteButton.addEventListener('click', deleteTask);
//     li.appendChild(deleteButton);
    
//     // Add event listener for task completion
//     li.addEventListener('click', toggleTaskCompletion);
    
//     taskList.appendChild(li);
    
//     // Clear the input field
//     taskInput.value = '';
// }

// // Function to delete a task
// function deleteTask(event) {
//     const taskItem = event.target.parentElement;
//     taskList.removeChild(taskItem);
// }

// // Function to toggle task completion
// function toggleTaskCompletion(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('completed');
//     }
// }
document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';
    }
});
