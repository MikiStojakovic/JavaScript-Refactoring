"use strict";

var _function = require("./function.js");

test('Adding 1 + 1 equals 2', function () {
  expect((0, _function.add)(1, 1)).toBe(2);
});