// core and npm modules
const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

// local imports
const loadNotes = require('./loadNotes');

// read notes
const readTask = () => {
  yargs.command({
    command: 'read',
    describe: 'See all the todos in the list',
    handler: function (argv) {
      const notes = loadNotes();

      if (notes.length > 0) {
        notes.forEach((note, key) => {
          console.log(chalk.green(`Task ${key}: ${note.task}`));
        })
      } else {
        console.log(chalk.red('No notes found.'));
      }
    }
  });
}

module.exports = readTask;