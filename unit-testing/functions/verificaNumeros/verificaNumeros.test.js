const verificaNumeros = require("./verificaNumeros");

describe('Verifica os números e deve retornar true ou false', () => {
   it('A função recebe [1, 2, 3, 4] e retorna true', () => {
    expect(true).toEqual(verificaNumeros([1, 2, 3, 4]));
   });
});
