// core and npm modules
const yargs = require('yargs');
const chalk = require('chalk');
const fs = require('fs');

// local imports
const loadNotes = require('./loadNotes');

const deleteTask = () => {
    const notes = loadNotes();

    yargs.command({
        command: 'delete',
        describe: 'Delete a todo',
        builder: {
            task: {
                describe: 'Write the name of the task',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function (argv) {
            const filterNotes = notes.filter(note => argv.task !== note.task);
            const noNotes = notes.filter(note => argv.task === note.task)

            if (filterNotes.length < notes.length) {
                fs.writeFileSync('tasks.json', JSON.stringify(filterNotes));
                console.log(chalk.green('Todo removed successfully.'));
            } else {
                console.log(chalk.red('Sorry no tasks found'));
            }
        }
    })
}

module.exports = deleteTask;