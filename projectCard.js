const term = require('terminal-kit').terminal;
const fs = require('fs');

function renderProject({ name, description, url }) {
    const style = {
        hasBorder: true,
        borderChars: 'lightRounded',
        width: 80,
        fit: true,
        firstColumnTextAttr: { color: 'magenta', },
    };

    term.table([[name, description, url]], style);

    // reset cursor
    term.nextLine().column(0);
}

function renderProjects() {
    const data = fs.readFileSync('projects.json');
    const projects = JSON.parse(data);

    projects.forEach(renderProject);
}

module.exports = renderProjects;
