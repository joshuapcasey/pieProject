TECHNOLOGY INSTALLED VIA TERMINAL COMMANDS 
==========================================
npm init -Y 
npm install --save-dev nodemon
npm install express
npm install dotenv
npm install sequelize     
npm install pg pg-hstore
==========================================
**These are listed as dependencies in package.json**

npx nodemon === CLI command to start server from terminal

*npm start vs npm dev*

# npm start
    - When running the npm start command from the root directory of the project, node will look for a 'scripts' object in the package.json file 
    - Once found with the key 'start', it will run the command that is specified as its value. 

# npm dev
    - Indicates that we're running the project in development mode and we're using 'nodemon' to do so.
    - nodemon allows us to make changes without having to restart the server after each change.

# node_modules
    - packages that npm (node project manager) installs that allow our application and all of its dependencies to run properly.

# package-lock.json
    - locks in the version of the packages that we're using.
    - version control system that acts s a failsafe.

# Express
    - lightweight web application framework used to help organize our application into a MVC (model view controller) architechture within our server.
    - Not a model view controller framework by itself. Still need to use our own ORM (object-relational mapping) library.
        -*Sequelize

# dotenv
: An environmental file (.env) allows us to set up application wide variables. **Still must be created manually after terminal install**

# Sequelize
    - is a JS library that we'll use to manage our PostgreSQL databases 
    - is an object relational mapper (ORM) - meaning that it sends our data to our databases using JS object syntax
    - is all about Models. Models are how we shape the data we'll be sending to our databases
    - our Models are both the objects that we'll interact with in our application as well as the primary tables that we'll create and manage in our databases

# pgAdmin
    - The pg package allows us to write the dialect that Sequelize needs to speak to our PostgreSQL databases


DB Connection URI Format = database://user:password@host:port/dbname
