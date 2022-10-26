describe('Teste quando uma variável é declarada como: ', () => {
    const zero = 0;
    const um = 1;

    test('expect(zero).toBeFalsy();', () => {
        expect(zero).toBeFalsy();
        expect(um).not.toBeFalsy();
    });
});
  