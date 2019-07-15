// core and npm modules
const yargs = require('yargs');

// local imports
const createTask = require('./utils/createTask'); // Create
const readTask = require('./utils/readTask'); // Read
const deleteTask = require('./utils/deleteTask'); // Delete

// C R U D
createTask();
readTask();
deleteTask();

// yargs
yargs.parse();