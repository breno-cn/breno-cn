const term = require('terminal-kit').terminal;
const fs = require('fs');
const path = require('path');

function renderProject({ name, description, url }) {
    const style = {
        hasBorder: true,
        borderChars: 'lightRounded',
        width: 120,
        fit: true,
        firstColumnTextAttr: { color: 'magenta', },
    };

    term.table([[name, description, url]], style);

    // reset cursor
    term.nextLine().column(0);
}

function renderProjects() {
    const data = fs.readFileSync(path.resolve(__dirname, 'projects.json'));
    const projects = JSON.parse(data);

    projects.forEach(renderProject);
}

module.exports = renderProjects;
