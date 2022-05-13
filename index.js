#!/usr/bin/env node

const term = require('terminal-kit').terminal;

const renderCard = require('./nameCard.js');
const renderProjects = require('./projectCard.js');

renderCard();
renderProjects();

term.grabInput();
term.on('key', (name, matches, data) => {
    if (name === 'CTRL_C')
        process.exit();
});
