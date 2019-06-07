var add = require('./function.js').add;


test('Adding 1 + 1 equals 2', () => {
    expect(add(1, 1)).toBe(2)
  })
