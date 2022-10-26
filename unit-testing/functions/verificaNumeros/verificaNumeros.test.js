const verificaNumeros = require("./verificaNumeros");

describe('Requisito 1', () => {
   it('A função recebe [1, 2, 3, 4] e retorna true', () => {
        expect(true).toEqual(verificaNumeros([1, 2, 3, 4]));
   });
});

describe('Requisito 2', () => {
    it(`A função recebe [1, 2, 3, '4'] e retorna false`, () => {
        expect(false).toEqual(verificaNumeros([1, 2, 3, '4']));
    });
});

describe('Requisito 3', () => {
    it(`A função recebe um array com uma string vazia e retorna false`, () => {
        expect(false).toEqual(verificaNumeros([' ']));
    });
});
