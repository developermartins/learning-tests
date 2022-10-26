
const removeItem = require('./removeItem');

describe('Remove item da lista', () => {
    it('Remove feijão', () => {
        const itens = ['arroz', 'Iron Maiden', 'feijão'];
        expect(['arroz', 'Iron Maiden']).toEqual(removeItem(itens, 'feijão'));
    });

    it('Remove Iron Maiden', () => {
        const itens = ['arroz', 'Iron Maiden', 'feijão'];
        expect(['arroz', 'feijão']).toEqual(removeItem(itens, 'Iron Maiden'));
    });

    it('Remove groselha caso exista', () => {
        const itens = ['arroz', 'Iron Maiden', 'feijão', 'groselha'];
        expect(removeItem(itens, 'groselha')).not.toContain('groselha');
    });
});