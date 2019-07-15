// core module
const fs = require('fs');

// loadNotes
const loadNotes = () => {
    try {
        const bufferedData = fs.readFileSync('./tasks.json');
        const stringifiedData = bufferedData.toString();
        return JSON.parse(stringifiedData);
    } catch (e) {
        return [];
    }
}

module.exports = loadNotes;