var add = require('./main.js').add;
var statement = require('./main.js').statement;

var invoice = require('./invoices.json');
var plays = require('./plays.json');

// test('Adding 1 + 1 equals 2', () => {
//     expect(add(1, 1)).toBe(2)
//   })

test('invalid statement test', () => {
    expect(statement(invoice, plays)).toBe("Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n")
})