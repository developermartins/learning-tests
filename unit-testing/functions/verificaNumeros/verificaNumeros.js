const verificaNumeros = (arr) => {
    arr.forEach(element => {
       if (typeof element !== 'number') {
        return false;
       };
    });

    return true;
};

module.exports = verificaNumeros;
