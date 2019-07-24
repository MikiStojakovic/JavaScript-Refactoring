"use strict";

var _main = require("./main.js");

// var add = require('./main.js').add;
// var testStatement = require('./main.js').testStatement;
// test('Adding 1 + 1 equals 2', () => {
//     expect(add(1, 1)).toBe(2)
//   })
test('invalid statement test', function () {
  expect((0, _main.testStatement)()).toBe("Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n");
});