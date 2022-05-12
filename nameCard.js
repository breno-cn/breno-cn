const term = require('terminal-kit').terminal;

function renderCard() {
    const card = '' +
    '┌────────────────────────────────────────────────────────────────┐\n' +
    '│|__) |__) |__  |\\ | /  \\    /  `  /\\  |    |  \\ |__  | |__)  /\\ │\n' +
    '│|__) |  \\ |___ | \\| \\__/    \\__, /~~\\ |___ |__/ |___ | |  \\ /~~\\│\n' +
    '└────────────────────────────────────────────────────────────────┘\n';

    const tabRange = 4 * 2;

    card.split('\n')
        .forEach(line => term.nextLine().right(tabRange).bold(line));
    
    // reset the cursor
    term.column(0);
}

module.exports = renderCard;