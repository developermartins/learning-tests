const verificaNumeros = (arr) => {
   for(i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return false;
        };
   };

   return true;
};

module.exports = verificaNumeros;
