const removeItem = (arr, item) => {
    arr.splice(arr.indexOf(`${item}`), 1);

    return arr;
};

module.exports = removeItem;
