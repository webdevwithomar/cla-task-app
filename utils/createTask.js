// core and npm modules
const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

// local imports
const loadNotes = require('./loadNotes');

// app
const createTask = () => {
  yargs.command({
    command: 'add',
    describe: 'Add a Todo',
    builder: {
      task: {
        describe: 'Add a Todo',
        demandOption: true,
        type: 'string'
      }
    },
    handler: function (argv) {
      const loadData = loadNotes();

      const filterNotes = loadData.find(note => argv.task === note.task)

      if (filterNotes === undefined) {
        loadData.push({
          task: argv.task
        });

        const loadDataStringify = JSON.stringify(loadData);

        fs.writeFileSync('tasks.json', loadDataStringify);

        console.log(chalk.green(`${argv.task} added successfully`));
      } else {
        return console.log(chalk.red('The task you are trying to add already exists.'));
      }
    }
  });
}

// export
module.exports = createTask;