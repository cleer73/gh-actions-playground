const {add} = require('./index');

test('Should return the sum of two values', () => {
    expect(add(1, 1)).toBe(2);
});
