const sum = require("./sum");

test('sum two values', () => {
    expect(sum(2, 3)).toEqual(5);
});
