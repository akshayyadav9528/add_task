let tasks = [];
let isLoggedIn = false;

// Toggle between login and sign-up
function toggleAuth() {
  const authContainer = document.querySelector('.auth-container');
  const taskManagerContainer = document.querySelector('.task-manager-container');
  if (authContainer.style.display === 'none') {
    authContainer.style.display = 'flex';
    taskManagerContainer.classList.add('hidden');
  } else {
    authContainer.style.display = 'none';
    taskManagerContainer.classList.remove('hidden');
  }
}

// Handle user authentication (just a simulation)
function handleAuth() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    isLoggedIn = true;
    toggleAuth(); // Switch to task manager
    alert('Logged in successfully!');
  } else {
    alert('Please fill in both fields');
  }
}

// Add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  if (taskInput) {
    tasks.push({ text: taskInput, status: 'pending' });
    displayTasks();
    document.getElementById('taskInput').value = ''; // Clear input field
  } else {
    alert('Please enter a task');
  }
}

// Display tasks
function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    if (task.status === 'completed') {
      taskItem.classList.add('completed');
    }
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
        <button onclick="toggleTaskStatus(${index})">${task.status === 'pending' ? 'Complete' : 'Undo'}</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

// Edit a task
function editTask(index) {
  const newText = prompt('Edit your task:', tasks[index].text);
  if (newText) {
    tasks[index].text = newText;
    displayTasks();
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Toggle task status between pending and completed
function toggleTaskStatus(index) {
  tasks[index].status = tasks[index].status === 'pending' ? 'completed' : 'pending';
  displayTasks();
}

// Filter tasks by status
function filterTasks(status) {
  const filteredTasks = tasks.filter(task => status === 'all' || task.status === status);
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    if (task.status === 'completed') {
      taskItem.classList.add('completed');
    }
    taskItem.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
        <button onclick="toggleTaskStatus(${index})">${task.status === 'pending' ? 'Complete' : 'Undo'}</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
}

