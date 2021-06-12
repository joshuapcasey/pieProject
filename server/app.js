require('dotenv').config();                     // 1
const Express = require('express');             // 2
const app = Express();                          // 3
const controllers = require('./controllers');   // 4

app.use('/pies', controllers.piecontroller);

app.listen(process.env.PORT, () => console.log(`[Server]: App is listening on ${process.env.PORT}`));      // 4

//! Below code can be used as a landing page to display "coming soon" for project in development utilizing a /public endpoint
// app.use(Express.static(__dirname +'/public'))
// console.log(__dirname);
// app.get('/', (req,res) => res.render('index'));

/*
    1:  An environmental file that allows us to set up environment variables. Automatically loads any enironmental variables into a process.env and makes available to our application. Allows us to change key features in one place without having to change across many files. Similar to calling a variable but across the entire app   
            * https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env
    2:  Invoking Nodes 'require()' function.  Specifying the name of the module we want to import (express).
    3:  The app variable is actually creating our express application.  We grab the express module (part 1) and invoke it.
        - unlocks the use of HTTP requests, middleware functionality, and some other basic application settings.
    4:  Imports controllers into our app. Controllers are a way to isolate funcitionality in our app
    5:  Starts our server on port 4000 and runs a console log that states that it is running.
    
    MVC - Model View Controller
        Model: in a todo app, we might define what a "task" is and that a "list" is a collection of tasks.
        View:  Will define what the todos and lists look like visually.  Think frontend (React).
        Controller:  could define how a user adds a task or marks another as complete.
            - may connect the View's add button to the Model so that when you click "add task" the Model adds a new task.
*/