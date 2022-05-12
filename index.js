const term = require('terminal-kit').terminal;

//const card = require('./nameCard');

//term.bold(card);
const renderCard = require('./nameCard');

renderCard();

term.grabInput();
term.on('key', (name, matches, data) => {
    if (name === 'CTRL_C')
        process.exit();
});