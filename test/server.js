const express = require('express');
const app = express();
const PORT = 3000;

// --- Mock In-Memory Database (Our "D" in CRUD) ---
let tasks = [
    { id: 1, description: 'Buy groceries' },
    { id: 2, description: 'Finish Node.js project' },
    { id: 3, description: 'Go for a walk' }
];
let nextId = tasks.length + 1; // Used to assign new unique IDs

// --- Middleware Setup ---
// Set EJS as the templating engine and define where views are located
app.set('view engine', 'ejs'); 

// Middleware to parse URL-encoded bodies (for handling form submissions)
app.use(express.urlencoded({ extended: true }));

// --- Routes (The C-R-U-D Operations) ---

// 1. READ (R) - Display all tasks
app.get('/', (req, res) => {
    // Renders views/index.ejs and passes the tasks data to it
    res.render('index', { tasks: tasks, currentTask: null });
});

// 2. CREATE (C) - Add a new task
app.post('/tasks', (req, res) => {
    const description = req.body.description.trim();
    if (description) {
        const newTask = {
            id: nextId++,
            description: description
        };
        tasks.push(newTask);
    }
    // Redirect back to the home page to see the updated list
    res.redirect('/');
});

// 3. UPDATE (U) - Handle the form submission for updating a task
app.post('/tasks/update/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const newDescription = req.body.newDescription.trim();
    
    // Find the task by ID
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1 && newDescription) {
        tasks[taskIndex].description = newDescription;
    }
    
    res.redirect('/');
});


// Route to display the edit form
app.get('/tasks/edit/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const currentTask = tasks.find(task => task.id === taskId);

    if (currentTask) {
        // Render the main view, but pass the task we are currently editing
        res.render('index', { tasks: tasks, currentTask: currentTask });
    } else {
        res.redirect('/');
    }
});


// 4. DELETE (D) - Remove a task
app.post('/tasks/delete/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    // Filter out the task with the matching ID
    tasks = tasks.filter(task => task.id !== taskId);

    res.redirect('/');
});

// --- Start Server ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('To run: 1. npm install 2. node server.js');
});
